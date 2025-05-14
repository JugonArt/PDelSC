const lettersArr = [];
    const numsArr = [];

    // 1. Letras
    function addLetter() {
      const val = document.getElementById('letterInput').value.trim();
      if (val) {
        lettersArr.push(val);
        document.getElementById('lettersList').value = lettersArr.join(', ');
        document.getElementById('letterInput').value = '';
      }
    }
    function reverseLetters() {
      const reversed = [...lettersArr].reverse();
      alert(`Letras invertidas: [${reversed.join(', ')}]`);
    }

    // 2. Números
    function addNumber() {
      const val = document.getElementById('numberInputReverse').value;
      if (val === '') return;
      numsArr.push(Number(val));
      document.getElementById('numbersReverseList').value = numsArr.join(', ');
      document.getElementById('numberInputReverse').value = '';
    }
    function reverseNumbers() {
      const reversed = [...numsArr].reverse();
      alert(`Números invertidos: [${reversed.join(', ')}]`);
    }

    // 3. Texto
    function reverseString() {
      const txt = document.getElementById('textInput').value;
      if (!txt) return;
      document.getElementById('textOriginal').value = txt;
      const arr = txt.split('');
      const reversed = arr.reverse().join('');
      alert(`Texto invertido: ${reversed}`);
    }