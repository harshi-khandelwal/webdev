// ES6

// class user {
//     constructor(username, password , email) {
//         this.username = username
//         this.email= email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai", "123", "chai@gmail.com")

// console.log(chai.encryptPassword())

// console.log(chai.changeUsername())

//behind the scenes

function user(username, email, password){
    this.username = username
    this.email= email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUsername = function(){
        return `${this.username.toUpperCase()}`
   
}

const tea = new user("tea", "123", "chai@gmail.com")
console.log(tea.encryptPassword())
console.log(tea.changeUsername())