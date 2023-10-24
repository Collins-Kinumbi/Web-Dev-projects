/* 
GAME FUNCTION:
.Player MUST guess a number between a min and max
.Player gets a certain amount of guesses
.Notify player of guesses remaining
.Notify the player of the correct answer if they lose
.Let player chose to play again
*/

//Game values
let min = 1,
  max = 100,
  winningNumber = getRandomNumber(min, max),
  guessesRemaining = 5;

//UI elements
const game = document.getElementById("game"),
  minNumber = document.querySelector(".min-num"),
  maxNumber = document.querySelector(".max-num"),
  guessInput = document.getElementById("guess-input"),
  guessBtn = document.getElementById("guess-btn"),
  message = document.querySelector(".message");

//Assig UI min and max
minNumber.textContent = min;
maxNumber.textContent = max;

//Play  again eventlistener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage("Please enter a number between " + min + " and " + max, "red");
  }
  //check if won
  if (guess === winningNumber) {
    //Game over - wom
    gameOver(true, winningNumber + " is correct! YOU WIN");
  } else {
    //Decrement guesses left
    guessesRemaining -= 1;

    //check to see if any guess left
    if (guessesRemaining === 0) {
      //No more guesses - lost
      gameOver(
        false,
        "You've run out of guesses! The number was " + winningNumber
      );
    } else {
      //Game continues - answer wrong
      //Change border color
      guessInput.style.borderColor = "red";

      //clear input
      guessInput.value = "";

      setMessage(
        //tell user it's the wrong number
        guess + " is not correct, " + guessesRemaining + " guesses left",
        "red"
      );
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  //Disable input
  guessInput.disabled = true;

  //Change color of border
  guessInput.style.borderColor = color;

  //set text color
  message.style.color = color;

  //Let user know they have won
  setMessage(msg);

  //Play again?
  guessBtn.value = "Play Again?";
  guessBtn.className += "play-again";
}

//Get winning number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.style.backgroundColor = "#fcfcfc";
  message.style.width = "300px";
  message.style.paddingLeft = "5px";
  message.style.paddingRight = "15px";
  message.style.borderRadius = "10px";
  message.textContent = msg;
}
