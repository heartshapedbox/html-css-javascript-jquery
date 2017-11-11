// Create a function getWeekDayAgo(date, days) that returns the week day that was "days" days ago
// Function should not change the object "date"

var date = new Date(2017,3,13);
var options = {
  weekday: "long"
}

function getWeekDayAgo(date, days) {
  var dateCopy = new Date(date);
  var day = dateCopy.setDate(dateCopy.getDate() - days);
  return dateCopy.toLocaleString("en-US", options);
}

alert(date.toLocaleString("en-US", options)); // Thursday
alert(getWeekDayAgo(date, 2)); // Tuesday
