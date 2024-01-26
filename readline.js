//////////////////////////////////////////////////
// Nama file: readline.js
//////////////////////////////////////////////////

var readline = require('readline-sync')

// membaca data
var nama = readline.question('Siapa nama Anda? ');

// menampilkan data yang dibaca
console.log('Hai ' + nama + ', apa kabar?');
