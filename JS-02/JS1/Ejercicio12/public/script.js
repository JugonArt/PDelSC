const numsSum = [];
const numsMul = [];
const priceObjs = [];

// 1. Suma
function addNumSum() {
  const val = document.getElementById('numSumInput').value;
  if (val === '') return;
  numsSum.push(Number(val));
  document.getElementById('numSumInput').value = '';
  document.getElementById('numsSumList').value = numsSum.join(', ');
  document.getElementById('sumResult').value = '';
}
function calcSum() {
  const total = numsSum.reduce((acc, n) => acc + n, 0);
  document.getElementById('sumResult').value = total;
}

// 2. Multiplicación
function addNumMul() {
  const val = document.getElementById('numMulInput').value;
  if (val === '') return;
  numsMul.push(Number(val));
  document.getElementById('numMulInput').value = '';
  document.getElementById('numsMulList').value = numsMul.join(', ');
  document.getElementById('mulResult').value = '';
}
function calcMul() {
  const product = numsMul.reduce((acc, n) => acc * n, numsMul.length ? 1 : 0);
  document.getElementById('mulResult').value = product;
}

// 3. Total precios objetos
function addPrice() {
  const val = document.getElementById('priceInput').value;
  if (val === '') return;
  priceObjs.push({ precio: Number(val) });
  document.getElementById('priceInput').value = '';
  document.getElementById('pricesList').value = priceObjs.map(o => o.precio).join(', ');
  document.getElementById('priceTotalResult').value = '';
}
function calcTotalPrice() {
  const total = priceObjs.reduce((acc, o) => acc + o.precio, 0);
  document.getElementById('priceTotalResult').value = total.toFixed(2);
}