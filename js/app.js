/*
 * Create a list that holds all of your cards
 */

//Global Scope 
const cards = document.querySelectorAll('.card');
//console.log('card');
let toggledCards = []; //declaring toggleCards 

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
//cards won't toggle now app.js:47 Uncaught TypeError: Cannot read property 'contains' of undefined

let deck = document.querySelector('.deck');
deck.addEventListener('click', event => { //listening for the click
    const clickTarget = event.target;
    if (clickTarget.clasList.contains('card')) {
        toggleCard(clickTarget);
        addToggleCard(clickTarget);//
    }

    //toggles the cards 
    function toggleCard(clickTarget) {
        clickTarget.classList.toggle('open');
        clickTarget.classList.toggle('show');
    }

    if (clickTarget.classList.contains('card') && toggledCards.length < 2 && !toggledCards.includes(clickTarget)) {

        if (toggledCards.length === 2) {
            if (clickTarget.classList.contains('card')) {
                checkForMatch(clickTarget);
                addMove();
                checkScore();
            }

        }
    }


    function addToggleCard(clickTarget) {
        toggledCards.push(clickTarget); //add new items to the array
        console.log(toggledCards);

    }
})