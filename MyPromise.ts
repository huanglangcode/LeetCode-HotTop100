const STATE = 'pending' || 'resolved' || 'rejected'

class MyPromise {
    state: string
    value: any
    reason: any
    onResolvedCallbacks: Function[]
    onRejectedCallbacks: Function[]
    constructor(executor) {
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined

        this.onResolvedCallbacks = []

        this.onRejectedCallbacks = []

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
        let _this = this

        function resolve(value) {
            if (_this.state === 'pending') {
                _this.value = value
                _this.state = 'resolved'
            }
        }

        function reject(reason) {
            if (_this.state === 'pending') {
                _this.reason = reason
                _this.state = 'rejected'
            }
        }
    }
    then(onFulfilled: Function, onRejected: Function) {
        if (this.state === 'pending') {
            this.onRejectedCallbacks.push(onFulfilled)
        }
        if (this.state === 'pending') {
            this.onRejectedCallbacks.push(onRejected)
        }
    }
}

