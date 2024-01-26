//////////////////////////////////////////////////
// Nama file: for.js
//////////////////////////////////////////////////

var data = [10,20,30,40,50];
var total;

total = 0;
for (let i = 0; i < data.length; i++) {
   total += data[i];
}

console.log(`Jumlah total = ${total}`);
