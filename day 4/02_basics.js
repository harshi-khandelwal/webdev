// const name = "harshi"
// const repoCount = 50

// console.log(name + repoCount + "value")

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

// const gameName = new String("hitesh-hc")

// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

// const newString = gameName.substring(0,4)
// console.log(newString)


// const anotherString = gameName.slice(-8,4)
// console.log(anotherString)


// const newStringOne = "    hitesh    "

// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://harshi.com/harshi%20khandelwal"

// console.log(url.replace('%20' , '-'));
// console.log(url.includes('harshi'));


// console.log(gameName.split('-'));


/************lecture 12 numbers and maths ***********/

// const score = 400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

// const otherNumber = 123.8897

// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// maths

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.min(4,3,6,9));

// console.log(Math.random())
// console.log((Math.random()*10) + 1)

// const min = 10
// const max = 20
// console.log(Math.floor((Math.random() * (max-min + 1)) + min))


// *************dates and time *********************//

// let myDate = new Date()
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate)


// //month is started as 0 in javascript i.e. jan is termed as 0
// let myCreateDate = new Date(2023, 0, 23);
// console.log(myCreateDate.toDateString())

// let myTimeStamp = Date.now()

// console.log(myTimeStamp)

// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));


// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1)


// newDate.toLocaleString('default',{
//     weekday: "long",
//     timeZone
// })