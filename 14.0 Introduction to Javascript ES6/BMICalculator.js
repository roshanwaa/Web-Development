function bmiCalculator(weight, height) {
  const bmi = weight / (height * height);
  const formattedBmi = Number.isInteger(bmi) ? bmi.toString() : bmi.toFixed(1);

  if (bmi < 18.5) {
    return `Your BMI is ${formattedBmi}, so you are underweight.`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `Your BMI is ${formattedBmi}, so you have a normal weight.`;
  } else {
    return `Your BMI is ${formattedBmi}, so you are overweight.`;
  }
}

// Example usage
const weight = 65; // in kilograms
const height = 1.75; // in meters
const interpretation = bmiCalculator(weight, height);
console.log(interpretation);
