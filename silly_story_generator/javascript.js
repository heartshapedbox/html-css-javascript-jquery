/*assigning values*/
var inputName = document.querySelector("#inputName");
var us = document.querySelector("#us");
var uk = document.querySelector("#uk");
var genButton = document.querySelector(".genButton");
var resButton = document.querySelector(".resButton");
var outputName = document.querySelector("h2");
var story = document.querySelector(".story");
var storyText = "It was 94 farenheit outside, so <insertX> went for a walk. When they got to <insertY>, they stared in horror for a few moments, then <insertZ>. Bob saw the whole thing, but he was not surprised — <insertX> weighs 300 pounds, and it was a hot day.";
var insertX = "Willy the Goblin,Big Daddy,Father Christmas";
var insertY = "the soup kitchen,Disneyland,the White House";
var insertZ = "spontaneously combusted,melted into a puddle on the sidewalk,turned into a slug and crawled away";


/*primary conditions*/
inputName.focus();
genButton.disabled = true;
resButton.disabled = true;
us.disabled = true;
uk.disabled = true;


/*check input value & enable the genButton*/
inputName.addEventListener("keyup", checkInput);
function checkInput() {
  if (inputName.value.length > 0) {
    genButton.disabled = false;
    us.disabled = false;
    uk.disabled = false;
  }

  else {
    genButton.disabled = true;
    us.disabled = true;
    uk.disabled = true;
  }
}


/*uncheck US input*/
uk.addEventListener("click", uncheckUS);
function uncheckUS() {
  us.checked = false;
}


/*uncheck UK input*/
us.addEventListener("click", uncheckUK);
function uncheckUK() {
  uk.checked = false;
}


/*convert string to array*/
insertX = insertX.split(",");
insertY = insertY.split(",");
insertZ = insertZ.split(",");


/*!get random value!*/
function randomValueFromArray(array) {
  return array[Math.floor(Math.random()*array.length)];
}


/*generating story*/
genButton.addEventListener("click", generateStory);
function generateStory() {
  outputName.textContent = "Hello, " + inputName.value + ". Here is a story for you.";
  inputName.disabled = true;
  us.disabled = false;
  uk.disabled = false;
  resButton.disabled = false;

  /*assigning variable newStoryText. this is needed so we can create a new random story each time the genButton is pressed and the function is run.*/
  var newStoryText = storyText;
  var itemX = randomValueFromArray(insertX);
  var itemY = randomValueFromArray(insertY);
  var itemZ = randomValueFromArray(insertZ);

  /*replace 1st insertX according to !get random value!*/
  newStoryText = newStoryText.replace("<insertX>", itemX);

  /*replace insertY according to !get random value!*/
  newStoryText = newStoryText.replace("<insertY>", itemY);

  /*replace insertZ according to !get random value!*/
  newStoryText = newStoryText.replace("<insertZ>", itemZ);

  /*replace 2nd insertX according to !get random value!*/
  newStoryText = newStoryText.replace("<insertX>", itemX);

  /*replace name*/
  newStoryText = newStoryText.replace("Bob", inputName.value);

  /*convert temp & weight*/
  if(uk.checked) {
    var weight = Math.round(300 * 0.45359237) + " kilogram";
    var temperature = Math.round((94 - 32) * 5 / 9) + " celcius";

    newStoryText = newStoryText.replace("300 pounds", weight);
    newStoryText = newStoryText.replace("94 farenheit", temperature);
  }

  /*result*/
  story.textContent = newStoryText;
}


/*reset*/
resButton.addEventListener("click", reset);
function reset() {
  inputName.disabled = false;
  inputName.value = "";
  inputName.focus();
  outputName.textContent = "";
  story.textContent = "";
  genButton.disabled = true;
  resButton.disabled = true;
  us.checked = true;
  us.disabled = true;
  uk.checked = false;
  uk.disabled = true;
}
