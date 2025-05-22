class user {
    constructor(username) {
        this.username = username 
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const hitest = new user("harshi")
console.log(harshi.createId())