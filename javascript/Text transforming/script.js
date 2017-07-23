var btn = document.querySelector(".button");
var paragraph = document.querySelectorAll("p");
var header = document.querySelectorAll("h1");



btn.addEventListener("click", transformParagraph);

function transformParagraph() {
    for (i = 0; i < paragraph.length; i++) {
      if (paragraph[i].style.textTransform === "uppercase") {
      paragraph[i].style.textTransform = "lowercase";
    }

      else if (paragraph[i].style.textTransform === "lowercase") {
      paragraph[i].style.textTransform = "initial";
    }

      else {
      paragraph[i].style.textTransform = "uppercase";
    }
  }
}



btn.addEventListener("click", transformHeader);

function transformHeader() {
    for (i = 0; i < header.length; i++) {
      if(header[i].style.color === "green") {
      header[i].style.color = "blue";
    }

      else if(header[i].style.color === "blue") {
      header[i].style.color = "red";
    }

      else {
      header[i].style.color = "green";
    }
  }
}