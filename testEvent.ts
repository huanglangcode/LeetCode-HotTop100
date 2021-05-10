import { EventEmitter } from "events";
import { TypedEvent } from "./typedEvent";

const onFoo = new TypedEvent<"foo">();
const onBar = new TypedEvent<"bar">();

// Listen:
onFoo.on((params) => {
    console.log("params :>> ", params);
});
onBar.once(bar => console.log("once :>> ", bar));
// Emit:
onFoo.emit("foo", { a: 1, b: 2 }, { c: 3, d: 4 });
onBar.emit("bar");


const emitter = new EventEmitter({ captureRejections: true });


// Listen
emitter.on("foo", foo => console.log(foo));
emitter.on("bar", bar => console.log(bar));

// Emit
emitter.emit("foo", "hello world foo");
emitter.emit("bar", "hello bar");
