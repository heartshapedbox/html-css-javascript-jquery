/*assigning variables*/
var select = document.querySelector("select");
var output = document.querySelector("p");

/*assigning weather conditions variables*/
var sunnyText = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
var rainyText = "Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.";
var snowingText = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
var overcastText = "It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";

/*change the weather*/
select.addEventListener("change", changeWeather);

function changeWeather() {
  if (select.value === "sunny") {
    output.textContent = sunnyText;
    document.body.style.backgroundImage = "url('image1.jpg')";
  } else if (select.value === "rainy") {
    output.textContent = rainyText;
    document.body.style.backgroundImage = "url('image2.jpg')";
  } else if (select.value === "snowing") {
    output.textContent = snowingText;
    document.body.style.backgroundImage = "url('image3.jpg')";
  } else if (select.value === "overcast") {
    output.textContent = overcastText;
    document.body.style.backgroundImage = "url('image4.jpg')";
  } else {
    output.textContent = "";
    document.body.style.backgroundImage = "none";
    background.style.backgroundColor = "#DCDCDC";
  }
}
