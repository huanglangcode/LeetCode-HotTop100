/* Proxy Descriptor Types */

import { BaseIpc } from "./BaseIpc";

export enum ProxyPropertyType {
  Value = "value",
  Function = "function",
  FunctionSync = "FunctionSync",
  FunctionRely = "functionRely",
}

export interface ProxyDescriptor {
  channel: string;
  properties: { [propKey: string]: ProxyPropertyType };
}

export interface UnknownRequest {
  type: "unknown";
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

export interface ReplyRequest {
  type: RequestType.Reply;
  propKey: string;
  args: any[];
}

export type Request =
  | UnknownRequest
  | GetRequest
  | ApplyRequest
  | SyncRequest
  | ReplyRequest;

/* Request Types */

export enum RequestType {
  Get = "get",
  Apply = "apply",
  Sync = "Sync",
  Reply = "Reply",
}

export function isFunction(value: any): value is Function {
  return value && typeof value === "function";
}

const registrations: { [channel: string]: ProxyServerHandler | null } = {};

// step1.注册被需要被代理的类. 监听对应调用
export function registerProxy<T>(target: T, transport: BaseIpc): VoidFunction {
  //@ts-ignore
  const channel = target.channel;

  // if (registrations[channel]) {
  //     throw new Error(`Proxy object has already been registered on channel ${channel}`);
  // }

  const server = new ProxyServerHandler(target);
  registrations[channel] = server;
  transport.on(
    channel,
    async (event: any, request: Request, correlationId: string) => {
      console.log("event, request,correlationId  :>> ", request, correlationId);
      let { sender } = event;
      server
        .handleRequest(request, sender)
        .then((result) => {
          // if (!correlationId) {
          //     event.returnValue = result;
          // } else {
          //     if (!sender) {
          //         sender && sender.send(correlationId, result);
          //     } else {
          //         event.send(correlationId, result)
          //     }
          // }
          console.log("correlationId :>> ", correlationId);
          console.log("result :>> ", result);
          let webSocketArgs = JSON.stringify([correlationId, result]);
          sender.send(webSocketArgs);
        })
        .catch(
          (error) =>
            sender && sender.send(correlationId, { error: error.message })
        );
    }
  );

  return () => unregisterProxy(channel, transport);
}

function unregisterProxy(channel: string, transport) {
  transport.removeAllListeners(channel);
  registrations[channel] = null;
}

// step2.创建出代理类. 生成一个可以发送事件的对象
export function createProxy<T>(target: any, transport: BaseIpc): T {
  const result = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(target)).forEach(
    (propKey) => {
      if (propKey !== "constructor") {
        let functionType = ProxyPropertyType.Function;
        if (propKey.endsWith(RequestType.Sync)) {
          functionType = ProxyPropertyType.FunctionSync;
        }
        if (propKey.endsWith(RequestType.Reply)) {
          functionType = ProxyPropertyType.FunctionRely;
        }
        Object.defineProperty(result, propKey, {
          enumerable: true,
          get: memoize(() =>
            getProperty(functionType, propKey, target.channel, transport)
          ),
        });
      }
    }
  );
  Object.getOwnPropertyNames(target).forEach((propKey) => {
    if (propKey !== "channel") {
      Object.defineProperty(result, propKey, {
        enumerable: true,
        get: () =>
          getProperty(
            ProxyPropertyType.Value,
            propKey,
            target.channel,
            transport
          ),
      });
    }
  });
  return result as T;
}

function getProperty(
  propertyType: ProxyPropertyType,
  propKey: string,
  channel: string,
  transport
) {
  switch (propertyType) {
    case ProxyPropertyType.Value:
      return makeRequest(
        { type: RequestType.Get, propKey },
        channel,
        transport
      );
    case ProxyPropertyType.Function:
      return (...args: any[]) =>
        makeRequest(
          { type: RequestType.Apply, propKey, args },
          channel,
          transport
        );
    case ProxyPropertyType.FunctionSync:
      return (...args: any[]) =>
        makeSyncRequest(
          { type: RequestType.Sync, propKey, args },
          channel,
          transport
        );
    case ProxyPropertyType.FunctionRely:
      return (...args: any[]) =>
        makeRequest(
          { type: RequestType.Reply, propKey, args },
          channel,
          transport
        );
    default:
      throw new Error("getProperty类型错误");
  }
}

function memoize(getter: Function): () => any {
  let result;
  return () => (result ? result : (result = getter()));
}

function makeSyncRequest(request: Request, channel: string, transport): void {
  return transport.sendSync(channel, request);
}

function makeRequest(
  request: Request,
  channel: string,
  transport: BaseIpc
): Promise<any> {
  const correlationId = (Math.random() * 100000).toString().slice(6);
  console.log(
    "request, channel, transport :>> ",
    request,
    channel,
    correlationId
  );
  transport.send(channel, request, correlationId);

  return new Promise((resolve, reject) => {
    let timer = setTimeout(() => {
      reject("timeout");
    }, 3000);
    transport.once(correlationId, (response: any) => {
      console.log(" once event response:>> ", response);
      clearTimeout(timer);
      if (!response) {
        resolve(undefined);
      }
      if (response.error) {
        reject(response.error);
      }
      resolve(response);
    });
  });
}

class ProxyServerHandler {
  constructor(private target: any) {}

  public async handleRequest(request: Request, sender: any): Promise<any> {
    switch (request.type) {
      case RequestType.Get:
        return this.handleGet(request);
      case RequestType.Apply:
      case RequestType.Sync:
        return this.handleApply(request);
      case RequestType.Reply:
        return this.handleReply(request, sender);
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

  private handleReply(
    request: ApplyRequest | SyncRequest | ReplyRequest,
    sender: any
  ): any {
    const { propKey, args } = request;
    const func = this.target[propKey];

    if (!isFunction(func)) {
      throw new Error(`Remote property [${propKey}] is not a function`);
    }

    return func.apply(this.target, [...args, sender]);
  }
}
