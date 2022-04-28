// Make a function getWeekDay(date) that returns a week day in the short format "Mon", "Thu", "Wed" etc.

var date = new Date(2012, 0, 3);
var arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getWeekDay(date) {
  return arr[date.getDay()];
}

console.log(getWeekDay(date)); // Tue
