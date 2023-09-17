let output = [];

let count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push('FizzBuzz');
  } else if (count % 3 === 0) {
    output.push('Fizz');
  } else if (count % 5 === 0) {
    output.push('Buzz');
  } else {
    output.push(count);
    console.log(output);
  }
  count++;
}

fizzBuzz();

function fizzBuzzLoopMethod(n) {
  // Declare an array to store the results
  let result = [];

  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // Check if i is divisible by both 3 and 5
      // Add "FizzBuzz" to the result array
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      // Check if i is divisible by 3
      // Add "Fizz" to the result array
      result.push('Fizz');
    } else if (i % 5 === 0) {
      // Check if i is divisible by 5
      // Add "Buzz" to the result array
      result.push('Buzz');
    } else {
      // Add the current number as a string to the
      // result array
      result.push(i.toString());
    }
  }
  return result;
}

// Driver code
let n = 20;

// Call the fizzBuzz function to get the result
let result = fizzBuzzLoopMethod(n);

// Print the result
console.log(result.join(' '));
