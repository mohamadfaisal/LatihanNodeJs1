//////////////////////////////////////////////////
// Nama file: readline1.js
//////////////////////////////////////////////////

var readline = require('readline-sync')

// membaca data
var a = readline.question('Masukkan nilai a: ');
var b = readline.question('Masukkan nilai b: ');

var c = a * b;

console.log(a + ' x ' + b + ' = ' + c);
