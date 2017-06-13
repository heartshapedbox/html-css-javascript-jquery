var input = document.querySelector("input");
var checkButton = document.querySelector("#checkButton");
var resetButton = document.querySelector("#resetButton");
var result = document.querySelector("#result");

input.focus();
resetButton.style.display = "none";


checkButton.addEventListener("click", check);
ß


function check() {
  var pattern = /\d{3}-\d{3}-\d{4}/;
  var correctInput = pattern.exec(input.value);
  var text = "Result: ";

  if (!correctInput) {
    result.textContent = text + input.value + " is not a phone number !"
    stop();
  }

  else {
    result.textContent = text + "Your phone number is " + input.value + " !";
    stop();
  }
}


function stop() {
  checkButton.disabled = true;
  resetButton.style.display = "";
  input.disabled = true;
}


resetButton.addEventListener("click", reset);


function reset() {
  resetButton.style.display = "none";
  checkButton.disabled = false;
  input.disabled = false;
  result.textContent = "Result: ";
  input.value = "";
  input.focus();
}
