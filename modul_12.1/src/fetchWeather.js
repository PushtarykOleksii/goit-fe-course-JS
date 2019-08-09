
const baseUrl2 = "https://api.apixu.com/v1";
const curentWeather = "/current.json";
const requestParam = "?key=ea948e5e9c4e48f3a35170457190608&lang=uk";

const refs = {
    
    weatherSection: document.querySelector("#weather"),
    button: document.querySelector(".search-button"),
    icon: document.querySelector(".icon"),
    city: document.querySelector(".city"),
    temp: document.querySelector(".temp"),
    humidity: document.querySelector(".humidity"),
    wind: document.querySelector(".wind"),
    conditions: document.querySelector(".conditions"),
    spinner: document.querySelector(".spinner")
  };

export default function fetchWeather(query) {
    fetch(baseUrl2 + curentWeather + requestParam + `&q=${query}`)
    .then(response => response.json())
    .then(weather => {
      console.log(weather);
      // let jsonObject = weather;
      refs.weatherSection.classList.remove("is-hidden");
        refs.city.textContent = weather.location.name;
        refs.icon.src = "https:" + weather.current.condition.icon;
        refs.temp.innerHTML = weather.current.temp_c + "C";
        refs.humidity.textContent = weather.current.humidity + "%";
        refs.wind.textContent = weather.current.wind_kph + "km/h";
        refs.conditions.textContent = weather.current.condition.text;
      });
  }
  