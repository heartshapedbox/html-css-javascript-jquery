// Write a function getSecondsToday() that returns the number of seconds passed from the beginning of the day

var date = new Date;
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var secondsInHour = 3600 * hours;
var secondsInMinute = 60 * minutes;

function getSecondsToday() {
  console.log(secondsInHour + secondsInMinute + seconds);
}

getSecondsToday(); // 68008
