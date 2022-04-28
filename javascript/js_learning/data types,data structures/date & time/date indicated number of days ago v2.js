// Create a function getDateAgo(date, days) that returns the date that was "days" days ago
// Function should not change the object "date"

var date = new Date(2017,3,13);

function getDateAgo(date, days) {
  var dateCopy = new Date(date);
  var day = dateCopy.setDate(dateCopy.getDate() - days);
  return dateCopy = new Date(day);
}

alert(date); // Thu Apr 13 2017 00:00:00 GMT+0300 (EEST)
alert(getDateAgo(date, 2)); // Tue Apr 11 2017 00:00:00 GMT+0300 (EEST)
