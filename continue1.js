//////////////////////////////////////////////////
// Nama file: continue1.js
//////////////////////////////////////////////////

var readline = require('readline-sync');

while (true) {
   var username = readline.question('Username: ');
   var password = readline.question('Password: ');
   if (username !== 'JavaScript' || password !== 'Node.js') {
      console.log('Username/password salah\n');
      continue;
   }
   console.log('\nSelamat datang, login berhasil');
   break;
}
