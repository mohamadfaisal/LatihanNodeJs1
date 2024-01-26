//////////////////////////////////////////////////
// Nama file: parameter-array.js
//////////////////////////////////////////////////

function sum(a) {
   if (!typeof a === 'Array') {
      console.log('KESALAHAN: parameter harus bertipe array');
      return;
   }
   var total = 0.0;
   for (let elemen of a) {
      total += elemen;
   }
   return total;
}

// parameter berupa array dengan dua elemen
console.log('sum([10,20]): ' + sum([10,20]));

// parameter berupa array dengan tiga elemen
console.log('sum([10,20,30]): ' + sum([10,20,30]));

// parameter berupa array dengan empat elemen
console.log('sum([10,20,30,40]): ' + sum([10,20,30,40]));
