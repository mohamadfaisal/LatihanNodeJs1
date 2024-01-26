//////////////////////////////////////////////////
// Nama file: app.js
//////////////////////////////////////////////////

//module.paths = ['./'];
//var aritmetika = require('aritmetika');

var aritmetika = require('./aritmetika');

var a=10, b=3;

console.log(`${a} + ${b} = ` + aritmetika.tambah(a,b));
console.log(`${a} - ${b} = ` + aritmetika.kurang(a,b));
console.log(`${a} * ${b} = ` + aritmetika.kali(a,b));
console.log(`${a} / ${b} = ` + aritmetika.bagi(a,b));
