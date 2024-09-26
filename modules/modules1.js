file: math.js


export function add(x, y) {
  return x + y;
}


file: main.js


const mathModule = await import('./math.js');
console.log(mathModule.add(2, 3)); // Output: 5

