//////////////////////////////////////////////////
// Nama file: break1.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

const data = [30,60,10,50,40,20,70];

var a = parseInt(readline.question('Masukkan nilai yang dicari: '));
var indeks = -1;
for (let i in data) {
   if (data[i] === a) {
      indeks = i;
      break;
   }
}

if (indeks > -1) {
   console.log(`${a} ditemukan pada indeks ke-${indeks}`);
} else {
   console.log(`${a} tidak ditemukan`);
}
