//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
let buttonColors = ['red', 'blue', 'green', 'yellow'];

//5. At the top of the game.js file, create a new empty array called gamePattern.
let gamePattern = [];

function nextSequence() {
  //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber

  //   let randomNumber =
  //     buttonColors[Math.floor(Math.random() * buttonColors.length)];
  let randomNumber = Math.floor(Math.random() * 4);

  //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  let randomChosenColor = buttonColors[randomNumber];

  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  return gamePattern.push(randomChosenColor);
}

nextSequence();
// console.log(nextSequence());
console.log(gamePattern);
