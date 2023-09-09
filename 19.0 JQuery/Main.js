$(document).ready(function () {
  $('h1').css('color', 'red');
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
