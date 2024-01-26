//////////////////////////////////////////////////
// Nama file: rest-parameter.js
//////////////////////////////////////////////////

function sum(...a) {
   var total = 0.0;
   for (let elemen of a) {
      total += elemen;
   }
   return total;
}

// memanggil fungsi dengan dua argumen
console.log('sum(10,20): ' + sum(10,20));

// memanggil fungsi dengan tiga argumen
console.log('sum(10,20,30): ' + sum(10,20,30));

// memanggil fungsi dengan empat argumen
console.log('sum(10,20,30,40): ' + sum(10,20,30,40));
