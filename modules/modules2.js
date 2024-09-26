file: utils.js


export function add(x, y) {
  return x + y;
}

export function multiply(x, y) {
  return x * y;
}


file: main.js
import { add, multiply } from './utils.js';

console.log(add(2, 3)); // Output: 5
console.log(multiply(2, 3)); // Output: 6

