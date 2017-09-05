// write a function isEmpty(obj) that returns "true" if object does not include keys and "false" if it does.

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

var schedule = {};
console.log(isEmpty(schedule)); // true

schedule.timer = "7:00";
console.log(isEmpty(schedule)); // false
