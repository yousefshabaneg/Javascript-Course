'use strict';

/*
//* Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 100,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('11E');
createBooking('11C', 120);
createBooking('11D', 120, 1320);

//* How passing arguments work ...

const flight = 'LH234';
const yousef = {
  name: 'Yousef',
  passport: 274646578,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 274646578) {
    console.log('Checked In');
  } else {
    console.log('Wrong Passport!');
  }
};

checkIn(flight, yousef);

console.log(flight);
console.log(yousef);

//* Higher Order Function

//1) Functions accepting callback functions.

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

console.log('-'.repeat(30));

transformer('JavaScript is the best!', oneWord);

// console.log(oneWord('  sss s sss'));
// console.log(upperFirstWord('yousef shaban'));

const hi5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', hi5);

['Yousef', 'Amira', 'Eman'].forEach(hi5);

// Example : Simple Calculator

const calculator = function (operation, initial, numbers) {
  let total = initial;

  for (const number of numbers) {
    total = operation(total, number);
  }
  return total;
};

const sum = (n1, n2) => n1 + n2;
const mul = (n1, n2) => n1 * n2;

console.log(calculator(sum, 0, [1, 2, 4])); //7
console.log(calculator(mul, 1, [1, 2, 4])); //8

//2) Functions returns new {Function}.

const greet = function (message) {
  return function (name) {
    console.log(`${message}: ${name}`);
  };
};

const greetArrow = message => name => age =>
  console.log(`${message}: ${name} ${age}`);

const greeterHi = greet('Hi');
greeterHi('Yousef');

console.log('*'.repeat(12));

const greeterBye = greet('Bye');
greeterBye('Yousef');

console.log('*'.repeat(12));

greetArrow('Hello')('Yousef')(20);

// call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  code: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, name });
  },
};

lufthansa.book(106, 'Yousef');
lufthansa.book(234, 'Shaban');

// console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  code: 'EW',
  bookings: [],
};

// * Call Method

const book = lufthansa.book;

// book(23, 'Shaban'); // not work

book.call(eurowings, 23, 'Sarah');

book.call(lufthansa, 652, 'Amir');

// * Apply Method

const flightData = [545, 'Ali'];
book.apply(eurowings, flightData);
book.call(eurowings, ...flightData);

// Call --> book.call(1- object that refers to this, arguments splitted by comma);
// Apply--> book.apply(1- object that refers to this, array of arguments);

//* Bind Method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(158, 'Mohammed');
bookLH(851, 'Ahmed');

const bookEW23 = book.bind(eurowings, 23); // bind this as well as the flightNum
bookEW23('Lina');

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// this on event Listener point to the element that attached to.
//this ==> <button class="buy">Buy new plane 🛩</button>
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// Partial Application

const addTax = (rate, value) => value + rate * value;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // null for this, 0.23 for rate.
// = addVAT = value => value + value * 0.23;

console.log(addVAT(250));

// small challenge

const addTaxRate = rate => value => value + value * rate;

const addVAT2 = addTaxRate(0.23);

console.log(addVAT(230));
console.log(addVAT2(230));

* Immediately invoked Function Expression.

(function () {
  console.log('This Function runs only one time.');
})();

(() => console.log('This Function Also runs only one time.'))();

*/
// * Closures.
/*

const secureBooking = function () {
  let passengerCount = 0;
  return function updateCount() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();

function addTo(number) {
  let lexical = number;
  return function addToNumber(other) {
    lexical++;
    console.log(lexical + other);
  };
}

const addToThree = addTo(3);
const addToOne = addTo(1);

addToThree(1); //5
addToThree(1); //6
addToThree(1); //7

addToOne(5); //7
addToOne(5); //8
addToOne(5); //9

//* Example 1
let f;

const g = function () {
  const a = 23;
  f = () => console.log(a * 2);
};

const h = function () {
  const b = 777;
  f = () => console.log(b * 2);
};

g();
f();
console.dir(g);
h();
f();
console.dir(f);
*/
//* Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will Start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
boardPassengers(80, 3);
