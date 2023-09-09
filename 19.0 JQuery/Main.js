$(document).ready(function () {
  $('h1').addClass('big-Title');
  $('button').addClass('button -regular');
  $('h1').css('color', ' #ff8181');
  // To Remove the Big Title class :-
  // $('h1').removeClass('big-Title');

  // To check the class has Iin button or not:-
  const hasClass = $('button').hasClass('-regular');
  console.log(hasClass); // true

  // Change the text title
  // $('h1').text('<em>Bye</em>'); // Its Not working
  $('h1').text('Bye');
});

// Selecting Elements
$('h1');
console.log($('h1'));
console.log($('button'));

// Get the currently value of selected element
const currentColorValue = $('h1').css('color');
const currentFontValue = $('h1').css('font-size');
console.log(currentFontValue);
console.log(currentColorValue);
