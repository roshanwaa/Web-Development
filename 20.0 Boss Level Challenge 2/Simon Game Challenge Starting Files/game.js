let buttonColors = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];

let userClickedPattern = [];

let level = 0;

let started = false;

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);

  let randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
  level++;
  $('#level-title').text('Level ' + level);

  userClickedPattern = [];
  playSound(randomChosenColor);
  animatePress(randomChosenColor);
}

$(`.btn`).click(function (ele) {
  let userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);

  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
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

$(document).keypress(function () {
  if (!started) {
    nextSequence();
    started = true;
    $('#level-title').text('Level ' + level);
  }
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log('success');

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log('wrong');
  }
}

console.log(gamePattern);
