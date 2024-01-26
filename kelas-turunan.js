//////////////////////////////////////////////////
// Nama file: kelas-turunan.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

class Segitiga {
   constructor(a, t) {
      // mendefinisikan properti
      this.alas = a;
      this.tinggi = t;
   }

   luas() {
      return this.alas * this.tinggi / 2;
   }
   
   cetakProperti() {
      console.log(`alas\t: ${this.alas}`);
      console.log(`tinggi\t: ${this.tinggi}`);
   }
}

class SegitigaWarna extends Segitiga {
   constructor(a, t, w) {
      super(a, t);	// memanggil konstruktor kelas Segitiga
      
      // mendefinisikan properti baru
      this.warna = w;
   }
   
   cetakProperti() {
      super.cetakProperti(); // memanggil Segitiga.cetakProperti()
      console.log(`warna\t: ${this.warna}`);
   }   
}

// membaca data alas dan tinggi
var a = parseFloat(readline.question('Masukkan alas: '));
var t = parseFloat(readline.question('Masukkan tinggi: '));

// membuat objek dari kelas SegitigaWarna
var obj = new SegitigaWarna(a, t, 'merah');

obj.cetakProperti();

// memanggil metode luas()
console.log(`luas\t: ${obj.luas()}`);
