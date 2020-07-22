/*

GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again 
*/

// Game Value
let min = 1, max = 10, winningNum = getRandomNum(min, max), guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for Guess
guessBtn.addEventListener('click',function(e){
    // e.preventDefault();

    let guess = parseInt(guessInput.value);

    //Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
    }

    // Check if won
    if(guess === winningNum){

        gameOver(true,`${winningNum} is correct, YOU WIN!`);

    }else{
        // Wrong Number
        guessesLeft -= 1;
        
        if(guessesLeft === 0){
            gameOver(false, `GAME OVER, you Lost. The Correct answer is ${winningNum}` );

        }else {
            // Game Continue if answer wrong

             //change border color
             guessInput.style.borderColor = 'red';
             // clear input
             guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guess left`, 'red')
        }
    }
});

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    //Disable input
    guessInput.disabled = true;
    //change color
    guessInput.style.borderColor = won;
    // Set message
    setMessage(msg,color);

    // Play Again
    guessBtn.value = 'Play Again';
    guessBtn.className +='play-again';

}

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

// Get Random Number
function getRandomNum(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}