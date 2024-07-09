document.getElementById('convert-btn').addEventListener('click', () => {
  const number = parseInt(document.getElementById('number').value);
  const output = document.getElementById('output');
  if (Number.isNaN || number === '') {
    output.innerHTML = 'Please enter a valid number';
  } else if (number.isNaN || number < 1) {
    output.innerHTML = 'Please enter a number greater than or equal to 1';
  } else if (number >= 4000) {
    output.innerHTML = 'Please enter a number less than or equal to 3999';
  } else {
    const romanNumeral = '';
    const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (let i = 0; i < romanNumerals.length; i += 1) {
      while (number >= arabicNumbers[i]) {
        romanNumeral += romanNumerals[i];
        number -= arabicNumbers[i];
      }
    }
    output.innerHTML = romanNumeral;
  }
});
