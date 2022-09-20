'use strict';
/*
console.log(23 === 23.0); //true
console.log(0.1 + 0.2 === 0.3); //false :0.300000000004

//Conversion
console.log(Number('23'));
console.log(+'23'); //the same^.

// Parsing *********
console.log(Number.parseInt('30px', 10)); //30
console.log(Number.parseInt('e23')); //NaN

console.log(Number.parseInt('2.5rem')); //2
console.log(Number.parseFloat('2.5rem')); //2.5

console.log(Number.isNaN(+'20x')); //true
console.log(Number.isNaN(25 / 0));

console.log(Number.isFinite(25 / 0));
console.log(Number.isFinite(25 / 1));

/////////////////////

//Math Operations

console.log(Math.sqrt(25));

console.log(Math.max(25, 30, 55, 20));
console.log(Math.max(25, 30, '55', 20));
console.log(Math.max(25, 30, '55px', 20));

console.log(Math.min(25, 30, 55, 20));
console.log(Math.min(25, 30, 55, '20'));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log('**********');

console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24
console.log(Math.ceil(-23.9)); //24

console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23
console.log(Math.floor(-23.9)); //23

console.log(Math.trunc(23.3)); //23
console.log(Math.trunc(-23.9)); //23

// Rounding Decimals

console.log((2.7).toFixed(1));
console.log((2.7).toFixed(3));
console.log(+(2.72).toFixed(2));

//Reminder

console.log(5 % 2);
console.log(6 / 2);

const diameter = 2_8764_124_000;
console.log(diameter);

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(895646548798979454654987987n);
console.log(BigInt(48645646546));

//operations

console.log(10000n + 10000n);
console.log(8956465487989794546n * 10000n);

const huge = 2854646574867654n;
const num = 23;
// console.log(huge * num); //!error
console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n == 20); //true
console.log(20n === 20); //false

console.log(huge + ' is really big!');

console.log(11n / 3n);

////////////////////////

//* DATES

// const now = new Date();
console.log(now);

console.log(new Date('Sep 18 2022 19:41:46'));
console.log(new Date('10-7-1999'));

const future = new Date();
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); // day-of-the-month
console.log(future.getDay()); // day of the week 1 = monday
console.log(future.toISOString());
console.log(future.toDateString());
console.log(future.toLocaleTimeString());
console.log(future.getTime());
console.log(new Date(1663523541312));

future.setFullYear(2040);
console.log(future);

const calcAge = birthDate => {
  const diff = new Date() - birthDate;
  const age = diff / (60 * 60 * 24 * 365.25);
  return age / 1000;
};

const yousefAge = calcAge(new Date(1999, 9, 7));
console.log(yousefAge);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(1999, 9, 7), new Date());
console.log(days1);

// Intl with numbers

const num = 3884764.23;

const numOptions = {
  // style: 'unit',
  style: 'currency',
  // unit: 'mile-per-hour',
  unit: 'celsius',
  currency: 'SAR',
};

console.log(new Intl.NumberFormat(navigator.language, numOptions).format(num));

console.log(new Intl.NumberFormat('de-DE', numOptions).format(num));

console.log(new Intl.NumberFormat('ar-EG', numOptions).format(num));
*/

// * Timers

const ingredients = ['olives', 'spinach'];

//SetTimeout ==> callBack once
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is a Pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);

console.log('Waiting...');

if (ingredients.includes('olives')) {
  clearTimeout(pizzaTimer);
}

//setInterval ==> callBack every duration
// setInterval(() => {
// const now = new Date();
// console.clear();
// console.log(now);
// }, 5000);
