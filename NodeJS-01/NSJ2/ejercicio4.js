var uc = require('upper-case');
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Funciona!")); //Se usa uppercase para que las letras estén en mayúscula
  res.end();
}).listen(8080);