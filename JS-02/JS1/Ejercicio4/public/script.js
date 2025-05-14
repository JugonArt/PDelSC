// Arreglos para almacenar los datos
const perros = [];
const mensajes = [];
const colaAtencion = [];

// Función para mostrar los datos en el textarea correspondiente
function mostrarDatos() {
  document.getElementById('perros').value = perros.join(', ');
  document.getElementById('chat').value = mensajes.join(', ');
  document.getElementById('cola').value = colaAtencion.join(', ');
}

// Función para agregar un nuevo perro
function agregarPerro() {
  const perro = document.getElementById('nuevoPerro').value.trim();
  if (perro) {
    perros.push(perro);
    document.getElementById('nuevoPerro').value = '';
    mostrarDatos();
  } else {
    alert('Por favor, ingresa un nombre de perro.');
  }
}

// Función para eliminar el primer perro de la lista
function eliminarPrimerPerro() {
  if (perros.length > 0) {
    const eliminado = perros.shift();
    alert(`Perro eliminado: ${eliminado}`);
    mostrarDatos();
  } else {
    alert('No hay perros para eliminar.');
  }
}

// Función para agregar un nuevo mensaje de chat
function agregarMensaje() {
  const mensaje = document.getElementById('nuevoMensaje').value.trim();
  if (mensaje) {
    mensajes.push(mensaje);
    document.getElementById('nuevoMensaje').value = '';
    mostrarDatos();
  } else {
    alert('Por favor, ingresa un mensaje.');
  }
}

// Función para eliminar el primer mensaje del chat
function eliminarPrimerMensaje() {
  if (mensajes.length > 0) {
    const eliminado = mensajes.shift();
    alert(`Mensaje eliminado: ${eliminado}`);
    mostrarDatos();
  } else {
    alert('No hay mensajes para eliminar.');
  }
}

// Función para agregar un nuevo cliente a la cola de atención
function agregarCliente() {
  const cliente = document.getElementById('nuevoCliente').value.trim();
  if (cliente) {
    colaAtencion.push(cliente);
    document.getElementById('nuevoCliente').value = '';
    mostrarDatos();
  } else {
    alert('Por favor, ingresa el nombre del cliente.');
  }
}

// Función para atender al primer cliente de la cola
function atenderCliente() {
  if (colaAtencion.length > 0) {
    const atendido = colaAtencion.shift();
    alert(`Cliente atendido: ${atendido}`);
    mostrarDatos();
  } else {
    alert('No hay clientes en la cola.');
  }
}

// Mostrar los datos al cargar la página
window.onload = mostrarDatos;
