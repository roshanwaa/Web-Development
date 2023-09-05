function add(num1, num2) {
  return num1 + num2;
}

function multiply(n1, n2) {
  return n1 * n2;
}
function calculate(num1, num2, operators) {
  return operators(num1, num2);
}

debugger;
calculate(3, 4, multiply);
