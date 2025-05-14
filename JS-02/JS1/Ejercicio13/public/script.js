const numsSort = [];
const wordsSort = [];
const usersSort = [];

// 1. Números
function addNumSort() {
  const val = document.getElementById('numSortInput').value;
  if (val === '') return;
  numsSort.push(Number(val));
  document.getElementById('numSortInput').value = '';
  document.getElementById('numsSortList').value = numsSort.join(', ');
}
function sortNums() {
  const sorted = [...numsSort].sort((a, b) => a - b);
  alert(`Números ordenados: [${sorted.join(', ')}]`);
}

// 2. Palabras
function addWordSort() {
  const val = document.getElementById('wordSortInput').value.trim();
  if (!val) return;
  wordsSort.push(val);
  document.getElementById('wordSortInput').value = '';
  document.getElementById('wordsSortList').value = wordsSort.join(', ');
}
function sortWords() {
  const sorted = [...wordsSort].sort((a, b) => a.localeCompare(b));
  alert(`Palabras ordenadas: [${sorted.join(', ')}]`);
}

// 3. Usuarios por edad
function addUserSort() {
  const name = document.getElementById('userNameSort').value.trim();
  const ageVal = document.getElementById('userAgeSort').value;
  if (!name || ageVal === '') return;
  usersSort.push({ nombre: name, edad: Number(ageVal) });
  document.getElementById('userNameSort').value = '';
  document.getElementById('userAgeSort').value = '';
  document.getElementById('usersSortList').value = usersSort.map(u => `${u.nombre} (${u.edad})`).join(', ');
}
function sortUsers() {
  const sorted = [...usersSort].sort((a, b) => a.edad - b.edad);
  const display = sorted.map(u => `${u.nombre} (${u.edad})`);
  alert(`Usuarios ordenados por edad: [${display.join(', ')}]`);
}