var randomNumber = Math.floor(Math.random() * 100) + 1;


var guessInput = document.querySelector(".guessInput");
var guessSubmit = document.querySelector(".guessSubmit");

var guessNumber = document.querySelector(".guessNumber");
var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHigh = document.querySelector(".lowOrHigh");

var resetButton = document.querySelector(".resetButton");
var submitButton = document.querySelector(".submitButton");

var guessCount = 1;
var guessNum = 1;
guessInput.focus();


resetButton.style.display = "none";

guessSubmit.addEventListener("click", checkGuess);




function checkGuess() {
  var userGuess = Number(guessInput.value);

  if (guessNum === 1) {
    guessNumber.textContent = "Guess number : ";
  }
  guessNumber.textContent = guessNumber.textContent + guessNum + " ";



  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent = guesses.textContent + userGuess + " ";



  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "#3CB371";
    lowOrHigh.style.display = "none";
    guessNumber.style.display = "none";
    setGameOver();
  }


  else if (guessCount === 10) {
    lastResult.textContent = "GAME OVER!";
    lastResult.style.backgroundColor = "#FF4500";
    lowOrHigh.textContent = "";
    setGameOver();
  }

  else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "#FF4500";

    if (userGuess < randomNumber) {
      lowOrHigh.textContent = "Guess is too low!";
    }

    else if (userGuess > randomNumber) {
      lowOrHigh.textContent = "Guess is too high!";
    }
  }

  guessNum++;
  guessCount++;
  guessInput.value = "";
  guessInput.focus();
}




function setGameOver() {
  guessInput.disabled = true;
  guessSubmit.disabled = true;

  submitButton.style.display = "none";
  resetButton.style.display = "";

  resetButton.addEventListener("click", resetGame);
}



function resetGame() {
  guessCount = 1;
  guessNum = 1;

  var resetParagraphs = document.querySelectorAll(".result p");
  for (var i = 0 ; i < resetParagraphs.length; i++) {
    resetParagraphs[i].textContent = "";
  }

  submitButton.style.display = "";
  resetButton.style.display = "none";

  guessInput.disabled = false;
  guessSubmit.disabled = false;

  guessNumber.style.display = "";
  lowOrHigh.style.display = "";

  lastResult.style.backgroundColor = "#E6E6FA";

  guessInput.value = "";
  guessInput.focus();

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
