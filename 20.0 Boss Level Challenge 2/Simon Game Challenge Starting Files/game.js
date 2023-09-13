//3. At the top of the game.js file, create a new array called buttonColors and set it to hold the sequence "red", "blue", "green", "yellow" .
let buttonColors = ['red', 'blue', 'green', 'yellow'];

//5. At the top of the game.js file, create a new empty array called gamePattern.
let gamePattern = [];

// 3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
let userClickedPattern = [];

function nextSequence() {
  //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber

  //   let randomNumber =
  //     buttonColors[Math.floor(Math.random() * buttonColors.length)];
  let randomNumber = Math.floor(Math.random() * 4);

  //4. Create a new variable called randomChosenColor and use the randomNumber from step 2 to select a random color from the buttonColors array.
  let randomChosenColor = buttonColors[randomNumber];

  //6. Add the new randomChosenColor generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColor);

  // $('document').ready(function () {
  // $(`#${gamePattern}`).on('click', function (ele) {
  $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
  animatePress(userChosenColor);
  // playSound(ele.target.id);
  // });
  // });
}

$(`.btn`).click(function (ele) {
  // let userChosenColor = ele.target.id;

  let userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  // playSound(ele.target.id);
  animatePress(userChosenColor);
  // console.log(userClickedPattern);
});

function playSound(ele) {
  console.log(ele);
  var audioElement = new Audio(`./sounds/${ele}.mp3`);
  audioElement.play();
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass('pressed');

  setTimeout(function () {
    $(`#${currentColour}`).removeClass('pressed');
  }, 100);
}

// nextSequence();

console.log(gamePattern);
