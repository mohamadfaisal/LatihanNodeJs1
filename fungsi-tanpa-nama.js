//////////////////////////////////////////////////
// Nama file: fungsi-tanpa-nama.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

var tambah = function (a, b) {
   return a + b;
}

var a = parseFloat(readline.question('Masukkan nilai a: '));
var b = parseFloat(readline.question('Masukkan nilai b: '));

var hasil = tambah(a, b);

console.log(`${a} + ${b} = ${hasil}`);
