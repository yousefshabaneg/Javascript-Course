// LECTURES
/*

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// foreach loop MAP

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// foreach loop SET

const currenciesUnique = new Set(['USD', 'EGP', 'USD', 'EUR', 'EGP']);

currenciesUnique.forEach(value => {
  console.log(value);
});

// foreach loop ARRAYS

for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} You withdraw ${Math.abs(mov)}`);
  }
}
console.log('---------- FOREACH ---------');
movements.forEach((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1} You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} You withdraw ${Math.abs(mov)}`);
  }
});

let arr = [0, 1, 2, 3, 4, 5, 6];

// SLICE
console.log(arr.slice(2)); // get new arr from pos 0 and not affect the original arr.
console.log(arr.slice(2, 4)); // get 2 and 3 exclude the 4.
console.log(arr.slice(-2)); // get last 2 elements.

//shallow copy.
console.log(arr.slice());
console.log([...arr]);

// SPLICE

console.log(arr.splice(2, 3));
// remove 3 elements from the arr starts at 2 to 4 and the original arr will be [0, 1, 5, 6]
console.log(arr);

//remove last element
const lastElement = arr.splice(-1);
console.log(...lastElement);

//REVERSE
arr = [0, 1, 2, 3, 4, 5, 6];
const arr2 = [10, 9, 8, 7];

console.log(arr2.reverse()); // mutate the original array.
console.log(arr2);

// CONCAT
const numbers = arr.concat(arr2);
console.log(numbers);

//JOIN
console.log(numbers.join(' - '));
//new at method.

const arr = [23, 11, 64];
console.log(arr[0]); //23
console.log(arr.at(0)); //23

// why at is useful instead of bracket []?
// it's super useful when need to get the last element of array, or start counting from the end of the array
// also when dealing with method chaining, at method ♥.

///getting the last element.
console.log(arr[arr.length - 1]); //64 last element.
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1)); // super easy !!
*/

//* Map, Filter, Reduce

//Map

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(value => Math.trunc(value * eurToUsd));

// console.log(movementsUSD);

const deposits = movements.filter(mov => mov > 0);

const totalDepositsInUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0)
  .toFixed(1);

// console.log(`Total : ${totalDepositsInUSD}`);

const movs = movements.find(mov => mov < 0);
// console.log(movs);

//Equality
const isValueEqualTo = movements.includes(-130);

//Some: Condition
const isAnyExist = movements.some(mov => mov > 5000);

//Every: Condition
const allSatisfy = movements.every(mov => mov > 0);

//* Flat and Flat Map

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// console.log(arrDeep.flat(2)); // deep flatting 2 levels

const accountMovements = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

const flatAccountMovements = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

//* Sorting Arrays

//Strings
const owners = ['Jonas', 'Yousef', 'Adam', 'Gros', 'Salah'];
// console.log(owners.sort());
// console.log(owners);

//Numbers
// console.log(movements);
// console.log(movements.sort()); //Convert to strings then sorts it, the minus comes first.

//return < 0, A before B
//return > 0, B before A
movements.sort((a, b) => a - b); //asc
// console.log(movements);

movements.sort((a, b) => b - a); //dsc
// console.log(movements);

//more ways of filling the arrays;

const x = new Array(7); // create array with 7 empty elements.

x.fill(4, 2, 5);

//Array from

const y = Array.from({ length: 7 }, () => 1);

const z = Array.from({ length: 7 }, (_, i) => i + 1);

const randomRolls = Array.from({ length: 100 }, (cur, i) =>
  Math.trunc(Math.random() * 6 + 1)
);

//////////////

// Array Methods Practice
// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// 2.
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// 3.
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

// console.log(sums);

// 4.
// this is a nice title -> This Is a Nice Title.

const convertTitleCase = title => {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = [
    'a',
    'an',
    'and',
    'the',
    'but',
    'or',
    'on',
    'in',
    'at',
    'with',
  ];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
