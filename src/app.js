function displayTemperature(response) {
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.temperature.current
  );
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#description").innerHTML =
    response.data.condition.description;
  document.querySelector("#humidity").innerHTML =
    response.data.temperature.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}
let apiKey = "9t00ecb4eo3189a04cbb6f6f58a37ac9";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={Newmarket}&key=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
