class user {
    constructor(username) {
        this.username = username 
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email 
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}

const chai = new teacher("chai", "chai@teacher.com", "123")

chai.addCourse()