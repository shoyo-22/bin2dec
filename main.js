const convertForm = document.getElementById("convert-form");
const binaryNumber = document.getElementById("binary");
const resultSection = document.getElementById("result");
const footer = document.querySelector("footer");
const solutionSection = document.getElementById("solution");
const clearBtn = document.getElementById("clear");

convertForm.onsubmit = (event) => {
  event.preventDefault();

  let result = binToDecCalculate(binaryNumber.value);

  footer.classList.remove("display-none");
  resultSection.textContent = `Result: ${result}`;
  showSolution(binaryNumber.value, result);
};

clearBtn.onclick = () => {
  binaryNumber.value = "";
  footer.classList.add("display-none");
};

function binToDecCalculate(binary) {
  let decimal = 0;
  const binaryLength = binary.length;

  for (let i = 0; i < binaryLength; i++) {
    decimal += parseInt(binary[i]) * Math.pow(2, binaryLength - (i + 1));
  }

  return decimal;
}

function showSolution(input, output) {
  let solution = "";

  for (let i = 0; i < input.length; i++) {
    solution += `${input[i]}&times;2<sup>${input.length - (i + 1)}</sup>`;

    if (i !== input.length - 1) {
      solution += " + ";
    }
  }

  solutionSection.innerHTML = 
    `<strong>Solution:</strong> <br />${input}<sub>2</sub> = ${solution} = ${output}<sub>10</sub>`;
}
