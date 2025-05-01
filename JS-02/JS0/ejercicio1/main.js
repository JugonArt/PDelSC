const express = require('express');
const app = express();
const path = require('path');
const PORT = 3010;

const personas = []; // Array para almacenar las personas

// Middleware para leer los formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta POST para recibir datos del formulario
app.post('/enviar', (req, res) => {
    const persona = {
        usr: req.body.usr,
        lastName: req.body.lastName,
        email: req.body.email,
        pass: req.body.pass
    };
    personas.push(persona); // Agregar a la lista

    res.send(''); // Respondemos con un mensaje vacío
});

// Ruta GET para mostrar la lista de personas
app.get('/personas', (req, res) => {
    let lista = '<h1>Listado de personas</h1>';
    personas.forEach(p => {
        lista += `<p>${p.usr} ${p.lastName} - ${p.email} - ${p.pass}</p><br>`;
    });
    lista += '';
    res.send(lista);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor en: http://127.0.0.1:3010/`);
});
