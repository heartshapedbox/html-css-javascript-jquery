// Write a function getSecondsToday() that returns the number of seconds passed from the beginning of the day

var now = new Date();

function getSecondsToday() {
  var start = new Date(now.getFullYear(),now.getMonth(),now.getDate());
  var result = ((now - start)/1000).toFixed();
  console.log(result); // 68008
}

getSecondsToday();
