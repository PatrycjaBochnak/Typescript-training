let x = 5; 
let z = 4;

const add = (x: number, y = 0) => x + y;

console.log(add(x, z));