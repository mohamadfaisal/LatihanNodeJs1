//////////////////////////////////////////////////
// Nama file: switch2.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

var a = parseInt(readline.question('Masukkan bilangan bulat: '));

switch (a) {
   case 1: console.log('Satu');		// aksi 1
   case 2: console.log('Dua');		// aksi 2
   case 3: console.log('Tiga');		// aksi 3
   case 4: console.log('Empat');	// aksi 4
   case 5: console.log('Lima');		// aksi 5
   default:
      console.log('Selain 1, 2, 3, 4, dan 5');  // aksi alternatif   
}
