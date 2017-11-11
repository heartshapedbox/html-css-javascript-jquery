// Create a function getDayAgo(date, days) that returns the day that was "days" days ago
// Function should not change the object "date"

var date = new Date(2017,3,13);

function getDayAgo(date, days) {
  var dateCopy = new Date(date);
  var day = dateCopy.getDate() - days;
  return day;
}

alert(date.getDate()); // 13
alert(getDayAgo(date, 2)); // 11
