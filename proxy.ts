/* Proxy Descriptor Types */

import { EventEmitter } from "stream";

export enum ProxyPropertyType {
    Value = 'value',
    Value$ = 'value$',
    Function = 'function',
    Function$ = 'function$',
    FunctionSync = "FunctionSync"
}

export interface ProxyDescriptor {
    channel: string;
    properties: { [propKey: string]: ProxyPropertyType };
}

export interface UnknownRequest {
    type: 'unknown';
}

export interface GetRequest {
    type: RequestType.Get;
    propKey: PropertyKey;
}

export interface ApplyRequest {
    type: RequestType.Apply;
    propKey: string;
    args: any[];
}

export interface SyncRequest {
    type: RequestType.Sync;
    propKey: string;
    args: any[];
}

export type Request = UnknownRequest | GetRequest | ApplyRequest | SyncRequest

/* Request Types */

export enum RequestType {
    Get = 'get',
    Apply = 'apply',
    Sync = "Sync"
}

export function isFunction(value: any): value is Function {
    return value && typeof value === 'function';
}


const registrations: { [channel: string]: ProxyServerHandler | null } = {};

export function registerProxy<T>(target: T, transport: EventEmitter): VoidFunction {
    //@ts-ignore
    const channel = target.channel;

    if (registrations[channel]) {
        throw new Error(`Proxy object has already been registered on channel ${channel}`);
    }

    const server = new ProxyServerHandler(target);
    registrations[channel] = server;
    transport.on(channel, async (event: any, request: Request, correlationId: string) => {
        console.log('event, request,correlationId  :>> ', event, request, correlationId);
        let { sender } = event;
        server.handleRequest(request)
            .then((result) => {
                if (!correlationId) {
                    event.returnValue = result;
                } else {
                    sender && sender.send(correlationId, result);
                }
            })
            .catch(error => sender && sender.send(correlationId, { error: error.message }));
    });

    return () => unregisterProxy(channel, transport);
}

function unregisterProxy(channel: string, transport: any) {
    transport.removeAllListeners(channel);
    const server = registrations[channel];

    if (!server) {
        throw new Error(`No proxy is registered on channel ${channel}`);
    }
    registrations[channel] = null;
}

export function createProxy<T>(target: any, transport: EventEmitter): T {
    const result = {};
    Object.getOwnPropertyNames(Object.getPrototypeOf(target)).forEach(propKey => {
        if (propKey !== 'constructor') {
            console.log('propKey :>> ', propKey);
            Object.defineProperty(result, propKey, {
                enumerable: true,
                get: memoize(() => getProperty(ProxyPropertyType.Function, propKey, target.channel, transport))
            });
        }
    });
    return result as T;
}


function getProperty(propertyType: ProxyPropertyType, propKey: string, channel: string, transport: any) {
    switch (propertyType) {
        case ProxyPropertyType.Value:
            return makeRequest({ type: RequestType.Get, propKey }, channel, transport);
        case ProxyPropertyType.Function:
            return (...args: any[]) => makeRequest({ type: RequestType.Apply, propKey, args }, channel, transport);
        case ProxyPropertyType.FunctionSync:
            return (...args: any[]) => makeSyncRequest({ type: RequestType.Sync, propKey, args }, channel, transport);
        default:
            throw new Error("getProperty类型错误");
    }
}

function memoize<T>(getter: () => T): () => T {
    // let result: T = null;
    // return () => (result ? result : result = getter());
    let result: T;
    return () => (result ? result : result = getter());
}

function makeSyncRequest(request: Request, channel: string, transport: any): void {
    return transport.sendSync(channel, request);
}

function makeRequest(request: Request, channel: string, transport: EventEmitter): Promise<any> {
    console.log('request :>> ', request, 'channel', channel, 'transport', transport);
    const correlationId = (Math.random() * 100000).toString();
    transport.emit(channel, transport, request, correlationId);

    return new Promise((resolve, reject) => {
        transport.once(correlationId, (event: Event, response: any) => {
            if (!response) {
                return resolve(undefined);
            }
            if (response.error) {
                return reject(response.error);
            }
            return resolve(response);
        });
    });
}




class ProxyServerHandler {
    constructor(private target: any) { }

    public async handleRequest(request: Request): Promise<any> {
        switch (request.type) {
            case RequestType.Get:
                return this.handleGet(request);
            case RequestType.Apply:
            case RequestType.Sync:
                return this.handleApply(request);
            default:
                throw new Error("handleRequest 类型错误");
        }
    }
    private handleGet(request: GetRequest): Promise<any> {
        return this.target[request.propKey];
    }

    private handleApply(request: ApplyRequest | SyncRequest): any {
        const { propKey, args } = request;
        const func = this.target[propKey];

        if (!isFunction(func)) {
            throw new Error(`Remote property [${propKey}] is not a function`);
        }
        return func.apply(this.target, args);
    }
};
