const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4937bb121bmsh7609e948e1a4bacp133fdejsn9d1c8ce15bc9",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
var place = "Mumbai";

const weather = (place) => {
  place_name.innerHTML = place;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + place,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  var place = document.getElementById("place").value;
  console.log(place);

  weather(place);
});

console.log(weather(place));
