const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.getElementsByClassName('guesses')[0];
const remaining = document.getElementsByClassName('lastResult')[0];
const lowOrHigh = document.getElementsByClassName('lowOrHi')[0];
const startOver = document.getElementsByClassName('resultParas')[0];
const p = document.createElement('p');



let randomNumber = parseInt(Math.random() * 100 + 1);

let prevGuess = []; // in this array we will store all previous guesses from the user.
let numGuess = 1; // in this variable we will store the number of guesses done by user.

let playGame = true; // this variable is very common in games projects, if it is true then only game will start or continue else stop.

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })

}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }else if(guess < 1){
        alert("Enter a number greater than 1");
    }else if(guess > 100){
        alert("Enter a number less than 100");
    }else{
        prevGuess.push(guess);
        if(numGuess === 10){
            cleanUpdateguess(guess);
            displayMessage(`Game Over. The random number was ${randomNumber}`);
            endGame();
        } else{
            checkguess(guess);
            cleanUpdateguess(guess);
        }
    }
}

function checkguess(guess){
    if(guess === randomNumber){
        displayMessage("Congratulations! you won");
        endGame();
    }else if(guess > randomNumber){
        displayMessage("You are on the right path, Go lower");
    }else{
        displayMessage("You are on the right path, Go higher");
    }

}

function cleanUpdateguess(guess){
    userInput.value = '';
    guessSlot.textContent = prevGuess.join(', ');
    remaining.textContent = `${10 - numGuess}`;
    numGuess++;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame (){ 
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = (`<h2 id ="newGame">Start New Game </h2>`)
    startOver.append(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        guessSlot.textContent = '';
        numGuess = 1;
        remaining.textContent = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })   
}