 // Arrays para filter()
 const nums = [];
 const words = [];
 const users = [];

 // 1. Números
 function addNum() {
   const val = document.getElementById('numInput').value;
   if (val === '') return;
   nums.push(Number(val));
   document.getElementById('numInput').value = '';
   document.getElementById('numsList').value = nums.join(', ');
 }
 function filterNums() {
   const filtered = nums.filter(n => n > 10);
   alert(`Números > 10: [${filtered.join(', ')}]`);
 }

 // 2. Palabras
 function addWord() {
   const val = document.getElementById('wordInput').value.trim();
   if (!val) return;
   words.push(val);
   document.getElementById('wordInput').value = '';
   document.getElementById('wordsList').value = words.join(', ');
 }
 function filterWords() {
   const filtered = words.filter(w => w.length > 5);
   alert(`Palabras > 5 letras: [${filtered.join(', ')}]`);
 }

 // 3. Usuarios
 function addUser() {
   const name = document.getElementById('userName').value.trim();
   const active = document.getElementById('userActive').checked;
   if (!name) return;
   users.push({ nombre: name, activo: active });
   document.getElementById('userName').value = '';
   document.getElementById('userActive').checked = false;
   document.getElementById('usersList').value = users.map(u => `${u.nombre} (${u.activo})`).join(', ');
 }
 function filterUsers() {
   const filtered = users.filter(u => u.activo).map(u => u.nombre);
   alert(`Usuarios activos: [${filtered.join(', ')}]`);
 }