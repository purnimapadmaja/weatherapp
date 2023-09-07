let weathercityel = document.getElementById("weathercity");
let weatherbuttonel = document.getElementById("weatherbutton");
let weatherimgiconel = document.getElementById("weatherimgicon");

let apikey = "e3eafb9817115188ce855e284c7f7fdb";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
// weatherbuttonel.addEventListener("click", weatherupdates);
async function weatherupdates(city) {
  let response = await fetch(apiUrl + city + `&appid=${apikey}`);
  let responsedata = await response.json();
  if (responsedata.status === 404) {
    document.getElementById("errormsg").style.display = block;
  } else {
  }
  console.log(responsedata);
  document.getElementById("weathercityname").textContent = responsedata.name;
  document.getElementById("weathertemp").textContent =
    Math.round(responsedata.main.temp) + "°C|°F";
  document.getElementById("weatherhumidty").textContent =
    responsedata.main.humidity + "%";
  document.getElementById("weatherwind").textContent =
    responsedata.wind.speed + "km/hr";

  if (responsedata.weather[0].main === "Clouds") {
    weatherimgiconel.src = "./images/clouds.jpg";
  } else if (responsedata.weather[0].main === "Clear") {
    weatherimgiconel.src = "./images/clearsky.jpg";
  } else if (responsedata.weather[0].main === "Rain") {
    weatherimgiconel.src = "./images/rain.jpg";
  } else if (responsedata.weather[0].main === "Drizzle") {
    weatherimgiconel.src = "./images/drizzle.jpg";
  } else if (responsedata.weather[0].main === "Mist") {
    weatherimgiconel.src = "./images/misticon.jpg";
  }
}
weatherbuttonel.addEventListener("click", () => {
  weatherupdates(weathercityel.value);
});
