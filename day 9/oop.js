// const user = {
//     // properties 
//     username: "harshi",
//     loginCount: 8,
//     signedIn: true,

//     // methods 
//     getUserDetails: function(){
//         // console.log("got user details from database");
//         // console.log(`username: ${this.username}`);
//         console.log(this)
//     }

// }

// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this)

// when console.log(this) is done in browser a lot of things are there in it unlike in console where empty parenthesis is shown 
// this is used for current context 

// CONSTRUCTOR FUNCTION 

// const promise1 = new Promise()

// new keyword is a constructor function as it allows to make multiple instances form a single object literal

function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this 
}

const userone = new user("harshi" , 12, true)
const usertwo = new user("harshi k " , 11, false )

// if we wont use new constructor function then this user will overwrite initial values which will hamper the data hence it is beneficial to add a new wrod keyword
console.log(userone)


// new keyword - create - new instance - empty object - constuctor function call - arguments etc packed and delivered - inject - you get the function 