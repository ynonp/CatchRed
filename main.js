// winner div class
var WINNER = "winner";

var SECONDS = 1000;
var TIMEOUT = 1 * SECONDS;

// cached DOM elements
var el = {
  sqr: document.querySelectorAll('.game div'),
  score: document.querySelector('.score input')
};

/*
* Sets up click event handlers on the divs
*/
function setupEvents() {
  for(var i=0;i<el.sqr.length;i++){
    el.sqr[i].addEventListener('click',checking);
  }
}


/** 
 * Check if the item that generated the event
 * is a winning item and modify score accordingly.
 */
function checking(ev) {

  if ( isWinner(ev.target) ) {
    addScore(5);
  }else{
    addScore(-5);
  }
  
  shuffle();
  restartTimer();
 }


/*
 * Randomize a new winner
 */
function shuffle(){
  var currentWinner = document.querySelector('.winner');
  var nextWinner = _.sample(el.sqr);

  currentWinner.classList.remove(WINNER);
  nextWinner.classList.add(WINNER);
}

/*
 * Starts a new timer that will reduce score by 2
 */
var _timer_id;
function restartTimer(){
  clearTimeout(_timer_id);
  
  _timer_id = setTimeout(function() {
	shuffle();
    addScore(-2);
    restartTimer();
  }, TIMEOUT);
  
}

/**
 * Check if el is a winner item
 */
function isWinner(div) {
  return div.classList.contains(WINNER);
}

/*
* Modify score value on the page by adding delta
* to current value
*/
function addScore(delta) {
  var newValue = Number(el.score.value) + delta;
  el.score.value = newValue;
	}

	

setupEvents();

