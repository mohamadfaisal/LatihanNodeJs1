//////////////////////////////////////////////////
// Nama file: var.js
//////////////////////////////////////////////////

var globalVar = 100;

function f() {
   var localVar = 200;
   
   console.log('Memanggil variabel di dalam fungsi');
   console.log('globalVar: ' + globalVar);
   console.log('localVar: ' + localVar);
}

// memanggil fungsi
f();

console.log('\nMemanggil variabel di luar fungsi');
console.log('globalVar: ' + globalVar);
// console.log('localVar: ' + localVar); // salah, localVar tidak dikenal
