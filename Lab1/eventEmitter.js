import {EventEmitter} from 'node:events';

const sayHi = (name) => {
    console.log('${name} logged in');

};

const task = new EventEmitter();

task.once("Exit", (name) => {
    console.log('Sytem shutdown by ${name}');
});

task.once("greet", (name) => {
    console.log('Sytem started');
});

task.on("greet", sayHi);
task.on("greet",(name)=>{
    console.log('${name} starts working');
});

task.on("greet",(name) => {
    console.log('${name} Lagged out');
});

task.emit("greet", "Rahul Singh");
console.log();
task.off("greet", sayHi);
task.emit("greet","Aviral Gupta");
task.emit("Exit","Manager")
task.removeAllListeners("greet");
