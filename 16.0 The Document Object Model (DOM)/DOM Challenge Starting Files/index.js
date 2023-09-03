// const lastChild = document.querySelector('ul').lastElementChild;
// lastChild.innerHTML = 'Roshan';
// console.log(lastChild);

// document.querySelector('ul').lastElementChild.innerHTML = 'Roshan';

const changedColorBtn = document.querySelector('button');
changedColorBtn.style.background = 'yellow';

document.querySelector('#title').classList.add('huge');

// const HelloText = (document.querySelector('#title').innerText = ' Say Hello '); // its also change the title main content of the document
// console.log(HelloText);

const text = (document.querySelector('#title').innerHTML =
  '<em>Roshan.Waa</em>'); // its also change the title main content of the document
console.log(text);

// To get the a tag href attribute
const getAttribute = document.querySelector('a').getAttribute('href');
console.log(getAttribute);

// const gdByeText = (document.querySelector('#title').textContent =
//   '<em>Good Bye</em>'); // its also change the title main content  of the document
// console.log(gdByeText);

document.querySelectorAll('.list')[2].innerText = 'Roshan';

document.querySelector('.list a').style.color = 'red';
