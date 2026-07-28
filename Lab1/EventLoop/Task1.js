const f1 =()=> {
    console.log("f1 start");
    f2();
    console.log("f1 running");
    console.log("f1 end");
};

const f2 =()=> {
    console.log("f2 start");
    f3();
    console.log("f2 running");
    console.log("f2 end");
};

const f3 =()=> {
    console.log("f3 start");
    console.log("f3 running");
    console.log("f3 end");
};


function main(){
    console.log("main starts");
    f1();
    console.log("main running");
    console.log("main ends");
};
main(); // javascript is synchronous and single threaded
// in asynchronous we use event loop to mange the call
// asuncronous using timer 
// 1:- set TIMEOUT
// 2:-set immediate
// 3:- process.nextTick
// 4:-set interval