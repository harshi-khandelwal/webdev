//singleton by constructor only  object.create

//object literals 


// const mySym = Symbol("key1")
// const JsUser= {
//     name: "hitesh",
//     "full name": "harshi Khandelwal",
//     [mySym]: "myKey1",
//     age: 18,
//     location: "jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false
// }

// //access of object

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


// JsUser.greeting = function(){
//     console.log("hello js user");
// }
// JsUser.greeting2 = function(){
//     console.log(`hello js user, ${this.name} `);
// }
// console.log(JsUser.greeting)
// console.log(JsUser.greeting2())


//OBJECT 2 


//singleton'

//const tinderUser = new Object()
const tinderUser = {}
 tinderUser.Id = "123abc"
 tinderUser.name = "sammy"
 tinderUser.islogged = false

 
console.log(tinderUser)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2)//empty object target 
console.log(obj3);

//spread operator same as array

const obj4 = {...obj1,...obj2}
console.log(obj4)


const users = [//array of objects 
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//OBJECT 3 

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//destructure 
const {courseInstructor: instructor} = course
console.log(instructor)


//APIS

// {
//     "name": "harshi",
//     "coursename": "js in hindi"
// }

//arrat=ys and objects are both used in json 
//random user me is a popular api