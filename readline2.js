//////////////////////////////////////////////////
// Nama file: readline2.js
//////////////////////////////////////////////////

var readline = require('readline-sync')

// membaca data
var a = readline.question('Masukkan bilangan bulat: ');
var b = readline.question('Masukkan bilangan riil: ');

console.log('\nSebelum konversi tipe data')
console.log('Tipe a: ' + typeof a);
console.log('Tipe b: ' + typeof b);

// konversi a dari tipe string ke bilangan bulat
a = parseInt(a)

// konversi b dari tipe string ke bilangan riil
b = parseFloat(b)

console.log('\nSetelah konversi tipe data')
console.log('Tipe a: ' + typeof a);
console.log('Tipe b: ' + typeof b);
