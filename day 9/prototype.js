// let myname = "harshi   "

// console.log(myname.trueLength);

let myHeros = ["thor", "spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling", 
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
Object.prototype.harshi = function(){
    console.log(`harshi is present in all objects `)
}
// heropower.harshi()

myHeros.harshi()

Array.prototype.heyharshi = function(){
    console.log(`harshi says hello`);
}

myHeros.heyharshi()


//inheritance 

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isavail: false 
}

const TA = {
    makeassign: "js assignments",
    fullTime: true,
    __proto__: teachingSupport
}

//modernsyntax 
Object.setPrototypeOf(teachingSupport, teacher)


let anotherUsername =  "chaiaurcode     "

String.prototype.truelength = function(){
    console.log(`${this}`)
  
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.truelength()
"harshi  ".truelength()
