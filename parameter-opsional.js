//////////////////////////////////////////////////
// Nama file: parameter-opsional.js
//////////////////////////////////////////////////

function cetak(s, n=3, newLine=true) {
   for (let i=0; i<n; i++) {
      process.stdout.write(s);
      if (newLine) process.stdout.write('\n');
   }
}

// memanggil fungsi cetak() dengan satu parameter
console.log('Memanggil fungsi dengan satu parameter:');
cetak('JavaScript');

// memanggil fungsi cetak() dengan dua parameter
console.log('\nMemanggil fungsi dengan dua parameter:');
cetak('JavaScript', 2);

// memanggil fungsi cetak() dengan tiga parameter
console.log('\nMemanggil fungsi dengan tiga parameter:');
cetak('Pemrograman ', 1, false);
cetak('JavaScript ', 1, false);
