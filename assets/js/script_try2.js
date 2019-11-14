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
//console.log("first card 17 ", firstCardClicked)
  firstCardClicked.addClass('hidden');
  firstImageCompare = $(event.currentTarget).find('.cardChildBottom').css('background-image');
console.log("first image 22 ", firstImageCompare);
click = click + 1;
}

else {
  //this is for the second card clicked

  secondCardClicked = $(event.currentTarget).find('.cardChildTop');
console.log("second card 27 ", secondCardClicked);
  secondCardClicked.addClass('hidden');
  secondImageCompare = $(event.currentTarget).find('.cardChildBottom').css('background-image');
console.log("second image 30 ", secondImageCompare);
click = click + 1;
}
  if (secondImageCompare != null) {
    imageCompare();
  }
}

//Comparing images - Detecting Matches
function imageCompare(){
  if(firstImageCompare===secondImageCompare){
    matches = matches + 1;
    console.log("matched! ", matches);
  }
  else {
    console.log("No Match");
setTimeout(imageReset, 1500);

  }
}
//Resetting non-matched cards
function imageReset(){
  firstCardClicked.removeClass('hidden');
  secondCardClicked.removeClass('hidden');
}
