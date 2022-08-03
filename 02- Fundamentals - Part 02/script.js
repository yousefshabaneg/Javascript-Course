////////////////////////////////////
//* Strict Mode: 

'use strict'; // Avoid Some bugs like call an undefined variable.

/*

//* Functions

function sayHi(){
  console.log("Hi Yousef");
}
sayHi();


const currentYear = new Date().getFullYear();

//* Function Declaration
//* Can be called before declaration

// console.log(calcAge1(2000)); //Work

function calcAge1(birthYear) {
  return currentYear - birthYear;
}
const age1 = calcAge1(1999);
console.log(age1);


//* Function Expression
//* Can not be called before declaration

// console.log(calcAge2(2000));  //! Error

let calcAge2 = function (birthYear) {
  return  currentYear - birthYear;
};
const age2 = calcAge2(2004);
console.log(age2);

*/

/*

//* Arrow Functions

const currentYear = new Date().getFullYear();

const calcAge3 = (birthYear) => currentYear - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const ageOfMarried = birthYear => {
  const age = calcAge3(birthYear);
  const army = 1;
  const prepareForJob = 1;
  const engagement = 2;

  return age + army + prepareForJob + engagement;
}

const yousefMarried = ageOfMarried(1999);
console.log(yousefMarried);

*/

/*

//* Introduction to Arrays.

const friends = ["Joe", "Mohammed", "Ahmed"];

const years = new Array(1999, 2002, 2004, 2005);
console.log(years);
console.log(years.length);


//* Arrays Methods.

//Add elements
const newLength = years.push(2008); // add to end
console.log(years, newLength);

years.unshift(1990); //add to first
console.log(years);

//Remove elements
const year = years.pop(); //remove last
console.log(year);
console.log(years);

years.shift(); //remove first
console.log(years);

console.log(years.indexOf(2004)); //2
console.log(years.includes('2004')); //false === strict equal
console.log(years.includes(2008)); //false

const filterYears = years.filter((year) => year > 2002);

*/

/*

//* Objects

const yousef = {
  firstName: "Yousef",
  lastName: "Shaban",
  age: new Date().getFullYear() - 1999,
  job: "Engineer",
  friends: ["M.Yasser", "Ali", "Boghdady"],
};

console.log(yousef);

//* Dot vs Bracket Notation

console.log(yousef.firstName , yousef.lastName);

console.log(yousef["age"], yousef["job"]);


const nameKey = 'Name';
console.log(yousef['first' + nameKey]);
console.log(yousef['last' + nameKey]);


const key = prompt(
  'What do you want to know ? firstName, lastName, age, job and friends'
);

const yousefAttributes = [
  "firstName", "lastName", "age", "job", "friends",
];

if(yousef[key]) // truthy value if exist otherwise falsy (undefined)
  console.log(yousef[key]);
else
  console.log("Invalid Key, try again...");


yousef.location = "Egypt";
yousef["twitter"] = "yousefshabaneg";
console.log(yousef['location'], yousef.twitter);


console.log(`${yousef.firstName} has ${yousef.friends.length} friends, and his best friend is called "${yousef.friends[2]}"`);
*/

/*

//* Object Methods.


const yousef = {
  firstName: "Yousef",
  lastName: "Shaban",
  birthYear: 1999,
  job: "Engineer",
  friends: ["M.Yasser", "Ali", "Boghdady"],
  hasLicense: true,
  calcAge () {    //ES6 syntax
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasLicense ? "a" : "no"} driver's license.`;
  }
};

console.log(yousef.calcAge());    // console.log(yousef["calcAge"]());
console.log(yousef.age);         // console.log(yousef["calcAge"]());

console.log(yousef.getSummary());

*/

//* Looping

const yousef = {
  firstName: "Yousef",
  lastName: "Shaban",
  age: new Date().getFullYear() - 1999,
  job: "Engineer",
  friends: ["M.Yasser", "Ali", "Boghdady"],
};

const years = [1991,1999,2005,2015];

//*For Loop

/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition 🏋️‍♂️ ${rep} `);
}


const ages = [];

//*foreach
years.forEach(year => {
  ages.push(2022 - year);
});

//*forIn
for (const i in ages) {
  console.log(ages[i]);
}

//*forOf
for (const age of ages) {
  console.log(age);
}


//*for backward
for (let i = years.length - 1; i >= 0; i--) {
  ages.push(2022 - years[i]);
}


//*forIn
for (const key in yousef) {
  console.log(yousef[key]);
}
*/

//* While Loop.

let rep = 1
while (rep <= 3) {
  console.log(`Lifting weights repetition 🏋️‍♂️ ${rep++} `);
}

let dice = Math.round(Math.random() * 5) + 1;

do{
  console.log("You rolled a dice ", dice);
  dice = Math.round(Math.random() * 5) + 1;
}while(dice !== 6)
