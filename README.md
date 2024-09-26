*Classes:Classes in JavaScript are a fundamental concept in object-oriented programming (OOP) that enable developers to create custom data types and organize code in a structured and reusable manner.

Class Components


A class consists of:


1. Constructor: A special method called when an object is instantiated from the class.


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}


2. Methods: Functions defined inside the class.


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

 greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

*Arrays Method: Arrays in JavaScript are a data structure that stores a collection of elements, each identified by an index or key. Array functions are methods that can be used to manipulate and interact with arrays.

Types of Array Method
1. Mutator Methods


These methods modify the original array.


- push(element(s)): Adds elements to the end of the array.
- pop(): Removes the last element from the array.
- shift(): Removes the first element from the array.
- unshift(element(s)): Adds elements to the beginning of the array.
- splice(start, deleteCount, item(s)): Removes or replaces elements in the array.


2. Accessor Methods


These methods return a new array or a value without modifying the original array.


- concat(array(s)): Merges two or more arrays.
- join(separator): Converts the array to a string.
- slice(start, end): Returns a subset of the array.
- indexOf(searchElement): Returns the index of the first occurrence of an element.
- lastIndexOf(searchElement): Returns the index of the last occurrence of an element.etc.

*Variables in JavaScript are containers that store values, enabling developers to reuse and manipulate data throughout their code.


Variable Declaration


JavaScript supports several ways to declare variables:


1. Var: Function scope, can be redeclared.


var name = 'John';


1. Let: Block scope, cannot be redeclared.


let age = 30;


1. Const: Block scope, cannot be reassigned.


const PI = 3.14;

* Arrow function: Arrow functions in JavaScript are a concise way to define small, single-purpose functions. They were introduced in ECMAScript 2015 (ES6) and have become a popular choice for many developers.


Arrow Function Syntax


The basic syntax of an arrow function is:



(param1, param2, ...) => { body }



Example



const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet('John'); // Output: Hello, John!

*Destructuring:Destructuring in JavaScript is a syntax feature that allows you to extract values from arrays or objects and assign them to variables in a concise and readable way.


Array Destructuring


Array destructuring allows you to extract values from an array and assign them to variables.



const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3



You can also skip values using commas:



const numbers = [1, 2, 3];
const [a, , c] = numbers;
console.log(a, c); // 1 3
Or use rest parameter syntax to capture remaining values:



const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;
console.log(a, b, rest); // 1 2 [3, 4, 5]
* Modules:Modules in JavaScript are self-contained pieces of code that represent a single unit of functionality. They allow developers to organize and structure their code in a modular and reusable way.
ypes of Modules


1. CommonJS (CJS) Modules: Introduced in 2009, CJS modules are the original module system for Node.js.

    - Exports: module.exports or exports.
    - Imports: require.

Example:

```
```
// greeter.js
module.exports = function(name) {
console.log(Hello, ${name}!);
};

// main.js
const greeter = require('./greeter');
greeter('John');
2.  **AMD (Asynchronous Module Definition) Modules**: Designed for asynchronous loading.

    *   **Exports**: `define`.
    *   **Imports**: `require`.

    Example:

    javascript
// greeter.js
define(function() {
  return function(name) {
    console.log(Hello, ${name}!);
  };
});

// main.js
require(['greeter'], function(greeter) {
  greeter('John');
});
*Tenary operators:Ternary operators in JavaScript are a concise way to express conditional statements. They consist of three parts:


1. Condition
2. Value if true
3. Value if false


Syntax


The syntax for ternary operators is:



condition ? valueIfTrue : valueIfFalse



Example
const age = 25;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: Adult


