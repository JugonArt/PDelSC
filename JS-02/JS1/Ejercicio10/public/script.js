 // Arrays para map()
 const nums = [];
 const noms = [];
 const precios = [];

 // 1. Números x3
 function agregarNum() {
   const val = document.getElementById('nuevoNum').value;
   if (val === '') return;
   nums.push(Number(val));
   document.getElementById('nuevoNum').value = '';
   document.getElementById('nums').value = nums.join(', ');
   document.getElementById('numsMap').value = '';
 }
 function mapMultiplicar() {
   const result = nums.map(n => n * 3);
   document.getElementById('numsMap').value = result.join(', ');
 }

 // 2. Nombres Mayúsculas
 function agregarNom() {
   const val = document.getElementById('nuevoNom').value.trim();
   if (!val) return;
   noms.push(val);
   document.getElementById('nuevoNom').value = '';
   document.getElementById('noms').value = noms.join(', ');
   document.getElementById('nomsMap').value = '';
 }
 function mapMayusculas() {
   const result = noms.map(s => s.toUpperCase());
   document.getElementById('nomsMap').value = result.join(', ');
 }

 // 3. Precios + IVA 21%
 function agregarPrecio() {
   const val = document.getElementById('nuevoPrecio').value;
   if (val === '') return;
   precios.push(Number(val));
   document.getElementById('nuevoPrecio').value = '';
   document.getElementById('precios').value = precios.join(', ');
   document.getElementById('preciosMap').value = '';
 }
 function mapIVA() {
   const result = precios.map(p => (p * 1.21).toFixed(2));
   document.getElementById('preciosMap').value = result.join(', ');
 }