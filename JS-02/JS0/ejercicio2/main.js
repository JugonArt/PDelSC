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
        nombre: req.body.usr,
        apellido: req.body.lastName,
        edad: req.body.age,
        fechaNacimiento: req.body.birthday,
        sexo: req.body.gender,
        documento: req.body.document,
        estadoCivil: req.body.civil,
        nacionalidad: req.body.country,
        telefono: `${req.body.countryCode} ${req.body.phone}`,
        email: req.body.email,
        tieneHijos: req.body.tieneHijos,
        cantidadHijos: req.body.cantidadHijos || "0"
    };
    personas.push(persona);
    res.send('');
});

// Ruta GET para mostrar la lista de personas
app.get('/personas', (req, res) => {
    let lista = '<h1>Listado de personas</h1>';
    personas.forEach(p => {
        lista += `
            <div style="margin-bottom: 1rem; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
                <strong>Nombre:</strong> ${p.nombre} ${p.apellido}<br>
                <strong>Edad:</strong> ${p.edad}<br>
                <strong>Fecha de Nacimiento:</strong> ${p.fechaNacimiento}<br>
                <strong>Sexo:</strong> ${p.sexo}<br>
                <strong>Documento:</strong> ${p.documento}<br>
                <strong>Estado Civil:</strong> ${p.estadoCivil}<br>
                <strong>Nacionalidad:</strong> ${p.nacionalidad}<br>
                <strong>Teléfono:</strong> ${p.telefono}<br>
                <strong>Email:</strong> ${p.email}<br>
                <strong>Tiene Hijos:</strong> ${p.tieneHijos}<br>
                ${p.tieneHijos === 'si' ? `<strong>Cantidad de Hijos:</strong> ${p.cantidadHijos}<br>` : ''}
            </div>
        `;
    });
    res.send(lista);
});


// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor en: http://127.0.0.1:3010/`);
});
