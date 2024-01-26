//////////////////////////////////////////////////
// Nama file: array2.js
//////////////////////////////////////////////////

var barang = [
   ['B001', 'Spidol', 8500],  	// elemen pertama
   ['B002', 'Stabilo', 13000],	// elemen kedua
   ['B003', 'Pensil', 5500],  	// elemen ketiga
   ['B004', 'Crayon', 12000]  	// elemen keempat
];

console.log('KODE \t NAMA BARANG \t HARGA');
console.log('---- \t ----------- \t -----');
for (let i=0; i<barang.length; i++) {
   for (let j=0; j<barang[i].length; j++) {
      process.stdout.write(barang[i][j].toString());
      if (j<barang[i].length-1) {
         process.stdout.write(' \t ');
      }
   }
   console.log();	// ganti baris
}
