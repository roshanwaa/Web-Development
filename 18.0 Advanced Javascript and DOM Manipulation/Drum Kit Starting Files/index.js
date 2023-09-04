const drumLength = document.querySelectorAll('.drum').length;
console.log(drumLength);

for (let i = 0; i < drumLength; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', () => {
    console.log(i);
  });
}
