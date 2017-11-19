// Write a function formatDate(date) that returns "date" in "dd.mm.yy" fotmat

var date = new Date();

function formatDate(date) {
  var year = date.getFullYear() % 100;
  var month = date.getMonth();
  var date = date.getDate();

  if (date < 10) date = "0" + date;
  if (month < 10) month = "0" + month;
  if (year < 10) year = "0" + year;

  var result = date + "." + month + "." + year;
  return result;
}

console.log(formatDate(date)); // 19.10.17
