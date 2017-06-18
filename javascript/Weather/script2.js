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
  switch(select.value) {
    case "sunny":
    output.textContent = sunnyText;
    document.body.style.backgroundImage = "url('image1.jpg')";
    break;

    case "rainy":
    output.textContent = rainyText;
    document.body.style.backgroundImage = "url('image2.jpg')";
    break;

    case "snowing":
    output.textContent = snowingText;
    document.body.style.backgroundImage = "url('image3.jpg')";
    break;

    case "overcast":
    output.textContent = overcastText;
    document.body.style.backgroundImage = "url('image4.jpg')";
    break;

    case "choose":
    output.textContent = "";
    document.body.style.backgroundImage = "none";
  }
}
