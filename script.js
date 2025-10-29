const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value && idx < codes.length - 1) {
      codes[idx + 1].focus();
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      code.value = '';
      if (idx > 0) {
        codes[idx - 1].focus();
      }
    }
  });
});
