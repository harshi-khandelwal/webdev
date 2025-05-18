//Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log("db connected")
// }

// chai()

// (function definition)(execution) : 
//why? the func that got immediately executed as well as to remove the pollution of global scope variables 

(function chai(){
    console.log("db connected");
})();

// (() => {
//     console.log("db connected two");
// })();

((name ) => {
    console.log(`db connected two ${name}`);
})("harshi");


