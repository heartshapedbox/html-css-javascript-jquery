// Make a function getWeekDay(date) that returns a week day in the short format "Mon", "Thu", "Wed" etc.

var date = new Date(2012, 0, 3);
var options = {
  weekday: "short"
};

function getWeekDay(date) {
  return date.toLocaleString("en-US", options);
}

console.log(getWeekDay(date)); // Tue
