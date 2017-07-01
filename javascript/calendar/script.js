var select = document.querySelector("select");
var month = document.querySelector(".monthName");
var list = document.querySelector("ul");


select.addEventListener("change", getNumberOfDays);

function getNumberOfDays() {
  var m = select.value;
  var days;
    if (m === "January" || m === "March" || m === "May" || m === "July" || m === "August" || m === "October" || m === "December") {
      days = 31;
    } else if (m === "February") {
      days = 28;
    } else {
      days = 30;
    }
    reset();
    createCalendar(m, days);
  }


function createCalendar(m, days) {
  month.textContent = m;
  for (var i = 1; i <= days; i++){
    var item = document.createElement("li");
    list.appendChild(item);
    item.textContent = i;
  }
}


function reset() {
  list.innerHTML = "";
}
