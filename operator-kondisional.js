//////////////////////////////////////////////////
// Nama file: operator-kondisonal.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

var a = parseInt(readline.question('Masukkan bilangan bulat: '))

process.stdout.write(`${a} adalah bilangan `);
console.log((a % 2 == 0) ? 'genap' : 'ganjil');
