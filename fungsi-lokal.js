//////////////////////////////////////////////////
// Nama file: fungsi-lokal.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

function hipotenusa(a, b) {
   // fungsi lokal
   function kuadrat(x) {
      return x * x;
   }
   
   // memanggil fungsi lokal
   return c = Math.sqrt(kuadrat(a) + kuadrat(b));
}

console.log('Menghitung sisi miring segitiga siku-siku');
var a = parseFloat(readline.question('Masukkan alas: '));
var b = parseFloat(readline.question('Masukkan tinggi: '));
var c = hipotenusa(a, b);
console.log(`Sisi miring = ${c}`);
