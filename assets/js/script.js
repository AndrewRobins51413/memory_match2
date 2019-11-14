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
    var promptWin = confirm("It's A Match!! - Reload the Game")
    setTimeout(function () {
      firstCardClicked.removeClass('hidden');
      secondCardClicked.removeClass('hidden')
    }, 2500);
    matches = matches + 1;

  } else if (secondImageCompare !== null ) {
    setTimeout(function () {            // setTimeout (function(){
      firstCardClicked.removeClass('hidden');
      secondCardClicked.removeClass('hidden')
     }, 1500);                 // codeblock)}, milliseconds);
    var promptLoss = confirm("No Match - Reload the Game");
    }

  if (secondImageCompare !== null) {
    var winPercent = (matches/click)*100;
  }
$("#button2").text(matches);
$("#button4").text(click);
$("#button6").text(winPercent + "%");   //parseInt

//$("#button4").replaceWith("Clicks = " + click);


console.log("testing matches", matches);
console.log("testing clicks", click);
console.log("percent win", winPercent);

  resetStats();
}
function resetStats() {       //this does not appear to be resetting the variables.
  var firstCardClicked = null;    //this has scope written all over it.
  var secondCardClicked = null;    //I'm trying to re-set global variables from inside
  var firstImageCompare = null;   // a function.
  var secondImageCompare = null;
}

//The game is minimally functional. Next step is to create a proper end-function
