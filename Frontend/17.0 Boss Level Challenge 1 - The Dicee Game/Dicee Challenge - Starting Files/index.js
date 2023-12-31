function randomDice() {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);
  console.log(randomNumber1 + ' ' + randomNumber2);

  document
    .querySelector('.img1')
    .setAttribute('src', `./images/dice${randomNumber1}.png`);

  /*  if (randomNumber1 === 1 || randomNumber2 === 1) {
  } else if (randomNumber1 === 2 || randomNumber2 === 2) {
    document.querySelector('.img1').setAttribute('src', './images/dice2.png');
  } else if (randomNumber1 === 3 || randomNumber2 === 3) {
    document.querySelector('.img1').setAttribute('src', './images/dice3.png');
  } else if (randomNumber1 === 4 || randomNumber2 === 4) {
    document.querySelector('.img1').setAttribute('src', './images/dice4.png');
  } else if (randomNumber1 === 5 || randomNumber2 === 5) {
    document.querySelector('.img1').setAttribute('src', './images/dice5.png');
  } else {
    document.querySelector('.img1').setAttribute('src', './images/dice6.png');
  } */

  document
    .querySelector('.img2')
    .setAttribute('src', `./images/dice${randomNumber2}.png`);
  /*     if (randomNumber2 === 1) {
      document
        .querySelector('.img2')
        .setAttribute('src', `./images/dice${randomNumber2}.png`);
    } else if (randomNumber2 === 2) {
      document.querySelector('.img2').setAttribute('src', './images/dice2.png');
    } else if (randomNumber2 === 3) {
      document.querySelector('.img2').setAttribute('src', './images/dice3.png');
    } else if (randomNumber2 === 4) {
      document.querySelector('.img2').setAttribute('src', './images/dice4.png');
    } else if (randomNumber2 === 5) {
      document.querySelector('.img2').setAttribute('src', './images/dice5.png');
    } else {
      document.querySelector('.img2').setAttribute('src', './images/dice6.png');
    } */

  if (randomNumber1 < randomNumber2) {
    // console.log('Winners: ' + randomNumber2);
    document.querySelector('h1').innerHTML = '🥇 Player 2';
  } else if (randomNumber1 > randomNumber2) {
    // console.log('Winners: ' + randomNumber1);
    document.querySelector('h1').innerHTML = '🥇 Player 1';
  } else {
    // console.log('Draw');
    document.querySelector('h1').innerHTML = '🤞 Draw';
  }
}

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document.getElementsByClassName('bubbly-button');

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
