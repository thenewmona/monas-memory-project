/*
 * Create a list that holds all of your cards
 */

//Global Scope 
const cards = document.querySelectorAll('.card');
//console.log('card');
let toggledCards = []; //calling the Cards 

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
// Need to shuffle the deck
// 8/13 need to create shuffle branch before defining the shuffle function 
//shuffleDeck (); 


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//Matt's Cranford walkthrough

// reviewing Sandra's code as an example  

let deck = document.querySelector('.deck'); //calling cards in an array
deck.addEventListener('click', event => { //listening for the click
    const clickTarget = event.target;
    //validate isclick error message 
    function isClickValid(clickTarget) { // 8/13 is this a scope issue in Matt's tutorial he has this all in one block 
        return (clickTarget.classList.contains('card') &&
            !clickTarget.classList.contains('match') && toggledCards.length < 2 &&
            !toggledCards.includes(clickTarget));
    }
    //8-13 need to move this out of the block I think. removed from the above block game still works
    if (isClickValid(clickTarget)) {}

    toggleCard(clickTarget);
    addToggleCard(clickTarget);
    if (toggledCards.length === 2) {
        cardMatch(clickTarget);
    }
    console.log('2 cards');

    //what to do when a card is clicked  
    function toggleCard(clickTarget) {
        clickTarget.classList.toggle('open');
        clickTarget.classList.toggle('show');
        clickTarget.classList.toggle('disable');
        //Julie said saturday that disable makes it so that the cards can not be flipped 
        //back over once they are matched so that is why in Sandra's walkthrough she has disabled
    }

    function addToggleCard(clickTarget) {
        toggledCards.push(clickTarget);
        console.log(toggledCards);
    }
    //cardMatch
    //8-13 added cardMatch function but now the anchor cards stay match again and will not flip 

    let match = 0;//keep getting error message that matched is not defined 

    function cardMatch() {
        if (toggledCards[0].firstElementChild.className ===
            toggledCards[1].firstElementChild.className) {
            toggledCards[0].classList.toggle('match');
            toggledCards[1].classList.toggle('match');
            toggledCards = [];
            match++;
        } else {
            setTimeout(() => { //https://www.w3schools.com/js/js_timing.asp
                toggledCard(toggledCards[0]);
                toggleCard(toggledCards[1]);
                toggledCards = [];
            }, 1000);
        }
    }


});