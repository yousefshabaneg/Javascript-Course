'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  //Object Destructuring
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// restaurant.orderDelivery({
//   time: '10.30',
//   address: 'Tanta',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
/* 

//* Destructuring arrays.

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);

let [first, , second] = restaurant.categories; // skipped the 2nd element.

console.log(first, second);

//* Swapping
// Normal Way
const temp = first;
first = second;
second = temp;
console.log(first, second);

// Swapping with Destructuring

[first, second] = [second, first];
console.log(first, second);

//Nested
const nested = [2, 4, [5, 6]];
const [two, , [five]] = nested;
console.log(two, five);

// Default Values

const [p = 1, q = 1, r = 1] = [8, 9];
//r = undefined
console.log(p, q, r); // 8,9,1
*/

/*
//* Destructuring Objects.

// const { categories, starterMenu } = restaurant; // should be same name of object property.

const { categories: cat, starterMenu: sMenu } = restaurant;

console.log(cat, sMenu);

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

let a = 111,
  b = 888;

const obj = { a: 23, b: 7, c: 14 };

// const { a, b } = obj;
({ a, b } = obj); //Tricky
console.log(a, b); //23,7

// nested objects.

const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);
*/

/*
//* Spread Operator.

const arr = [7, 8, 9];

const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

const goodArr = [1, 2, ...arr];
console.log(...goodArr);

//copy array
const newArr = [...arr];

//join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables: arrays, strings, maps, sets, not objects

const str = 'Yousef';
const letters = [...str, ' ', 'Sh.'];
console.log(letters);

// const degrees = [
//   Number(prompt('Enter first degree ?')),
//   Number(prompt('Enter second degree ?')),
//   Number(prompt('Enter third degree ?')),
//   Number(prompt('Enter fourth degree ?')),
// ];

const calcTotalDegree = function () {
  if (arguments.length == 0) {
    return;
  }
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum / arguments.length);
};

// calcTotalDegree(...degrees);

//Extend Object with new Props using spread (...) operator.;

const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Guiseppe',
};
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };

//With primitive properties of object copied with value only.
restaurantCopy.name = 'Yousef';
console.log(restaurant.starterMenu);
console.log(restaurantCopy.starterMenu);

//With Reference Types (arrays) properties of objects it still called by reference not deep copying
restaurantCopy.starterMenu[0] = 'Yousef Shaban';
console.log(restaurant.starterMenu);
console.log(restaurantCopy.starterMenu);
*/

/*

//* Rest Operator.

//1) Destructuring

// Spread, because on right side of = (means that we copy values of an array and put it in new array or new variables)
const arr = [1, 2, ...[3, 4]];

// Rest , because on the left side of = (means that we copy some values an put it in new array)

const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest);

//Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2) Functions

const add = function (...numbers) {
  let sum = 0;
  numbers.forEach(n => {
    sum += n;
  });
  console.log(sum);
  return sum;
};

add(2, 3);
add(4, 5, 6);

restaurant.orderPizza('Main Ing', 'onion', 'spinach');

*/
/*
/////////////////////////////////////////////
//* Short Circuiting.
// Use {ANY} data type, it return {ANY} data type.
// Simply the statement returns a value either a truthy or falsy value, then condition applied.

console.log('-------------- OR -------------');
// it return the first truthy value or the last falsy value.

console.log(3 || 'Yousef'); //3

console.log('' || 'Yousef'); // Yousef

console.log(true || '1'); // true

console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //'Hello'

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

const guest2 = restaurant.numGuests || 10;

console.log(guest1);
console.log(guest2);

console.log('-------------- AND -------------');

// it return the first falsy value or the last truthy value.

console.log(0 && 'Yousef'); //0

console.log(7 && 'Yousef'); // 'Yousef'

console.log('Hello' && 23 && null && 'Yousef'); //null

// Practical
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

//don't write on this way, hard to read code.
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

//* Nullish Coalescing Operator (??) --> null and undefined only.
/*
//The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand
// when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

const guest2 = restaurant.numGuests ?? 10;

console.log(guest1);
console.log(guest2);


*/
/*
//* Assignment Operators. ||= &&= ??=

const rest1 = {
  name: 'Shahd',
  // numGuests: 20,
  numGuests: 0, // not work with or ||= , instead with nullish ??=
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Yousef',
};

Or Assignment Operator ||=

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);

Nullish Assignment Operator ??= (null or defined)

rest1.numGuests = rest1.numGuests ?? 10;
rest2.numGuests = rest2.numGuests ?? 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

And Assignment Operator &&=

rest1.owner = rest1.owner && '<Anonymous>';  //undefined
rest2.owner = rest2.owner && '<Anonymous>';
rest1.owner &&= '<Anonymous>'; // nothing assigns because rest1.owner is falsy.
rest2.owner &&= '<Anonymous>'; // assigns anonymous because rest2.owner is truthy.
console.log(rest1);
console.log(rest2);
*/
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item in menu) {
  const element = menu[item];
  console.log(item, element);
}

//can use continue and break in it.
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); // .. 6 Risotto
}
*/

