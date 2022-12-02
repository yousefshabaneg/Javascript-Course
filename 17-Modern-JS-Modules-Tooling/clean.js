'use strict';
////////////////////////////
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// freeze: Make object Immutable.
const spendingLimits = Object.freeze({
  //
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

//pure function.
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
  // state.push({ value: -value, description, user: cleanUser });
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1);
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function (state, limits) {
  // for (const entry of budget)
  //   if (entry.value < -getLimit(entry.user)) {
  //     entry.flag = 'limit';
  //   }

  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};
const checkedBudget = checkExpenses(budget, spendingLimits);

const logBigExpenses = function (state, bigLimit) {
  // let output= '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  // output = output.slice(0, -2); // Remove last '/ '

  return state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');

  // .reduce((str, cur) => `${cur.description.slice(-2)} / ${str}`, '')
  // .slice(0, -2);
};

console.log(budget);
const output = logBigExpenses(budget, 500);
console.log(output);
