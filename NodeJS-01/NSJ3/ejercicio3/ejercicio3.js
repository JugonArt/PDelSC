const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ejercicio3.html'));
});

app.listen(3010, () => {
    console.log('Servidor corriendo en http://127.0.0.1:3010');
});