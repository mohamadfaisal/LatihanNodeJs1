//////////////////////////////////////////////////
// Nama file: if2.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

var a = parseInt(readline.question('Masukkan bilangan bulat: '));

if (a % 2 === 0) {
   console.log(`${a} adalah bilangan genap`);   
} else {
   console.log(`${a} adalah bilangan ganjil`);
}
