document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Evita el envío tradicional del formulario

    // Recoger los datos del formulario
    const formData = new FormData(this);

    // Convertir los datos del formulario en un objeto
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Enviar los datos al servidor usando fetch (AJAX)
    fetch('/enviar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data),
    })
    .then(response => response.text())
    .then(() => {
        // Limpiar el formulario
        document.getElementById('signupForm').reset();

        // Actualizar la lista de personas en la página
        updatePersonasList();
    })
    .catch(error => console.error('Error:', error));
});

// Función para obtener y mostrar la lista de personas
function updatePersonasList() {
    fetch('/personas')
    .then(response => response.text())
    .then(data => {
        document.getElementById('personas-list').innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
}

// Llamada inicial para mostrar la lista de personas al cargar la página
updatePersonasList();
