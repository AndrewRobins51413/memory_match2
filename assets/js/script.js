//memory-matching game
// nine pairs of cards to be
    // Shuffled
    //assigned
    // flip on click
    // acknowledge match = winner

// First: make 9 pairs; 1-9 of hearts  ,   of ${suits[suit]}`

$(document).ready(initializeApp);
console.log('initializeApp');

var firstCardClicked = null;
var secondCardClicked = null;
var firstImageCompare = null;
var secondImageCompare = null;
var matches = null;

function initializeApp(){
  $(".card").on("click", handleCardClick);
}
// Three-five lines above - #card1 is where the click (event) happens|| ".on" is JQ$
// function() is an anonymous function which calls the handleCardClick, but
// is a callback b/c there are no () immediately after the f() name.

function handleCardClick(event){
// $(event.currentTarget);
// flipCardBack
  // console.log('Card image url clicked', $(event.currentTarget).class('background-image'));
// $(event.currentTarget).flipCardBack.hide("div:first-child");

    if (firstCardClicked === null) {          //once first card is defined,
        firstCardClicked = $(event.currentTarget).find('.flipCardBack'); //defining non-null value to FCC
        console.log('First Card clicked', firstCardClicked)
        firstCardClicked.addClass('hidden');
      firstImageCompare = $(event.currentTarget).find('.flipCardFront').css("background-image");
      console.log("first image:", firstImageCompare);
    }
    else {
      //  (secondCardClicked === null && firstCardClicked === true){
      secondCardClicked = $(event.currentTarget).find('.flipCardBack');
      secondCardClicked.addClass('hidden');
      console.log('Second Card Back:', secondCardClicked);
      secondImageCompare = $(event.currentTarget).find('.flipCardFront').css("background-image");
      console.log("second image:", secondImageCompare);
    }

  if (secondImageCompare === firstImageCompare) {
    alert("Winner!")

  } else if (secondImageCompare !== null ) {


    setTimeout( function(){
      firstCardClicked.removeClass('hidden');
      secondCardClicked.removeClass('hidden');
    }, 1000);

   // setTimeout (function(){
   // codeblock)}, milliseconds);

}




  }





var deck = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    //const suits = ['Hearts'];
    const values = [ 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(deck);


// For the indecisive and culinarily adventurous: Dinner Roulette! With one click a locally
// prepared meal will be on its way to your doorstep, the twist is, you won't
// know what is for dinner until you open the box. User can adjust dish
//possibilities based on budget and dietary preferences. You click, we choose!
