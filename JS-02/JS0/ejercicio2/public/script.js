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
const phoneInput = document.getElementById('phoneNumber');

phoneInput.addEventListener('input', function (e) {
  // Eliminar cualquier caracter que no sea número
  let cleaned = e.target.value.replace(/\D/g, '');

  // Formatear como 0000 000000 o similar (puedes adaptarlo)
  let formatted = cleaned
    .replace(/^(\d{0,4})(\d{0,3})(\d{0,4}).*/, (_, p1, p2, p3) =>
      [p1, p2, p3].filter(Boolean).join(' ')
    );

  e.target.value = formatted;
});
function mostrarCantidad(mostrar) {
    const div = document.getElementById('cantidadHijos');
    if (mostrar) {
      div.style.display = 'block';
      div.querySelector('input').required = true;
    } else {
      div.style.display = 'none';
      div.querySelector('input').required = false;
      div.querySelector('input').value = '';
    }
  }