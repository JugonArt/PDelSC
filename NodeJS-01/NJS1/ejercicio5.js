import { createServer } from 'node:http';
import { sumar, restar, multiplicar, dividir } from './calculos.js';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let suma = sumar(5, 3);
  let resta = restar(8, 6)
  let multiplica = multiplicar(3, 11);
  let divide = dividir(30, 5);
  res.write(`
    <table style="border: 1px solid black; text-align: center; width: 50%;">
    <tr>
    <th style="border: 1px solid black;">Calculo</th>
    <th style="border: 1px solid black;">Resultado</th>
    </tr>
    <tr>
    <td style="border: 1px solid black;"> 5 + 3 </td>
    <td style="border: 1px solid black;">${suma}</td>
    </tr>
    <tr>
    <td style="border: 1px solid black;"> 8 - 6 </td>
    <td style="border: 1px solid black;">${resta}</td>
    </tr>
    <tr>
    <td style="border: 1px solid black;"> 3 * 11 </td>
    <td style="border: 1px solid black;">${multiplica}</td>
    </tr>
    <tr>
    <td style="border: 1px solid black;"> 30 / 5 </td>
    <td style="border: 1px solid black;">${divide}</td>
    </tr>
    <table>`)
});

server.listen(8083, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:8083');
});
