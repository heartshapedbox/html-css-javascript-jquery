var currentDate = new Date();
var hours = currentDate.getHours();

function checkTime() {
  if (hours >= 16 && hours < 24) {
    alert("Good evening!" + "\n" + "It's " + new Date);
  } else if (hours >= 12 && hours < 16) {
    alert("Good afternoon!" + "\n" + "It's " + new Date);
  } else if (hours >= 24 && hours < 5) {
    alert("Good night!" + "\n" + "It's " + new Date);
  } else if (hours >= 5 && hours < 12) {
    alert("Good morning!" + "\n" + "It's " + new Date);
  }
}

checkTime();
