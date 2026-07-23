console.log("1: start");
setTimeout(() => console.log("2: setTimeout"),0);
setImmediate(() => console.log("3: setImmediate"));
process.nextTrick(() => console.log("4: nextTrick"));
console.log("4: end");