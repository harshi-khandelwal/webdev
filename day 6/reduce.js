const num = [1,2,3]

// const myTotal = num.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)


const myTotal = num.reduce((acc, currval) =>  acc + currval, 0)
console.log(myTotal)