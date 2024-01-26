//////////////////////////////////////////////////
// Nama file: pass-by-value.js
//////////////////////////////////////////////////

function tukar(a, b) {
   var c = a;
   a = b;
   b = c;
}

var x = 100, y = 200;

// menampilkan nilai x dan y sebelum ditukar
console.log('Sebelum ditukar');
console.log(`x: ${x}`);
console.log(`y: ${y}`);

// memanggil fungsi tukar()
tukar(x, y);

// menampilkan nilai x dan y setelah ditukar
console.log('\nSetelah ditukar');
console.log(`x: ${x}`);
console.log(`y: ${y}`);
