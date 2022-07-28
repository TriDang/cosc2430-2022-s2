function add() {
  let n1 = Number(document.querySelector('#number1').value);
  let n2 = Number(document.querySelector('#number2').value);
  let result = n1 + n2;
  document.querySelector('#result').value = result;
}

function subtract() {
  let n1 = Number(document.querySelector('#number1').value);
  let n2 = Number(document.querySelector('#number2').value);
  let result = n1 - n2;
  document.querySelector('#result').value = result;
}

function multiply() {
  let n1 = Number(document.querySelector('#number1').value);
  let n2 = Number(document.querySelector('#number2').value);
  let result = n1 * n2;
  document.querySelector('#result').value = result;
}

function divide() {
  let n1 = Number(document.querySelector('#number1').value);
  let n2 = Number(document.querySelector('#number2').value);
  let result = n1 / n2;
  document.querySelector('#result').value = result;
}
