function ask(question, answer1, answer2, fn1, fn2, fn3) {
  var result = prompt(question);

  if(result.toUpperCase() === answer1.toUpperCase()) {
    fn1();
  } else if (result.toUpperCase() !== answer2.toUpperCase()) {
    fn3();
  } else {
    fn2();
  }
}


function turnOff() {
  alert("The light is turned off.");
}


function turnOn() {
  alert("The light is turned on.");
}


function tryAgain() {
  alert("Your answer should be 'Yes' or 'No'! Try again!");
}




ask("Turn off the light? (Yes/No)", "yes", "no", turnOff, turnOn, tryAgain);
