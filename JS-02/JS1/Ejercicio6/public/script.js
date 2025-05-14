// Arrays
const edades = [];
const peliculas = [];
const ciudades = [];

// 1. Edades
function agregarEdad() {
  const edad = document.getElementById('nuevaEdad').value.trim();
  if (edad) {
    edades.push(edad);
    document.getElementById('nuevaEdad').value = '';
    document.getElementById('edades').value = edades.join(', ');
  }
}

function copiarEdades() {
  const copia = edades.slice(0, 3);
  document.getElementById('edadesCopiadas').value = copia.join(', ');
}

// 2. Películas
function agregarPelicula() {
  const pelicula = document.getElementById('nuevaPelicula').value.trim();
  if (pelicula) {
    peliculas.push(pelicula);
    document.getElementById('nuevaPelicula').value = '';
    document.getElementById('peliculas').value = peliculas.join(', ');
  }
}

function copiarPeliculas() {
  const copia = peliculas.slice(2, 5); // Hasta 4 inclusive, slice es excluyente
  document.getElementById('peliculasCopiadas').value = copia.join(', ');
}

// 3. Ciudades
function agregarCiudad() {
  const ciudad = document.getElementById('nuevaCiudad').value.trim();
  if (ciudad) {
    ciudades.push(ciudad);
    document.getElementById('nuevaCiudad').value = '';
    document.getElementById('ciudades').value = ciudades.join(', ');
  }
}

function copiarUltimasCiudades() {
  const copia = ciudades.slice(-3);
  document.getElementById('ciudadesCopiadas').value = copia.join(', ');
}
