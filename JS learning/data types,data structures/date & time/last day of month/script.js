// Write a function getLastDayOfMonth(year, month) that returns the last day of the month

function getLastDayOfMonth(year, month) {
  var date = new Date(year, month + 1);
  date.setDate(date.getDate() - 1);
  alert(date.getDate());
}

getLastDayOfMonth(2017, 10); // 30
getLastDayOfMonth(2017, 2); // 31
getLastDayOfMonth(2017, 1); // 28
