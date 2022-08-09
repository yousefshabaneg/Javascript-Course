'use strict';
/* 
//* Scopes.

function calcAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  function printAge() {
    const output = `You are ${age} years-old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1999) {
      var millennial = true;
      const str = `Oh, and you're a millennial`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millennial);
    // console.log(add(2, 3)); //Reference Error.
  }

  printAge();
  return;
}

const firstName = 'Yousef';
calcAge(1999);

*/

//* Temporal Dead Zone: TDZ --> let, const
//* TDZ: from the start of the block scope till initialize the variable, after this tdz the variable is safe to call

/*
const myName = 'Yousef';
if (myName === 'Yousef') {
  //from here
  console.log(`${myName} is an ${job}`);
  //ReferenceError: Cannot access 'job' before initialization
  const age = 2022 - 1999;
  console.log(age);
  //Till here is the TDZ for job variable.
  const job = 'Engineer';
  console.log(x);
  // ReferenceError: x is not defined
}
*/

/*
//* Variables

console.log(me); //undefined
console.log(job); //ReferenceError: Cannot access 'job' before initialization
console.log(year); //ReferenceError: Cannot access 'year' before initialization

var me = 'Yousef';
let job = 'Engineer';
const year = 1999;
*/

/*
//* Functions

console.log(addDecl(2, 3)); //5
console.log(addExpr(2, 3)); //ReferenceError: TypeError: addExpr is not a function //var
console.log(addArrow(2, 3)); //ReferenceError: Cannot access 'addArrow' before initialization

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/
/*
//* Example.

console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Products deleted.');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); //false
*/

//******************* */
/*
//* This Keyword

console.log(this); // window object

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // undefined in strict mode., otherwise get the window object.
};

calcAge(1999);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);

  console.log(this);
  //*  window object in arrow function. arrow function does not get its own this keyword, instead it get the lexical this which means that it uses the this keyword of its parent scope, in this example the global context.
};

calcAgeArrow(1999);

const yousef = {
  year: 1999,
  calcAge: function () {
    console.log(this); //yousef object.
    this.age = 2022 - this.year;
    const isMillennial = function () {
      console.log('Millennial', this); // undefined
    };
    const isMillennialArrow = () => {
      console.log('Millennial', this); // yousef object
    };
    isMillennial();
    isMillennialArrow();
  },
  calcAgeArrow: () => {
    console.log(this); //window object.
  },
};

yousef.calcAgeArrow();
yousef.calcAge();
console.log(yousef.age);
*/

//* Primitive vs Objects (Reference Types)
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(oldAge);
console.log(age);

const me = {
  firstName: 'yousef',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(me); //age: 27
console.log(friend); //age: 27
*/

/*

//Primitive
let lastName = 'Shaban';
let oldLastName = lastName;
lastName = 'Mostafa';
console.log(lastName, oldLastName);

//Reference
const ali = {
  firsName: 'Ali',
  lastName: 'Ebrahim',
  age: 24,
};

const marriedAli = ali;
marriedAli.age = 30;

//Copying Objects

const yousef = {
  firsName: 'yousef',
  lastName: 'shaban',
  age: 23,
  family: ['Ahmed', 'Eslam'],
};

const newYousef = Object.assign({}, yousef);
const newYousef = { ...yousef };

newYousef.age = 35;
// console.log(yousef.age); //23
// console.log(newYousef.age); //35

newYousef.family.push('Saeed');
newYousef.family.push('Mohammed');

// First-Level copy not make a clone to the object to a new memory and head address.
console.log(newYousef);
console.log(yousef);

//Instead a deep clone came to save us to make a cloning to objects.

*/
