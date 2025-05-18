// function addTwo(num1, num2){
//    console.log(num1 + num2);
// }

// function addTwo(num1, num2){
//     let result = num1+ num2
//     return result

//    //after initailising result nothing get printed 
// }
// const result = addTwo(3,4)

//console.log(result)

// function loginMessage(username){
//     // if(username === undefined){
//     //     console.log("please enter a username ");
//     //     return
//     // }
//     if(!username){
//         console.log("please enter a username ");
//         return
//     }
//     return `${username} just logged in` 
// }

// console.log(loginMessage())

//if we do not pass anything then it will pass undefined 

//where no of arguments is not known 

// function calCartPrice(...num1){
//     return num1
// }

// console.log(calCartPrice(200, 400, 500))

// //rest operator (same as spread operator )
// //REST OPERATOR multiple arguments when needs to be added 

// const user = {
//     username: "harshi",
//     price: 199
// }

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
// }

// handleObject(user)


// const arr = [200, 400, 500]

// function returnarr(getarr){
//     return getarr[1]
// }

// console.log(returnarr(arr))

//  SCOPES 


// if(true){
// let a = 10
// const b = 20
// var c = 30
// }

//console.log(a); let is a local scope variable 
//console.log(b); const is also a local scope 
//console.log(c);  var is a global scope 

function one(){
    const username = "harshi"

    function two(){
        const websit ="youtube"
        console.log(username);

    }
    // console.log(website);

    two()
}

one()


//interseting 

function addone(num){
    return num+1
}

console.log(addone(5))
addTwo(5)
const addTwo = function(num){
    return num + 2
}
//hoisting is where we abide a function in a const or let 
//you cannot call the function before declaration in hoisting 

