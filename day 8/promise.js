// promise object represent the eventual completion of an asynchronous operation and its resulting value 
// promise state has three states 

const promise1 = new Promise(function(resolve, reject){
    //do an asyn task 
    //db calls, crytography

    setTimeout(function(){
        console.log("async task is complete")
        resolve()
    } , 1000)
})

promise1.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})

// resolve is directly connected to the then 
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email:"chai@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user)
})

const promise4 = new Promise(function(resolve ,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "harshi", password: "123"})

        }else{
            reject('error: something went wrong')
        }
    },1000)
})

 promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("the promise is either resolve or rejected "))

const promise5 = new Promise(function(resole, reject){
     setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})

        }else{
            reject('error: js went wrong')
        }
    },1000)
});

//async awaits can also be used instead of then or catch 

async function consume5(){
   try{
    const response =  await promise5
   console.log(response)
   } catch(error){
    console.log(error)
   }
}

consume5()

// async function getallusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json() //need to use await as the conversion also takes times 
//     console.log(data);
        
//     } catch (error) {
//         console.log("e:", error)
//     }
// }

// getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
} )
.then((data)=>{
    console.log(data);
}).catch((error) => console.log(error))



//  FETCH
//starts the process of fetching a resource from the network returning a promise whihc is fulfilled once the response is available    
