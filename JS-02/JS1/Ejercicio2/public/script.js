// Arreglo para almacenar los animales ingresados por el usuario
const animales = [];

// Función para mostrar los animales en el textarea
function mostrarAnimales() {
  document.getElementById('animales').value = animales.join(', ');
}

// Función para agregar un nuevo animal
function agregarAnimal() {
  const input = document.getElementById('nuevoAnimal');
  const animal = input.value.trim();

  if (animal !== '') {
    animales.push(animal);      // Agregar al array
    input.value = '';           // Limpiar el input
    mostrarAnimales();          // Actualizar el textarea
  }
}

// Función para eliminar el último animal agregado
function quitaAnimal() {
  if (animales.length > 0) {
    animales.pop();             // Elimina el último del array
    mostrarAnimales();          // Actualiza el textarea
  } else {
    alert('No hay más animales para eliminar.');
  }
}

// Arreglo para almacenar los animales ingresados por el usuario
const productos = [];

// Función para mostrar los animales en el textarea
function mostrarProductos() {
  document.getElementById('productos').value = productos.join(', ');
}

// Función para agregar un nuevo animal
function agregarProducto() {
  const input = document.getElementById('nuevoProducto');
  const producto = input.value.trim();

  if (producto !== '') {
    productos.push(producto);      // Agregar al array
    input.value = '';           // Limpiar el input
    mostrarProductos();          // Actualizar el textarea
  }
}

// Función para eliminar el último animal agregado
function quitaProducto() {
  if (productos.length > 0) {
    const productoEliminado = productos.pop(); // Elimina el último del array
    mostrarProductos();          // Actualiza el textarea
    alert(`Producto eliminado: ${productoEliminado}`); // Muestra el mensaje
  } else {
    alert('No hay más productos para eliminar.');
  }
}

// Mostrar los animales si ya hay algo en el array al cargar (opcional)
window.onload = mostrarProductos;
// Arreglo para almacenar los animales ingresados por el usuario
const cosas = [];

// Función para mostrar las cosas en el textarea
function mostrarCosas() {
  document.getElementById('cosas').value = cosas.join(', ');
}

// Función para agregar una nueva cosa
function agregarCosa() {
  const input = document.getElementById('nuevaCosa');
  const cosa = input.value.trim();

  if (cosa !== '') {
    cosas.push(cosa);      // Agregar al array
    input.value = '';      // Limpiar el input
    mostrarCosas();       // Actualizar el textarea
  }
}

// Función para eliminar todos los elementos del arreglo
function eliminarTodasLasCosas() {
  while (cosas.length > 0) {
    const cosaEliminada = cosas.pop(); // Elimina el último del array
    console.log(`Cosa eliminada: ${cosaEliminada}`); // Muestra el mensaje en la consola
  }
  mostrarCosas(); // Actualiza el textarea
}

// Mostrar las cosas si ya hay algo en el array al cargar la página
window.onload = mostrarCosas;
