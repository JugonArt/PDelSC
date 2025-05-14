const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
app.listen(1831, () => {
  console.log(`Servidor corriendo en http://localhost:1831`);
});