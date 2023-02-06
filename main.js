const convertForm = document.getElementById("convert-form");
const binaryNumber = document.getElementById("binary");
const resultSection = document.getElementById("result");
const clearBtn = document.getElementById("clear");
let solved = false;

convertForm.onsubmit = (event) => {
  event.preventDefault();

  let result = binToDecCalculate(binaryNumber.value);
  solved = true;

  resultSection.textContent = `Result: ${result}`;
};

clearBtn.onclick = () => {
  binaryNumber.value = "";
}

function binToDecCalculate(binary) {
  let decimal = 0;

  const binaryLength = binary.length;

  for (let i = 0; i < binaryLength; i++) {
    decimal += parseInt(binary[i]) * Math.pow(2, binaryLength - (i + 1));
  }

  return decimal;
}
