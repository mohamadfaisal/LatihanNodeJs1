//////////////////////////////////////////////////
// Nama file: fungsi-callback.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

function tambah(a, b) {
   return a + b;
}

function kurang(a, b) {
   return a - b;
}

function kali(a, b) {
   return a * b;
}

function bagi(a, b) {
   return a / b;
}

function hitung(a, b, callback) {
   return callback(a, b);
}

var a = parseFloat(readline.question('Masukkan nilai a: '));
var b = parseFloat(readline.question('Masukkan nilai b: '));

console.log(`${a} + ${b} = ${hitung(a,b,tambah)}`);
console.log(`${a} - ${b} = ${hitung(a,b,kurang)}`);
console.log(`${a} * ${b} = ${hitung(a,b,kali)}`);
console.log(`${a} / ${b} = ${hitung(a,b,bagi)}`);

console.log(`${a} + ${b} = ` +
   hitung(a, b, function () {
      return a + b;
   })
);
