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

  // add link to the a tag list
  $('a').attr('href', 'www.example.com');

  // check class name of any tag
  $('a').attr('class');

  // Add Event Listener to the page
  $('h1').click(function () {
    $('h1').removeClass('big-Title');
  });

  $('button').click(function () {
    $('h1').css('color', 'green');
  });
  // Change the h1 text to keyPress
  $(document).keypress(function (event) {
    console.log(...event.key);
    $('h1').text(...event.key);
  });

  // show and toggle buttons
  $('button').click(function () {
    // $('h1').hide();
    // $('h1').toggle();
    // $('h1').fadeOut();
    // $('h1').fadeToggle();
    // $('h1').slideUp();
    // $('h1').slideDown();
    $('h1').slideToggle();
  });
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
