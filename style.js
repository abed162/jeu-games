let randomNumber = parseInt((math,random()*100)+1);
const submit = document.querySelector('#sub');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultPress');
const lowOrHi = document.querySelector('lowOrHi');

const p=document.creatElement('p');

let previousGuess = [];
let numGuesses = 1;
let playGame = 'true';

if (playGame){
    submit.addEventListenertLstener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess));
    alert('please entrer a valid number');
    }   else if (guess <1) {
    alert('please entrer a number greater than 1!');
}else if (guess >100){
    alert('please entrer a number less than 500!')
} else{

    previousGuess.push(guess);

    if(numberGuess ===11){
        displayGuesses(guess);
        displayMessage('Game Over! Number was ${randomNumber}');
        endGame();
    } else {
        displayGuesses(guess);
        chekGuess(guess);
    }
}

 function chekGuess(guess){
     if(guess === randomNumber){
         displayMessage('you guessed correctly!!');
         endGame();
     } else if (guess > randomNumber) {
         displayMessage('too low! try again!!');
     } else if (guess > randomNumber){
         displayMessage('too high!try again');
    }
 }

 function displayGuesses(guess){
     userInput.value = '';
     guessSlot.innerHTML += `${guess} `;
     numGuesses++
     remaining.innerHTML = `${11 - numGuess} `;
 }
 function displayMessage (message){
     lowOrHi.innerHTML =`<h1>${message}</h1>`
 }

 function endGame() {
     userInput.value = '';
     userInput.setAttribute('disabled', '');
     p.classList.add('button');
     p.innerHTML = `<h1 id= "newGame">Start New Game</h1>

     StartOver.appendChild(p);
     playGame = false;
     new Game();   
     }
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt((Math.random()*100)+ 1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `$(11 - numGuesses) `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
})
