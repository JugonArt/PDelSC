var url = require('url'); //Utilizo la URL
var adr = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
var q = url.parse(adr, true);

console.log(q.host);  //Muestro el localhost
console.log(q.pathname); //muestro el nombre del path
console.log(q.search);
