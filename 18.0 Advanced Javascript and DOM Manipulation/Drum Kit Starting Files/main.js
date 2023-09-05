// Higher order functions : higher order functionsare functions that can take other function a output || Higher order functions are functions that take one or more functions as arguments, or return a function as their result.

function add(num1, num2) {
  return num1 + num2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

const result = calculator(3, 4, divide);
console.log(result);
