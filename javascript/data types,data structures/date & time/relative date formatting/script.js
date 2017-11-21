// Write a function formatDate(date) that formats the date like that:
// if less than a second passed since the "date" then return "right now"
// else if less than a minute passed since the "date" then return ""n" second ago"
// else if less than an hour passed since the "date" then return ""m" minute ago"
// else return the full date in the "dd.mm.yy hh:mm" format

var options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "numeric",
  minute: "numeric"
}

function formatDate(date) {
  var now = new Date();
  var diff = now - date;

  if (diff / 1000 < 1) {
    return "Right now";
  } else if (diff / 1000 < 60) {
    return diff / 1000 + " seconds ago";
  } else if (diff / 1000 < 3600) {
    return diff / 1000 / 60 + " minutes ago";
  } else {
    return date.toLocaleString("en-US", options);
  }
}

console.log(formatDate(new Date(new Date - 1))); // Right now
console.log(formatDate(new Date(new Date - 45 * 1000))); // 30 seconds ago
console.log(formatDate(new Date(new Date - 35 * 60 * 1000))); // 5 minutes ago
console.log(formatDate(new Date(new Date - 86400 * 1000))); // 11/20/17, 12:07 PM
