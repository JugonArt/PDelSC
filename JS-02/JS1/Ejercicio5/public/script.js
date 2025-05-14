// Arrays para almacenar los datos
const letrasArray = [];
const nombresArray = [];
const elementosArray = [];

// PRIMER FORMULARIO: Array de letras con eliminación usando splice
function agregarLetra() {
    const nuevaLetra = document.getElementById('nuevaLetra').value.trim();
    
    if (nuevaLetra !== '') {
        letrasArray.push(nuevaLetra);
        document.getElementById('nuevaLetra').value = '';
        actualizarTextareaLetras();
    }
}

function eliminarLetras() {
    // Eliminar dos elementos desde la posición 1 del array usando splice
    if (letrasArray.length > 2) {
        letrasArray.splice(1, 2); // Elimina 2 elementos desde el índice 1
        actualizarTextareaLetras();
    } else {
        alert('No hay suficientes elementos para eliminar. Se necesitan al menos 3 elementos.');
    }
}

function actualizarTextareaLetras() {
    document.getElementById('letras').value = letrasArray.join(', ');
}

// SEGUNDO FORMULARIO: Array de nombres con inserción en posición 1 usando splice
function agregarNombre() {
    const nuevoNombre = document.getElementById('nuevoNombre').value.trim();
    
    if (nuevoNombre !== '') {
        // Insertar el nombre en la posición 1 sin eliminar nada usando splice
        nombresArray.splice(1, 0, nuevoNombre); // (posición, cuántos eliminar, qué insertar)
        document.getElementById('nuevoNombre').value = '';
        actualizarTextareaNombres();
    }
}

function actualizarTextareaNombres() {
    document.getElementById('nombres').value = nombresArray.join(', ');
}

// TERCER FORMULARIO: Array de elementos con reemplazo usando splice
function agregarElemento() {
    const nuevoElemento = document.getElementById('nuevoElemento').value.trim();
    
    if (nuevoElemento !== '') {
        elementosArray.push(nuevoElemento);
        document.getElementById('nuevoElemento').value = '';
        actualizarTextareaElementos();
        actualizarSelectPosiciones();
        
        // Mostrar sección de reemplazo si hay al menos 3 elementos
        if (elementosArray.length >= 3) {
            document.getElementById('reemplazoSection').style.display = 'block';
        }
    }
}

function actualizarSelectPosiciones() {
    const selectPosicion = document.getElementById('posicion');
    selectPosicion.innerHTML = '';
    
    // Crear opciones con posiciones disponibles (dejando al menos 2 elementos para reemplazar)
    for (let i = 0; i <= elementosArray.length - 2; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectPosicion.appendChild(option);
    }
}

function reemplazarElementos() {
    const posicion = parseInt(document.getElementById('posicion').value);
    const primerReemplazo = document.getElementById('primerReemplazo').value.trim();
    const segundoReemplazo = document.getElementById('segundoReemplazo').value.trim();
    
    if (primerReemplazo !== '' && segundoReemplazo !== '') {
        // Reemplazar dos elementos desde la posición seleccionada
        elementosArray.splice(posicion, 2, primerReemplazo, segundoReemplazo);
        
        // Limpiar campos
        document.getElementById('primerReemplazo').value = '';
        document.getElementById('segundoReemplazo').value = '';
        
        actualizarTextareaElementos();
    }
}

function actualizarTextareaElementos() {
    document.getElementById('elementos').value = elementosArray.join(', ');
}

// Inicializar los textarea vacíos al cargar la página
window.onload = function() {
    actualizarTextareaLetras();
    actualizarTextareaNombres();
    actualizarTextareaElementos();
    
    // Inicializar el primer nombre para que la posición 1 tenga sentido
    if (nombresArray.length === 0) {
        nombresArray.push("Primer nombre");
        actualizarTextareaNombres();
    }
}