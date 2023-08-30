// const lastChild = document.querySelector('ul').lastElementChild;
// lastChild.innerHTML = 'Roshan';
// console.log(lastChild);

// document.querySelector('ul').lastElementChild.innerHTML = 'Roshan';

const lastEle = document.querySelectorAll('.list')[2];
lastEle.innerText = 'Roshan';

console.log(lastEle);

const firstEle = (document.querySelector('.list a').style.color = 'red');

console.log(firstEle);

const changedColorBtn = document.querySelector('button');
changedColorBtn.style.background = 'yellow';
