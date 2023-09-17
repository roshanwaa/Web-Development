// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
let number = 12;
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆
  //Write your code here:
  var output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]); // OR

      //   output[i] = output[i - 1] + output[i - 2];
    }
  } //Return an array of fibonacci numbers starting from 0.
  return output;
  //Do NOT change any of the code below 👇
}

output = fibonacciGenerator(12);
console.log(output);
