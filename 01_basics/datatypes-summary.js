// primitive - call by value

// 7types: string, number, boolean , null,undefined,symbol, bigint


const score = 100
const scoreValue = 100.5
const isLoggedIn = false 
const outsideTemp =null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id== anotherId);

const bigNumber = 34456546577676n


// reference - non primitive
// arrays , objects, functions 


const heros = [ "shaktimaaan", "superman", "batman"]
let myObj={
    name: "alsj",
    age: 56,

}

const myFunction = function(){
    console.log("Hllo World");
}


console.log(typeof bigNumber);



//************************************* */
//STACK(primitive), HEAP(non-primitive)
// copy of variable , reference of original value

let myYoutubeName = "lakshaybaskotra"

let anotherName = myYoutubeName
anotherName= " randomshorts"
console.log(myYoutubeName);
console.log(anotherName);


