//////////////////////////////////////////////////
// Nama file: objek.js
//////////////////////////////////////////////////

// membuat objek segitiga
var obj = {
   'alas': 4,
   'tinggi': 5,
   'luas': function () {
      return this.alas * this.tinggi / 2;
   }
};

console.log('Sebelum nilai properti diubah');
console.log(`obj.alas\t: ${obj.alas}`);
console.log(`obj.tinggi\t: ${obj.tinggi}`);
console.log(`obj.luas()\t: ${obj.luas()}`);

// mengubah nilai properti alas dan tinggi
obj.alas = 10;
obj.tinggi = 8;

console.log('\nSetelah nilai properti diubah');
console.log(`obj.alas\t: ${obj.alas}`);
console.log(`obj.tinggi\t: ${obj.tinggi}`);
console.log(`obj.luas()\t: ${obj.luas()}`);
