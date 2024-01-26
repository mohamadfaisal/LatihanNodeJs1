//////////////////////////////////////////////////
// Nama file: intdiv.js
//////////////////////////////////////////////////

function intdiv(a, b) {
   var c = a / b;
   if (c >= 0) {
      return Math.floor(c);
   } else {
      return Math.ceil(c);
   }
}

var readline = require('readline-sync')

var a = parseInt(readline.question('Masukkan nilai a: '));
var b = parseInt(readline.question('Masukkan nilai b: '));

console.log(`${a} / ${b} = ${intdiv(a,b)}`);
