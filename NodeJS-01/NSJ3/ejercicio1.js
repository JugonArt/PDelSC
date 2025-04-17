var http = require('http');

const modulo = require('./modulos1.js'); //Exporto modulos1.js
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('La hora es: ' + modulo.Tiempo() + '<br>'); // Muestro la hora
    res.write('2 + 3 = ' + modulo.sumar(2, 3) + '<br>'); // Sumo
    res.write('20 * 3 = ' + modulo.multiplicar(20, 3) + '<br>'); // Multiplico
    res.end(); 
  })
server.listen(8089, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:8089');
});

  