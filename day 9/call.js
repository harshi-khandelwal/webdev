function setName(username){
    this.username = username 
    console.log("called")
}

function createuser(username , email, password){
    setName.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createuser("chai", "chai@gmail" , "12345")
console.log(chai)

// call current execution passes the context to some other function 