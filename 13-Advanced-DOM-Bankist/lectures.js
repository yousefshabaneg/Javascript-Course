'use strict';
//////////// lectures
///////////////////
///////////////////
/*
console.log(document.documentElement); //all html code.
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); //updates automatically when any button removed or appended.
console.log(allButtons);

const allBtns = document.getElementsByClassName('btn' );
console.log(allBtns);

//* Creating and Inserting elements.
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML =
  'We use cookied for imporved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';
console.log(message);

// header.prepend(message);
// header.append(message.cloneNode(true));
header.append(message);

// header.before(message);
// header.after(message);

//delete elements

document.querySelector('.btn--close-cookie').addEventListener('click', e => {
  // message.parentElement.removeChild(message);
  message.remove();
});

//* Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); //only work with inline styles
console.log(message.style.backgroundColor);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// Css root variables

// document.documentElement.sty le.setProperty('--color-primary', 'orangered');

//* Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.getAttribute('designer'));

logo.alt = 'Beautiful Mimimalist logo';

logo.setAttribute('company', 'bankist');

//difference between logo.src and logo.getAttribute('src')

console.log(logo.src); //absolute Path
console.log(logo.getAttribute('src')); //relative path.

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// DATA ATTRIBUTE
//data-version-number="3.0"
console.log(logo.dataset.versionNumber);

//* EVENTS

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', e => {
//   console.log('Great');
// });

//old school
// h1.onclick = e => {
//   console.log('Great On Function.');
// };

const alertH1 = e => {
  alert('addEventListener: Great');

  //makes listening to event only once
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);


//* Event Propagation

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);

  //Stopping the propagation: Bubbling
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Nav', e.target, e.currentTarget);
});

//* Event Traversing

const h1 = document.querySelector('h1');

//Going downwards: child
console.log(h1.childNodes); // all nodes of h1
console.log(h1.children); // direct html children elements

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going Upwards: parents

console.log(h1.parentNode);
console.log(h1.parentElement); //the same

h1.closest('.header').style.background = 'var(--gradient-secondary)';

//going sideways: siblings

console.log(h1.previousElementSibling); //العنصر اللي قبلة علطول لنفس الاب

console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
*/

//* DOM EVENT LIFECYCLE

document.addEventListener('DOMContentLoaded', function (e) {
  // console.log('HTML PARSED AND DOM Tree BUILT', e);
});

window.addEventListener('load', function (e) {
  // console.log('Loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

//*
