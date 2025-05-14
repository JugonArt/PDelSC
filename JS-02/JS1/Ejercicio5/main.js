const express = require('express');
const path = require('path');
const app = express();
const PORT = 1836;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(1836, () => {
  console.log(`Servidor corriendo en http://localhost:1836`);
});
