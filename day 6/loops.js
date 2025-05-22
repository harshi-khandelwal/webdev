//FOR LOOP

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best no");
//   }
//   console.log(element);
// }

// //DO WHILE AND WHILE LOOPS
// let i = 0;
// while (i <= 10) {
//   console.log(`value of index is ${i}`);
//   i = i + 2;
// }

//HIGHER ORDER ARRAY LOOPS

//for of loop : array specific loop

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }

// const greetings = "hello world";
// for (const greet of greetings) {
//   console.log(`each char is ${greet}`);
// }

//MAPS

//unique values in same order as entered
// const map = new Map();
// map.set("In", "india");

//maps are iterable in for of loops  but objects are not

//for in loop used in objects as well as for arrays by using arr[key]
//but for in wont work in maps as it is not iterable
// const myObject = {
//   js: "javascript",
//   cpp: "c++",
//   rb: "ruby",
// };

// for (const key in myObject) {
//   console.log(myObject[key]);
// }

// //FOR EACH LOOP

// const coding = ["js", "ruby", "css"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

//for each values doesnot return anything 

//filters

const myNums = [1,2,3,4,5,6,7]

//filter call back function which return the value 
const newNums = myNums.filter((num) =>num > 4 )
console.log(newNums)