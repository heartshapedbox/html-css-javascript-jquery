var select = document.querySelector("select");
var text = document.querySelector("h1");
var label = document.querySelector("label");
var body = document.querySelector("body");
var changeText = document.querySelector("#change");


function changeTheme(bgColor, txtColor, lblColor, chgText) {
  body.style.backgroundColor = bgColor;
  text.style.color = txtColor;
  label.style.color = lblColor;
  changeText.textContent = chgText;
}

select.onchange = function() {
  if (select.value === "black") {
    changeTheme("black", "white", "white", "This is black theme.");
  } else if (select.value === "white") {
    changeTheme("white", "black", "black", "This is white theme.");
  } else if (select.value === "yellow") {
    changeTheme("yellow", "black", "black", "This is yellow theme.");
  } else {
    changeTheme("red", "white", "white", "This is red theme.");
  }
}
