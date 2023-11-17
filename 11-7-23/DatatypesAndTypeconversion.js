"use strict"// treats js as per newer version
//alert(3+3) we are using node.js not browser

//Refer notes

let score= "33abc";
let n = null;
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(typeof score);
console.log(valueInNumber) //NaN - Not a number a data type
console.log(n) // prints 0.
//for bool true converted to 1 and false converted to false converted to 0

let isLoggedIn = 1
let isLoggedIn2 = ""
let booleanIsloggedIn = Boolean(isLoggedIn)
let booleanIsloggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsloggedIn)
console.log(booleanIsloggedIn2)//empty string = false





