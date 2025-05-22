//if
// const isUserLoggedIn = true
// if(isUserLoggedIn){

// }

// if(2 == "2"){
//     console.log("executed")
// }

// const temperature = 60

// if(temperature < 50){
//     console.log("less than 50")
// }else{
//     console.log("greater than 50")
// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }

//SHORT HAND NOTATION

// const balance = 1000;

// if (balance < 500) console.log("test"); //implicit expression

// //NESTING

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// }

// const userLoggedIn = true;
// const debitcard = true;
// const loggedInfromGoogle = false;
// const loggedInfromEmail = true;

// if (userLoggedIn && debitcard) {
//   console.log("allow to buy course");
// }

// if (loggedInfromGoogle || loggedInfromEmail) {
//   console.log("user logged in ");
// }

//*************SWITCH**************

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = "6";

switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;

  default:
    console.log("no month is found");
    break;
}

//  TRUTHY AND FALSY VALUES

// const userEmail = "hitest@ai"

// if(userEmail){
//     console.log("got user email")
// }else{
//     console.log("dont have user email")
// }

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, Nan

//truthy values

// "0", "false", " ", [], {}, function(){}

const userEmail = [];
if (userEmail.length === 0) {
  console.log("arr is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

//NULLISH COALESCING OPERATOR (??): NULL UNDEFINED

let val1;
//val1 = 5?? 10
//val1 = null ?? 10\
//val1 = undefined ?? 15
//val1 = null ?? 10 ?? 20
//val1 = undefined  ?? null

console.log(val1);

//TERNIARY OPERATOR

//condition ? true : false

const iceTea = 100;
iceTea <= 80 ? console.log("less than 80") : console.log("greater than 80");
