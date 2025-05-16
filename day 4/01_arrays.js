//array

//shallow copies are made in arrays 
const arr = [0,1,2,3,4,5]


console.log(arr[3])

//array methods 

arr.push(6)
console.log(arr)
arr.pop();
console.log(arr)

arr.unshift(9)
console.log(arr);


console.log(arr.includes(8))
console.log(arr.indexOf(8))

const newArr = arr.join()

console.log(typeof arr)//this is an object 
console.log(typeof newArr)// tgis is a string

//slice , splice

console.log("A ", arr);

const myn1 = arr.slice(1,3)

console.log(myn1);
console.log("B ", arr)

const myn2 = arr.splice(1,3)
console.log("C ", arr)
console.log(myn2)


//difference between slice and splice is in slice no alterations in the main array ocsurs but in splice alterations in main arrays happens 

const marvel_heros = ["thor", 'ironman' , 'spiderman']
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
console.log(marvel_heros)

//concatenation is also one of the method of combining
const allHeros = marvel_heros.concat(dc_heros)
console.log(marvel_heros)
console.log(allHeros)

//better method to combine two or more arrays (generally used)
const all_heros = [...marvel_heros,...dc_heros]
console.log(all_heros)


const arr2 = [1, 2, 3, [4, 5, 6], 7, [6,7,[4,5]]]

const arr3 = arr2.flat(Infinity)
console.log(arr3)



console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"))
console.log(Array.from({name: "harshi"})) // intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))