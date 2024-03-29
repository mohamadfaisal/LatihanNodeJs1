//////////////////////////////////////////////////
// Nama file: switch4.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

var hari = readline.question('Masukkan nama hari: ')

switch (hari.toLowerCase()) {
   case 'minggu':
   case 'ahad':   noHari = 1; break;
   case 'senin':  noHari = 2; break;
   case 'selasa': noHari = 3; break;
   case 'rabu':   noHari = 4; break;
   case 'kamis':  noHari = 5; break;
   case 'jumat':  noHari = 6; break;
   case 'sabtu':  noHari = 7; break;
   default: {
      console.log('Nama hari yang dimasukkan salah');
      process.exit(1);
   }
}

console.log(`${hari} adalah hari ke-${noHari}`);
