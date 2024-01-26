//////////////////////////////////////////////////
// Nama file: fungsi-callback1.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

function hitung(a, b, callback) {
   return callback(a, b);
}

var a = parseFloat(readline.question('Masukkan nilai a: '));
var b = parseFloat(readline.question('Masukkan nilai b: '));

console.log(`${a} + ${b} = ` + 
   hitung(a, b, function () { return a + b; }));
console.log(`${a} - ${b} = ` + 
   hitung(a, b, function () { return a - b; }));
console.log(`${a} * ${b} = ` + 
   hitung(a, b, function () { return a * b; }));
console.log(`${a} / ${b} = ` + 
   hitung(a, b, function () { return a / b; }));
