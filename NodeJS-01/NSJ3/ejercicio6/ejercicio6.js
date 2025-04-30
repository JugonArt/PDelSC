const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ejercicio6.html'));
});

app.post('/registrar', (req, res) => {
  const datos = req.body;

  const respuestaHTML = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>ejercicio6</title>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <h2>Datos Registrados</h2>
    <div class="container">
      <p><strong>Nombre:</strong> ${datos.nombre}</p>
      <p><strong>Email:</strong> ${datos.email}</p>
      <p><strong>Edad:</strong> ${datos.edad}</p>
      <p><strong>Género:</strong> ${datos.genero}</p>
      <p><strong>País:</strong> ${datos.pais}</p>
      <p><strong>Suscripción:</strong> ${datos.suscripcion ? "Sí" : "No"}</p>
    </div>
    <a href="/">Volver</a>
  </body>
  </html>
`;


  res.send(respuestaHTML);
});

app.listen(3010, () => {
    console.log('Servidor corriendo en http://127.0.0.1:3010');
});