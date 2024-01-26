//////////////////////////////////////////////////
// Nama file: switch.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

var noBulan = parseInt(readline.question('Masukkan nomor bulan: '));
var namaBulan;

switch (noBulan) {
   case 1: namaBulan = 'Januari'; break;
   case 2: namaBulan = 'Februari'; break;
   case 3: namaBulan = 'Maret'; break;
   case 4: namaBulan = 'April'; break;
   case 5: namaBulan = 'Mei'; break;
   case 6: namaBulan = 'Juni'; break;
   case 7: namaBulan = 'Juli'; break;
   case 8: namaBulan = 'Agustus'; break;
   case 9: namaBulan = 'September'; break;
   case 10: namaBulan = 'Oktober'; break;
   case 11: namaBulan = 'November'; break;
   case 12: namaBulan = 'Desember'; break;
   default: {
      console.log(`Tidak ada bulan ke-${noBulan}`);
      process.exit(1);
   }
}

console.log(`Nama bulan ke-${noBulan} adalah ${namaBulan}`);
