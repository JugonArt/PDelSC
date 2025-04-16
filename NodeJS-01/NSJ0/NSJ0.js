// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  res.end('<h3 style="color: red; font-size: 10vw; font-weight: 500; background: black; text-transform: uppercase; text-align: center">Estanga</h3>');
});

// starts a simple http server locally on port 3000
server.listen(8081, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:8081');
});
// run with `node server.mjs`