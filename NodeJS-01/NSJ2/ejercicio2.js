var http = require('http');
var fs = require('fs'); //Utilizo el modulo file_system
const modulo = require('./modulos1.js');

http.createServer(function (req, res) { 

  // Primero agregamos el log al archivo
  fs.appendFile('demofile1.html', log, (err) => {
    if (err) {
      console.error('Error al escribir en el archivo:', err);
      res.writeHead(500, {'Content-Type': 'text/html'});
      res.end('Error interno del servidor');
      return;
    }

    // Una vez escrito, lo leemos y respondemos
    fs.readFile('demofile1.html', function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('Archivo no encontrado');
        return;
      }

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<h1>Bienvenido</h1>');
      res.write('<p>Contenido del archivo html:</p>');
      res.write('<br><strong>250 + 1 = ' + modulo.sumar(250, 1) + '</strong>');
      res.end();
    });
  });
}).listen(8080);