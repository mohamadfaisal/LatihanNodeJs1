//////////////////////////////////////////////////
// Nama file: do-while.js
//////////////////////////////////////////////////

var data = [10,20,30,40,50];
var total;
var i;

total = 0;
i = 0;
do {
   total += data[i];
   i++;
} while (i < data.length);

console.log(`Jumlah total = ${total}`);
