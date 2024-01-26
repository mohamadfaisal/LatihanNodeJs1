//////////////////////////////////////////////////
// Nama file: operator-aritmetika.js
//////////////////////////////////////////////////

var readline = require('readline-sync')

var a = parseInt(readline.question('Masukkan nilai a: '));
var b = parseInt(readline.question('Masukkan nilai b: '));

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);
