const EventEmitter = require("events");
const emitter = new EventEmitter();
// console.log(events);
// const greetUser = () => {
//   console.log("Welcome");
// }; // listener
// emitter.on("greet", greetUser);
// // emitter.on(eventname, listener)

// emitter.emit("greet");
// // emitter.emit(eventname)

// // emitter off
// emitter.off("greet", greetUser);
// // emitter.off(eventname, listener)
// emitter.emit("greet"); // no result

// const eval = () => {
//   console.log((34 * 2) % 2);
// }; // listener
// emitter.on("calculate", eval);

// // emitter.on(eventname, listener)

// emitter.emit("calculate");
// // emitter.emit(eventname)
// emitter.off("calculate", eval); // remove the event from the module
// // emitter.off(eventname, listener)
// emitter.emit("calculate"); // no result

// const products = [
//   { name: "Iphone", price: 2300000 },
//   { name: "Oriamo Freepod", price: 23000 },
//   { name: "New Age Power Bank", price: 12000 },
//   { name: "Zeelot Speaker", price: 50000 },
// ];

// // addListener
// const productFetch = () => {
//   setTimeout(() => {
//     products.map((product) => console.log(product.name));
//   }, 5000);
// }; // listener
// emitter.addListener("fetchProduct", productFetch);
// // emitter.addListener(eventname, listener)

// // emitter.removeListener(eventname, listener)

// emitter.addListener("printAddress", (str, cty, state) => {
//   console.log(`${str}, ${cty}, ${state}`);
// });

// // emitter.addListener(eventname, listener)

// emitter.emit("fetchProduct");
// // removeListener
// emitter.removeListener("fetchProduct", productFetch); // remove the event from the module
// emitter.emit("fetchProduct");
// emitter.emit("printAddress", "Daniel street", "Ibadan", "Oyo State");

const echoDate = () => {
  const d = new Date();
  console.log(d.toLocaleDateString());
};
emitter.once("printDate", echoDate);
emitter.emit("printDate");
// emitter.off("printDate", echoDate);
emitter.emit("printDate");

const echoTime = () => {
  const d = new Date();
  console.log(d.toLocaleTimeString());
}
emitter.prependListener('printTime', echoTime);
emitter.emit('printTime');
emitter.off('printTime', echoTime);
emitter.emit('printTime');
