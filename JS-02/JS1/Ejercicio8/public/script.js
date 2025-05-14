   // Arrays para includes()
   const roles = [];
   const colores = [];
   const numerosVerif = [];

   // 1. Admin
   function agregarRol() {
     const rol = document.getElementById('nuevoRol').value.trim();
     if (rol) {
       roles.push(rol);
       document.getElementById('nuevoRol').value = '';
       document.getElementById('roles').value = roles.join(', ');
     }
   }
   function compruebaAdmin() {
     if (roles.includes('admin')) {
       alert('El array contiene "admin"');
     } else {
       alert('El array NO contiene "admin"');
     }
   }

   // 2. Colores y "verde"
   function agregarColores() {
     const select = document.getElementById('selectColores');
     const seleccionados = Array.from(select.selectedOptions).map(opt => opt.value);
     seleccionados.forEach(c => {
       if (!colores.includes(c)) {
         colores.push(c);
       }
     });
     document.getElementById('colores').value = colores.join(', ');
   }
   function compruebaVerde() {
     if (colores.includes('Verde')) {
       alert('El array de colores contiene "Verde"');
     } else {
       alert('El array de colores NO contiene "Verde"');
     }
   }

   // 3. Números con confirmación
   function agregarNumeroVerif() {
     const val = document.getElementById('nuevoNumeroVerif').value;
     if (val === '') return;
     const num = Number(val);
     if (numerosVerif.includes(num)) {
       const continuar = confirm('El número ya existe. ¿Continuar para añadir de nuevo?');
       if (!continuar) {
         document.getElementById('nuevoNumeroVerif').value = '';
         return;
       }
     }
     numerosVerif.push(num);
     document.getElementById('nuevoNumeroVerif').value = '';
     document.getElementById('numerosVerif').value = numerosVerif.join(', ');
   }