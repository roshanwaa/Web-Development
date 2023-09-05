const drumLength = document.querySelectorAll('.drum').length;
console.log(drumLength);

for (let i = 0; i < drumLength; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    console.log(this);
    // let audio = new Audio('./sounds/crash.mp3');
    // audio.play();
  });
}
