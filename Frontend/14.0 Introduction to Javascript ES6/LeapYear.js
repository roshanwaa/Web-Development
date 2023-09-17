function isLeap(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `Leap year.`;
  } else {
    return `Not leap year.`;
  }
}

// Example usage
console.log(isLeap(2000)); // Output: Leap year.
console.log(isLeap(2100)); // Output: Not leap year.
