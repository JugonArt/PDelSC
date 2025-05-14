  const namesArr = [];
    const numsArr = [];
    const personsArr = [];

    // 1. Agregar y saludar nombres
    function addName() {
      const val = document.getElementById('nameInput').value.trim();
      if (!val) return;
      namesArr.push(val);
      document.getElementById('nameInput').value = '';
      document.getElementById('namesList').value = namesArr.join(', ');
    }
    function greetNames() {
      let message = '';
      namesArr.forEach(n => {
        message += `Hola, ${n}!\n`;
      });
      alert(message || 'No hay nombres para saludar');
    }

    // 2. Agregar y mostrar doble de números
    function addNumber() {
      const val = document.getElementById('numberInput').value;
      if (val === '') return;
      numsArr.push(Number(val));
      document.getElementById('numberInput').value = '';
      document.getElementById('numbersList').value = numsArr.join(', ');
    }
    function doubleNumbers() {
      let message = '';
      numsArr.forEach(n => {
        message += `${n} x 2 = ${n * 2}\n`;
      });
      alert(message || 'No hay números para procesar');
    }

    // 3. Agregar y mostrar personas con edad
    function addPerson() {
      const name = document.getElementById('personName').value.trim();
      const ageVal = document.getElementById('personAge').value;
      if (!name || ageVal === '') return;
      personsArr.push({ nombre: name, edad: Number(ageVal) });
      document.getElementById('personName').value = '';
      document.getElementById('personAge').value = '';
      document.getElementById('personsList').value = personsArr.map(p => `${p.nombre} (${p.edad})`).join(', ');
    }
    function showPersons() {
      let message = '';
      personsArr.forEach(p => {
        message += `${p.nombre} tiene ${p.edad} años\n`;
      });
      alert(message || 'No hay personas para mostrar');
    }