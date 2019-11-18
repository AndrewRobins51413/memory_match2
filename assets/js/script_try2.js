$(document).ready(initializeApp);
console.log('initializeApp');

var firstCardClicked = null;
var secondCardClicked = null;
var firstImageCompare = null;
var secondImageCompare = null;
var matches = 0;
var average = 0;
var clickCount = 0;
var max_matches = 9;
var winnerModal = null;
var winCount = 0;
var averageFormatted = 0;
var gameCount = 0;

function initializeApp() {
  $('.card').on("click", cardClickHandler);

}
function cardClickHandler(event) {
  
  if (firstCardClicked === null) {  //checking to see if FCC has already happened
    firstCardClicked = $(event.currentTarget).find('.cardChildTop'); //nonzero def for FCC
    firstCardClicked.addClass('hidden');
    firstImageCompare = $(event.currentTarget).find('.cardChildBottom').css('background-image');
    clickCount = clickCount + 1;
  }

  else {
  
    //this is for the second card clicked
    secondCardClicked = $(event.currentTarget).find('.cardChildTop');
    secondCardClicked.addClass('hidden');
    secondImageCompare = $(event.currentTarget).find('.cardChildBottom').css('background-image');
    imageCompare();
    clickCount = clickCount + 1;

  }
  
  console.log("Clicks ", clickCount);
  console.log("average ", averageFormatted, "%");

  $('#games').text(winCount);
  average = matches / (clickCount / 2);
  averageFormatted = (average.toPrecision(2))*100;
  $('#averageClick').text(averageFormatted + "%");
}

//Comparing images - Detecting Matches
function imageCompare() {
  
  
  console.log("first image ", firstImageCompare);
  console.log("second image ", secondImageCompare);
  if (firstImageCompare === secondImageCompare) {  //match condition
    matches++;                                  // increment match counter
    console.log("matched! ", matches);
    $('#matchCount').text(matches);              //update match stats
    matchModal();                               // alerts player of match
    winModal();  
   firstCardClicked = null;
   secondCardClicked = null;
   firstImageCompare = null;
   secondImageCompare = null;
    }                                            
  else {
    console.log("No Match");
    setTimeout(imageReset, 1500);
  }
}

//Resetting non-matched cards
  function imageReset() {
    if(clickCount%2 === 0){            
  firstCardClicked.removeClass('hidden');     // tried .find to solve the premature null problem
  secondCardClicked.removeClass('hidden');    //find('.cardChildBottom').
  firstCardClicked = null;
  secondCardClicked = null;
  firstImageCompare = null;
  secondImageCompare = null;
    }
}

function matchModal() {
  var modal = $('.modal');
  modal.removeClass('hidden');
  function modalTimer(){ 
    modal.addClass('hidden')
  }
  
  setTimeout(modalTimer,1500);
}  



function winModal() {
  winnerModal = $('.winnermodal');
  if (max_matches === matches) {
    winnerModal.removeClass('hidden');
    $('<button>').on('click', reSet());
    winCount = winCount+1;
    function winnerTimer(){
      winnerModal.addClass('hidden');
    }
    setTimeout(winnerTimer, 10000);
  }
      
}

function reSet(){
  $('.card').removeClass('hidden');
  matches = 0;
  average = 0;

  clickCount = 0;
  gameCount = gameCount+1;
}
