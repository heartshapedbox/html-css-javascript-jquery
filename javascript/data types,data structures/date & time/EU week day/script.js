// Write a function getLocalDay(date) that returns a week day of the date

var date = new Date(2012, 0, 15);

function getLocalDay(date) {
  var day = date.getDay();
  if (day === 0) {
    day = 7;
  }
  return day;
}

console.log(getLocalDay(date)); // 7
