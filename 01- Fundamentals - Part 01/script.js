////////////////////////////////////

/* 

//* Values and Variables

let firstName = "Yousef";
console.log(firstName);

*/

/* Data Types

let isTrue = true;
let yousef;

console.log(typeof true); //Boolean
console.log(typeof 13); //Number
console.log(typeof "Yousef"); //String
console.log(typeof yousef); //Undefined



// let, const, var

//let is // ? --> Block Scoped 
//var is // ? --> function Scoped,,, So we Should Completely Avoid it !!!

let age = 23;
age = 24; //Legal

var firstName = "Yousef"; 


const AGE = 23;
// AGE = 50;        //!ERROR: Assignment to constant variable.

// const NAME;    //!ERROR: Missing initializer in const declaration.


lastName = "Shaban"; //? Run Normally even if we don't write the type (let, const,..)
console.log(lastName); // Shaban
*/

/*
//* Basic Operators

const now = 2037;
const ageYousef = now  - 1999;
const ageSarah = now - 2002;

console.log(ageYousef, ageSarah); // 38 35

console.log(ageYousef * 2, ageYousef / 2, 2 ** 3); // 76 19 8

//* Concatenation

const firstName = 'Yousef';
const lastName = 'Shaban';

console.log(firstName + ' ' + lastName); //Yousef Shaban

let x = 10;
x+=10; // x = x + 10 = 10 + 10 = 20;
x*=4; // x = x * 4 = 20 * 4 = 80;
x++;
x--;
console.log(x);


//*Comparison Operators
const isYousefGreater = ageYousef >= ageSarah; 
console.log(isYousefGreater);//true

*/

/*

//* Operators Precedence

const now = 2037;
const ageYousef = now  - 1999;
const ageSarah = now - 2002;

console.log(now - 1999 > now - 2005);

let x,y;
x = y = 25 - 10 - 5;

console.log(x, y);

let averageAge = (ageYousef + ageSarah) / 2;
console.log(ageYousef, ageSarah);
console.log(averageAge);
*/

/*
//* Strings and Template Literals

const firstName = "Yousef";
const job = "Engineer";
const birthYear = 1999;
const year = 2022;


//*Pain Solution
const yousef = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old, ' + job + ' !';

console.log(yousef);


//*Template literals
const yousefNew = `I'm ${firstName}, a ${year - birthYear} years old, ${job} !`;

console.log(yousefNew);

console.log(`Just a regular string..`);

*/
/*
//* IF ELSE

const age = 22;
const isOldEnough = age >= 18;

if(isOldEnough){
  console.log("Yeah!");
}
else{
  console.log("OOPS?");
}

const birthYear = 1999;

//* Ternary Operator
let century = 2000 >= birthYear ? 20 : 21;

console.log(century);

*/

/*

//* Type Conversion "Manually"

const inputYear = '1999';
console.log(
  2022 - Number(inputYear)
  );

console.log(String(23), 23);


//* Type Coercion "Automatically"

console.log('23' - '10' - 3); //10
console.log('23' * '2');      //46


let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n);

*/

/*

//* Truthy and Falsy Values.

//!falsy
console.log(Boolean(false));       //false
console.log(Boolean(undefined));   //false 
console.log(Boolean(null));        //false      
console.log(Boolean(''));          //false
console.log(Boolean(NaN));         //false
console.log(Boolean(0));           //false
console.log(Boolean(-0));          //false 
console.log(Boolean(0n));          //false

//? Everything else is Truthy.
console.log(Boolean(true));        //true
console.log(Boolean('hi'));        //true
console.log(Boolean([]));          //true
console.log(Boolean({ a: 1 }));    //true

*/

/*

//* Equality Operators ==, ===

const age = '18';

if(age == 18){
  console.log("Great!");
}
else{
  console.log("No!");
}

const number = Number(prompt("What is your favorite number?"));

if(number === 23){
  console.log("Cool! 23 is amazing number!");
}
*/

/*

//* Switch

const day = 'monday';

switch(day){
  case 'monday':
    console.log("Rest from the gym");
    break;
  case 'tuesday':
    console.log("Prepare theory videos");
    break;
  case 'wednesday':
  case 'thursday':
  console.log("Write Code Examples");
    break;
  default:
    console.log("Default Case");
  
}

*/

/*
//* Statements
let x = 0;
function add(a, b) { return a + b; }
if (true) { console.log('Hi'); }

//* Expressions
x;          // Resolves to 0
3 + x;      // Resolves to 3
add(1, 2);  // Resolves to 3
*/

//* Ternary Operator.
const age =  23;
age >= 18 ? console.log("Full of Strength") : console.log("Play Games");


let action = age >= 18 ? "Ful of Strength" : "Play Games";
console.log(action);

