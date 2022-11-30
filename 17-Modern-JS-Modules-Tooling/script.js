import cloneDeep from 'lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'apple', quantity: 5 },
    { product: 'pizza', quantity: 15 },
  ],
  user: { loggedIn: true },
};

// const stateClone = Object.assign({}, state);
// stateClone.user.loggedIn = false;

const stateDeepClone = cloneDeep(state);
stateDeepClone.user.loggedIn = false;
console.log(state);
console.log(stateDeepClone);
/*

//* Module Pattern before ES6

const ShoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered.`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart.addToCart('apple', 4);
ShoppingCart.addToCart('pizza', 2);

// * Importing Modules
import { addToCart, cart } from './shoppingCart.js';
import * as Shopping from './shoppingCart.js';
/////////////////////////
console.log('Importing Module');
// console.log(shippingCost);
Shopping.addToCart('IPhone', 14);
Shopping.addToCart('Laptop', 9);
Shopping.addToCart('Mac', 5);

console.log(Shopping.cart);

// Default exports and imports.
import add from './shoppingCart.js';
add('IPhone', 14);
*/
