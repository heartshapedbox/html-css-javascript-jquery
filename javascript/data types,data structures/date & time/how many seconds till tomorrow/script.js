// Write a function getSecondsToTomorrow() that returns the number of seconds left till tomorrow

var now = new Date();

function getSecondsToTomorrow() {
  var tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate() + 1);
  var result = ((tomorrow - now)/1000).toFixed();
  console.log(result + " ms"); // 52449 ms
}

getSecondsToTomorrow();
