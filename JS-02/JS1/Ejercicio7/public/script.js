const palabras = [];
const numeros = [];
const ciudadesSelect = [];

// 4. Palabras y buscar "perro"
    
    function agregarPalabra() {
        const palabra = document.getElementById('nuevaPalabra').value.trim();
        if (palabra) {
          palabras.push(palabra);
          document.getElementById('nuevaPalabra').value = '';
          document.getElementById('palabras').value = palabras.join(', ');
        }
      }
      function buscarPerro() {
        const idx = palabras.indexOf('perro');
        if (idx !== -1) {
          alert(`La palabra "perro" está en la posición ${idx}`);
        } else {
          alert('Esta palabra no está');
        }
      }
  
      // 5. Números y buscar 50
      function agregarNumero() {
        const numVal = document.getElementById('nuevoNumero').value;
        if (numVal !== '') {
          const num = Number(numVal);
          numeros.push(num);
          document.getElementById('nuevoNumero').value = '';
          document.getElementById('numeros').value = numeros.join(', ');
        }
      }
      function buscar50() {
        const idx = numeros.indexOf(50);
        if (idx !== -1) {
          alert(`El número 50 está en la posición ${idx}`);
        } else {
          alert('El número 50 no está');
        }
      }
  
      // 6. Ciudades select y buscar Madrid
      function agregarSelectCiudad() {
        const select = document.getElementById('selectCiudades');
        const opciones = Array.from(select.selectedOptions).map(opt => opt.value);
        opciones.forEach(c => ciudadesSelect.push(c));
        document.getElementById('ciudadesSelectAgregadas').value = ciudadesSelect.join(', ');
      }
      function buscarMadrid() {
        const idx = ciudadesSelect.indexOf('Madrid');
        if (idx !== -1) {
          alert(`Madrid está en la posición ${idx}`);
        } else {
          alert('Madrid no está');
        }
      }