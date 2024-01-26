//////////////////////////////////////////////////
// Nama file: if1.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

var a = parseFloat(readline.question('Masukkan nilai a: '));
var b = parseFloat(readline.question('Masukkan nilai a: '));
var c;

if (b === 0) {
   console.log('KESALAHAN: Nilai b tidak boleh nol');   
} else {
   c = a / b;
   console.log(`${a} / ${b} = ${c}`);
}
