const user = {
    username: "harshi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `)
        console.log(this)
    }

    //this icon refers to the current context   
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this)

const addTwo = (num1,num2) => num1 +num2

//curly brackets wrapped need to add return keyword : explicit return 

//round brackets or w/o brackets no need to add return value : implicit return 

console.log(addTwo(3,4))


