// write a function isEmpty(obj) that returns "true" if object does not include keys and "false" if it does.

function isEmpty(obj) {
  var count = 0;
  for (var key in obj) {
    count++;
  }

  if (count === 0) {
    return true;
  } else {
    return false;
  }
}

var schedule = {};
console.log(isEmpty(schedule)); // true

schedule.timer = "7:00";
console.log(isEmpty(schedule)); // false
