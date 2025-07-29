let input = '';

function press(key) {
  if (input === '' && ['+','-','*','/'].includes(key)) return;
  input += key;
  document.getElementById('display').innerText = input;
}

function calculate() {
  try {
    input = eval(input).toString();
    document.getElementById('display').innerText = input;
  } catch {
    document.getElementById('display').innerText = 'Error';
    input = '';
  }
}

function clearDisplay() {
  input = '';
  document.getElementById('display').innerText = '0';
}

