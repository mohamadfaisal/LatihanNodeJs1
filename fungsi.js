//////////////////////////////////////////////////
// Nama file: fungsi.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

function kali(a, b) {
   return a * b;
}

var a = parseFloat(readline.question('Masukkan nilai a: '))
var b = parseFloat(readline.question('Masukkan nilai b: '))
var c;

// memanggil fungsi dan menampung hasilnya ke variabel c
c = kali(a, b);

console.log(`${a} x ${b} = ${c}`);
