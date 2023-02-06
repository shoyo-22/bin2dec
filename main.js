const convertForm = document.getElementById("convert-form");
const binaryNumber = document.getElementById("binary");
const resultSection = document.getElementById("result");

convertForm.onsubmit = (event) => {
  event.preventDefault();

  const binaryNumberLength = binaryNumber.value.length;
  let result = 0;

  for (let i = 0; i < binaryNumberLength; i++) {
    result += parseInt(binaryNumber.value[i]) * Math.pow(2, binaryNumberLength - (i + 1));
  }
  
  resultSection.textContent = `Result: ${result}`;
}