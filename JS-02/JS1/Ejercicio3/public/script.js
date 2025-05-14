const colores = [];
const tareas = [];
const usuarios = [];

const maxItems = 5;

function agregarColor() {
  const color = document.getElementById('colorSelect').value;
  if (color && !colores.includes(color) && colores.length < maxItems) {
    colores.unshift(color);
    document.getElementById('colorSelect').value = '';
    actualizarVista('listaColores', colores);
  } else if (colores.includes(color)) {
    alert('Este color ya ha sido agregado.');
  } else if (colores.length >= maxItems) {
    alert('Se ha alcanzado el límite de colores.');
  } else {
    alert('Por favor, selecciona un color.');
  }
}

function agregarTarea() {
  const tarea = document.getElementById('tareaInput').value.trim();
  if (tarea && !tareas.includes(tarea) && tareas.length < maxItems) {
    tareas.unshift(tarea);
    document.getElementById('tareaInput').value = '';
    actualizarVista('listaTareas', tareas);
  } else if (tareas.includes(tarea)) {
    alert('Esta tarea ya ha sido agregada.');
  } else if (tareas.length >= maxItems) {
    alert('Se ha alcanzado el límite de tareas.');
  } else {
    alert('Por favor, ingresa una tarea.');
  }
}

function agregarUsuario() {
  const usuario = document.getElementById('usuarioInput').value.trim();
  if (usuario && !usuarios.includes(usuario) && usuarios.length < maxItems) {
    usuarios.unshift(usuario);
    document.getElementById('usuarioInput').value = '';
    actualizarVista('listaUsuarios', usuarios);
  } else if (usuarios.includes(usuario)) {
    alert('Este usuario ya está conectado.');
  } else if (usuarios.length >= maxItems) {
    alert('Se ha alcanzado el límite de usuarios.');
  } else {
    alert('Por favor, ingresa un nombre de usuario.');
  }
}

function actualizarVista(elementId, lista) {
  document.getElementById(elementId).value = lista.join(', ');
}
