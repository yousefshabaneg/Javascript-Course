'use strict';

// Constructor Functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //do not make function in constructor functions. (1000 copies will be applied) performance problem.

  //Use Prototype instead.
};

//1. new {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const joe = new Person('Yousef', 1999);

console.log(joe);
// console.log(joe instanceof Person);

///////////////////

//Prototype.

Person.prototype.printName = function () {
  console.log(this.firstName);
};
console.log(Person.prototype === joe.__proto__); //true
console.log(Person.prototype.isPrototypeOf(joe)); //true

joe.printName();

Person.prototype.country = 'Egypt';
console.log(joe.country);

//Check for Property
//الخواص المتعرفة جوه الاوبجكت فقط مش جوه البروتوتيب
console.log(joe.hasOwnProperty('firstName')); //true
console.log(joe.hasOwnProperty('age')); //false

console.log(joe.__proto__); //person prototype
console.log(joe.__proto__.__proto__); //object prototype
console.log(joe.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor);

const arr = [2, 3, 4, 58, 58, 9];

console.log(arr.__proto__);

Array.prototype.unique = function () {
  return Array.from(new Set(this));
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

// * Class Expression
// const PersonEX = class {};

// * Class Declaration
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    const age = 2022 - this.birthYear;
    console.log(age);
    return age;
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const joe = new Person('Yousef', 1999);

joe.calcAge();
console.log(joe.age);

joe.fullName = 'Yousef Shaban';
console.log(joe.fullName);
Person.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};

// joe.greet();

//1. Classes are NOT hoisted.
//2. Class are first-class citizens.
//3. Classes are executed in strict mode.

const account = {
  owner: 'Joe',
  movements: [200, 300, 520, 120, 215],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
console.log(account);
account.latest = 20;
console.log(account);
*

class Person {
  constructor(fullName) {
    this.fullName = fullName;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey There.');
  }
}

const joe = new Person('Yousef Shaban', 1999);
console.log(joe.fullName);

// Person.hey = function () {
//   console.log('Hey ss .');
// };

Person.hey();

const PersonProto = {
  calcAge() {
    const age = 2022 - this.birthYear;
    console.log(age);
    return age;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i studies ${this.course}`);
};

const joe = new Student('Yousef', 1999, 'Javascript');
console.log(joe);

joe.introduce();

joe.calcAge();

console.log(joe.__proto__); //Student
console.log(joe.__proto__.__proto__); //Person
console.dir(Student.prototype.constructor); //Person Constructor>>> Problem to be solve.

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    const age = 2022 - this.birthYear;
    console.log(age);
    return age;
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and i studies ${this.course}`);
  }
}

const joe = new Student('Yousef Shaban', 1999, 'Javascript');

joe.introduce();
joe.calcAge();

//* Inheritance in Object.create(proto);
const PersonProto = {
  calcAge() {
    const age = 2022 - this.birthYear;
    console.log(age);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const joe = Object.create(StudentProto);
joe.init('Yousef', 1999);
console.log(joe);
*/

//* Another Class Example.

class Account {
  ///Public Fields (instances)
  locale = navigator.language;

  ///Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  ///Public Methods.
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved with ${val}`);
      return this;
    }
  }

  //Private Methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Yousef', 'EGP', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(300);

console.log(acc1);
