//////////////////////////////////////////////////
// Nama file: while.js
//////////////////////////////////////////////////

var data = [10,20,30,40,50];
var total;
var i;

total = 0;
i = 0;
while (i < data.length) {
   total += data[i];
   i++;
}

console.log(`Jumlah total = ${total}`);
