$(document).ready(initializeApp);
console.log('initializeApp');

var firstCardClicked = null;
var secondCardClicked = null;
var firstImageCompare = null;
var secondImageCompare = null;
var matches = null;
var click = null;

function initializeApp(){
  $('.card').on("click", cardClickHandler);
}
function cardClickHandler(event){

if(firstCardClicked === null) {  //checking to see if FCC has already happened
  firstCardClicked = $(event.currentTarget).find('.cardChildTop'); //nonzero def for FCC
  console.log("first card 17 ", firstCardClicked);
  firstCardClicked.removeClass('piclfz');
  firstCardClicked.addClass('pic5');

  firstImageCompare = firstCardClicked.css('background-image');  //.find('.cardChildBottom')
console.log("first image 20 ", firstImageCompare);
click = click + 1;
}
else {
  //this is for the second card clicked
  secondCardClicked = $(event.currentTarget).find('.cardChildTop');
  console.log("second card 27 ", secondCardClicked);
  secondCardClicked.removeClass('piclfz');
  secondCardClicked.addClass('pic15');
  secondImageCompare = secondCardClicked.css('background-image');  //.find('cardChildBottom')
  console.log("second image 30 ", secondImageCompare);
click = click + 1;
}
}
