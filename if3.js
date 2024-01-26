//////////////////////////////////////////////////
// Nama file: if3.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

var a = parseInt(readline.question('Masukkan bilangan bulat: '));

if (a > 0) {
   console.log(`${a} adalah bilangan positif`);   
} else if (a === 0) {
   console.log('Anda memasukkan nilai nol');
} else {
   console.log(`${a} adalah bilangan negatif`);
}
