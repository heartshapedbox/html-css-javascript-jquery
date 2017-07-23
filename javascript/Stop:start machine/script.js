var btn = document.querySelector("button");
var txt = document.querySelector("p");

btn.addEventListener("click", check);

function check() {

  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine is started.";
  }

  else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stoped."
  }
}
