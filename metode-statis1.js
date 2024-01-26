//////////////////////////////////////////////////
// Nama file: metode-statis1.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

class Aritmetika {   
   static tambah(a, b) {
      return a + b;
   }
   
   static kurang(a, b) {
      return a - b;
   }
   
   static kali(a, b) {
      return a * b;
   }
   
   static bagi(a, b) {
      return a / b;
   }
   
   static sisaBagi(a, b) {
      return a % b;
   }
   
   static pangkat(a, b) {
      return a ** b;
   }
}

// membaca data a dan b
var a = parseFloat(readline.question('Masukkan nilai a: '));
var b = parseFloat(readline.question('Masukkan nilai b: '));

// memanggil metode statis
console.log(`${a} + ${b} \t=  ${Aritmetika.tambah(a,b)}`);
console.log(`${a} - ${b} \t=  ${Aritmetika.kurang(a,b)}`);
console.log(`${a} * ${b} \t=  ${Aritmetika.kali(a,b)}`);
console.log(`${a} / ${b} \t=  ${Aritmetika.bagi(a,b)}`);
console.log(`${a} % ${b} \t=  ${Aritmetika.sisaBagi(a,b)}`);
console.log(`${a} ** ${b} \t=  ${Aritmetika.pangkat(a,b)}`);