/*
//* Enhanced Object Literals.

const thu = {
  open: 12,
  close: 22,
};
const fri = {
  open: 11,
  close: 23,
};
const sat = {
  open: 0, // Open 24 hours
  close: 24,
};

const openingDays = ['thu', 'fri', 'sat'];

const openingHours = {
  [openingDays[0]]: thu,
  [openingDays[1]]: fri,
  sat,
};

console.log(openingHours);
*/
/*

//* Optional Chaining (.?)

console.log(restaurant.openingHours.mon?.open ?? 'Yousef');

// Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'not yet';
  console.log(`On ${day}, we open at: ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderPizza?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
  { name: 'Yousef', emsail: 'yousef@gmail.com' },
  { name: 'Jonas', email: 'jonas@gmail.com' },
];

console.log(users[0]?.name ?? 'User array empty.');
*/

/*

//* Looping Objects, Keys, Values, Entries.

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Property Names: Keys.
const properties = Object.keys(openingHours);
console.log(properties.length);

for (const day of properties) {
  console.log(day);
}

// Property Values.
const values = Object.values(openingHours);
for (const val of values) {
  console.log(val);
}

// Entries Values.
const entries = Object.entries(openingHours);
for (const [day, { open, close }] of entries) {
  console.log(key, open, close);
}
*/

///////////////////////////////////////////////////////
/*
//* Sets

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);

// console.log(new Set('Yousseef')); // {'Y', 'o', 'u', 's', 'e', 'f'}

ordersSet.size;
ordersSet.has('Pizza');
ordersSet.add('Garlic Bread');
ordersSet.delete('Pizza');
// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// Example - Use Case.

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffSet = [...new Set(staff)];
*/

/*

//* Maps

const rest = new Map();
rest.set('name', 'Shahd For Pizza');
rest.set(1, 'Tanta');
rest.set(2, 'Shony');
// console.log(rest);

//Chaining
rest
  .set('owners', { 1: 'Yousef', 2: 'Islam' })
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open.')
  .set(false, 'We are closed');

// console.log(rest.get('owners'));

const time = 21;
const isOpen = time >= rest.get('open') && time <= rest.get('closed');
// console.log(rest.get(isOpen));

// console.log(rest.size);
// console.log(rest.has('closed'));
rest.delete('closed');

const arr = [1, 2];
rest.set(arr, 'Test');
// console.log(rest.get([1, 2])); // undefined
// console.log(rest.get(arr)); // 'Test'

//* Maps Iteration.

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer: 3'));
const answer = 3;
const isCorrect = question.get('correct') === answer;

console.log(question.get(isCorrect));

// Convert Map to array;

const mapArray = [...question];
console.log(mapArray);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

// Convert Object to Map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);
*/

//////////////////////////////////////////////
// * Strings.
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r')); //case sensitive
console.log(airline.slice(4, 7)); // Start 4,stop before 7, length = 7-4 = 3

const index = airline.indexOf('Portugal');
const portugal = airline.slice(index); // = console.log(airline.slice(-8)); from end.
console.log(portugal);

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const seatDegree = seat.slice(-1);
  if (seatDegree === 'B' || seatDegree === 'E') {
    console.log('In the Middle');
  } else {
    console.log('Not the Middle');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');

const strObj = new String('Yousef');
console.log(typeof strObj); // Object

console.log(typeof new String('Yousef').slice(1)); //converted from object to string

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'yoUsEf'; // should be Yousef
const passengerLower = passenger.slice(1).toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower;

console.log(passengerCorrect);
//comparing emails

const email = 'hello@jonas.io';

const loginEmail = '   Hello@Jonas.IO    ';

const compareEmail = function (email, login) {
  const goodLogin = login.trim().toLowerCase();
  const goodEmail = email.toLowerCase();
  return goodLogin === goodEmail;
};

console.log(compareEmail(email, loginEmail));

//replacing

const egpInUsd = 19;

const price = '579,5egp';

const egpToUsd = function (egpPrice) {
  const price = Number(egpPrice.split('egp')[0].replace(',', '.'));
  const priceInUsd = price / egpInUsd;
  const finalPrice = `${priceInUsd}$`;
  return finalPrice;
};

console.log(egpToUsd(price)); //30.5$

///Booleans

const plane = 'Airbus A320neo';
plane.includes('A320');
plane.startsWith('A320');
console.log(plane.search('A320'));

const name = 'yousef';
console.log(name.concat(',', ['shaban', 'mostafa']));

//* PART 3

const [firstName, lastName] = 'Yousef Shaban'.split(' ');
console.log(firstName, lastName);

const nameTitle = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(nameTitle);

//capitalize string

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesCapitalized = [];
  for (const str of names) {
    // namesCapitalized.push(str[0].toUpperCase() + str.slice(1));
    namesCapitalized.push(str.replace(str[0], str[0].toUpperCase()));
  }
  return namesCapitalized.join(' ');
};
console.log(capitalizeName('yousef shaban'));

//Padding

const message = 'Go to gate 23!';

// console.log(message.padStart(25, '-').padEnd(36, '-'));

const maskCreditCard = function (number) {
  let str = number + '';
  str = str.trim().split(' ').join('');
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4337789646468454));
console.log(maskCreditCard('  4337 7896 4646 4845  '));

//repeat

console.log('*'.repeat(16));
*/

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightsSplitted = flights.split('+');

for (const line of flightsSplitted) {
  const str = line.split(';');
  let type = str[0].replaceAll('_', ' ').replace(' ', '');

  if (type.startsWith('Delayed')) {
    type = '🔴' + type;
  }
  const travelFrom = str[1].slice(0, 3).toUpperCase();
  const travelTo = str[2].slice(0, 3).toUpperCase();
  const time = str[3].replace(':', 'h');

  console.log(`${type} from ${travelFrom} to ${travelTo} (${time})`);
}
// console.log(type);
