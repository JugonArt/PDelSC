    const textos = [];

    function invertirEntreParentesis(texto) {
      // Invierte el contenido de cualquier paréntesis
      return texto.replace(/\(([^)]*)\)/g, (match, contenido) => {
        return '(' + contenido.split('').reverse().join('') + ')';
      });
    }

    function agregarFruta() {
      const input = document.getElementById('nuevaFruta').value.trim();
      if (!input) return;
      const procesado = invertirEntreParentesis(input);
      textos.push(procesado);
      document.getElementById('frutas').value = textos.join('\n');
      document.getElementById('nuevaFruta').value = '';
    }