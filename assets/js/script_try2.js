$(document).ready(initializeApp);
console.log('initializeApp');

var firstCardClicked = null;
var secondCardClicked = null;
var firstImageCompare = null;
var secondImageCompare = null;
var matches = 0;
var clickCount = 0;
var max_matches = 1;
var winnerModal = null;
var modal = null;

function initializeApp(){
  $('.card').on("click", cardClickHandler);

}
function cardClickHandler(event){

if(firstCardClicked === null) {  //checking to see if FCC has already happened
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
  clickCount = clickCount + 1;
}
  if (secondImageCompare != null) {
    imageCompare();
  }
  console.log("Clicks ", clickCount);
  $('#clicks').text(clickCount);
}

//Comparing images - Detecting Matches
function imageCompare(){
  if(firstImageCompare===secondImageCompare){
    matches++;
    console.log("matched! ", matches);
    matchModal();
    winModal();
     //firstCardClicked = null;
     //secondCardClicked = null;
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
  firstCardClicked = null;
  secondCardClicked = null;
}

function matchModal() {
  modal = $('.modal');
    modal.removeClass('hidden');
    setTimeout(8000);
    modal.addClass('hidden');
    }


function winModal() {
  winnerModal = $('.winnermodal');
  if (matches === max_matches) {
    winnerModal.removeClass('hidden');
    setTimeout(imageReset, 10000);
    winnerModal.addClass('hidden');
    //add reset function here
  }
}
















//Copied from Duckett p505
// var modal = (function(){
//   var $window = $(window);
//   var $modal = $('<div class="modal"/>');
//   var $content = $('<div class="modal-content"/>');
//   var $close = $('<button role="button" class="modal-close">close</button>');

//   $modal.append($content, $close);  //adds close button

//   $close.on('click', function(e) {    // allows user to click on 'close'
//     e.preventDefault();               // Prevent link behavior?
//     modal.close();                    // close modal window
//   });
//   return{
//     center: function(){               // find center of window
//       var top = Math.max($window.height()- $modal.outerHeight(),0)/2
//       var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2
//       $modal.css({
//         top: top + $window.scrollTop(),
//         left: left + $window.scrollLeft()
//       });
//     },
//       open: function(settings) {
//         $content.empty().append(settings.content);

//         $modal.css({                           // sets modal dimensions
//           width: settings.width || 'auto',    //
//           height: settings.height || 'auto'
//         }).appendTo('body');                    //adds to page
//         modal.center();
//         $(window).on('resize', modal.center);
//       },
//       close: function(){
//         $content.empty();
//         $modal.detach();
//         $(window).off('resize',modal.center);
//       }
//     };
//   }());
//   }
