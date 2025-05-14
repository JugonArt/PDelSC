// Arreglo para almacenar las frutas
const frutas = [];

function agregarFruta() {
  // Obtener el valor del input
  const input = document.getElementById('nuevaFruta');
  const fruta = input.value.trim();

  // Verificar que no esté vacío
  if (fruta !== '') {
    frutas.push(fruta); // Agregar al array
    input.value = ''; // Limpiar el input

    // Mostrar el array actualizado en el textarea
    document.getElementById('frutas').value = frutas.join(', ');
  }
}
// Arreglo para almacenar las frutas
const amigos = [];

function agregarAmigo() {
  // Obtener el valor del input
  const input = document.getElementById('nuevoAmigo');
  const amigo = input.value.trim();

  // Verificar que no esté vacío
  if (amigo !== '') {
    amigos.push(amigo); // Agregar al array
    input.value = ''; // Limpiar el input

    // Mostrar el array actualizado en el textarea
    document.getElementById('amigos').value = amigos.join(', ');
  }
}
// Arreglo para almacenar los números
const numeros = [];

function agregarNumero() {
  const input = document.getElementById('nuevoNumero');
  const numero = parseFloat(input.value.trim());

  // Verificar que el número sea mayor que el anterior
  if (numeros.length === 0 || numero > numeros[numeros.length - 1]) {
    numeros.push(numero); // Agregar al arreglo
    input.value = ''; // Limpiar el input

    // Mostrar el arreglo actualizado en el textarea
    document.getElementById('numeros').value = numeros.join(', ');
  } else {
    alert('El número debe ser mayor que el anterior.');
  }
}
