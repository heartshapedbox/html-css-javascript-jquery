// Write a function getSecondsToday() that returns the number of seconds passed from the beginning of the day

var date = new Date;

function getSecondsToday() {
  var seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  console.log(seconds);
}

getSecondsToday(); // 68008
