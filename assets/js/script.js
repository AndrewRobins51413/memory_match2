//memory-matching game

$(document).ready(initializeApp);
console.log('initializeApp');

var firstCardClicked = null;
var secondCardClicked = null;
var firstImageCompare = null;
var secondImageCompare = null;
var matches = null;
var click = null;

//var numMatches = $('<div>').text(add.matches)


function initializeApp(){$(".card").on("click", handleCardClick);}

// Three-five lines above - #card1 is where the click (event) happens|| ".on" is JQ$
// function() is an anonymous function which calls the handleCardClick, but
// is a callback b/c there are no () immediately after the f() name.

function handleCardClick(event){
    if (firstCardClicked === null) {          //once first card is defined,
        firstCardClicked = $(event.currentTarget).find('.flipCardBack'); //defining non-null value to FCC
        console.log('First Card clicked', firstCardClicked)
        firstCardClicked.addClass('hidden');
      firstImageCompare = $(event.currentTarget).find('.flipCardFront').css("background-image");
      console.log("first image:", firstImageCompare);
      click = click + 1;
    }
    else {
      //  (secondCardClicked === null && firstCardClicked === true){
      secondCardClicked = $(event.currentTarget).find('.flipCardBack');
      secondCardClicked.addClass('hidden');
      console.log('Second Card Back:', secondCardClicked);
      secondImageCompare = $(event.currentTarget).find('.flipCardFront').css("background-image");
      console.log("second image:", secondImageCompare);
      click = click+1;
    }

  if (secondImageCompare === firstImageCompare) {
    console.log("cards match");
    resetStats()
    setTimeout(function () {
      firstCardClicked.removeClass('hidden');
      secondCardClicked.removeClass('hidden')
    }, 2500);
    matches = matches + 1;

  } else if (secondImageCompare !== null ) {
    console.log("No Match");
    resetStats()
    setTimeout(function () {            // setTimeout (function(){
      firstCardClicked.removeClass('hidden');
      secondCardClicked.removeClass('hidden')
     }, 1500);                 // codeblock)}, milliseconds);
    }

  if (secondImageCompare !== null) {
    var winPercent =  function winPercentCalc(){(matches/click)*100};
  }
console.log("testing matches", matches);
console.log("testing clicks", click);
console.log("percent win", winPercent);

  function resetStats() {       //this does not appear to be resetting the variables.
    var firstCardClicked = null;    //this has scope written all over it.
    var secondCardClicked = null;    //I'm trying to re-set global variables from inside
    var firstImageCompare = null;   // a function.
    var secondImageCompare = null;

  }

}

// resetting the game
