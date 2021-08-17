import "reflect-metadata";
const wrapperFn = (originalMethod: Function, target: any) => {

    return async (...args: any[]) => {
        try {
            let res = await originalMethod.apply(target, args)
            return res
        } catch (error) {
            console.log('error.message :>> ', error.message);
            return '全局统一处理'
        }
    }
}

const ErrorHandler: ClassDecorator = <TFunction extends Function>(target: TFunction) => {
    Object.getOwnPropertyNames(target.prototype).filter(ele => ele !== 'constructor').forEach((propKey) => {
        if (propKey !== 'constructor' && typeof target.prototype[propKey] === 'function') {
            let originalMethod = target.prototype[propKey]
            target.prototype[propKey] = wrapperFn(originalMethod, target)
        }
    })
}

const MethodHandler: MethodDecorator = function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value
    descriptor.value = async (...args: any[]) => {
        try {
            let res = await originalMethod.apply(target, args)
            return res
        } catch (error) {
            console.log('error.message :>> ', error.message);
            return '针对方法单独处理'
        }
    }
}

@ErrorHandler
class A {
    @MethodHandler
    limit5(params: string) {
        if (params.length > 10) {
            throw new Error(`limit5: ${params.length}`);
        }
        return params
    }

    limit10(params: string) {
        if (params.length > 10) {
            throw new Error(`limit10: ${params.length}`);
        }
        return params
    }

    limit15(params: string) {
        if (params.length > 10) {
            throw new Error(`limit15: ${params.length}`);
        }
        return params
    }
}

var a = new A()

let ans = a.limit5('aaaaaa')
console.log('ans :>> ', ans);

let ans2 = a.limit10('aaaaaaaaaaa')
console.log('ans2 :>> ', ans2);

let ans3 = a.limit15('aaaaaaaaaaaaaaaa')
console.log('ans3 :>> ', ans3);