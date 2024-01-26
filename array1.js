//////////////////////////////////////////////////
// Nama file: array1.js
//////////////////////////////////////////////////

var a = new Array();
a['http'] = 'Hypertext Transfer Protocol';
a['html'] = 'Hypertext Markup Language';
a['xml'] = 'Extensible Markup Language';
a['json'] = 'JavaScript Object Notation';

for (key in a) {
   console.log(key.toUpperCase() + ' \t= ' + a[key]);
}
