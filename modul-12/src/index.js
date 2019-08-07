import "./styles.css";
import 'pnotify/src/PNotifyBrightTheme.css';
import fetchWeather from "./fetchWeather.js";
import getCurrentPosition from "./getGeoPosition.js";
import PNotify from 'pnotify/dist/es/PNotify.js';
const serchForm = document.querySelector(".search-form");

// refs.button.addEventListener("click", findWeatherDetails);
serchForm.addEventListener("submit", handlerFormSubmit);

function handlerFormSubmit(e) {
  e.preventDefault();
  const input = e.currentTarget.elements.city.value;
  console.log("input :", input);
  fetchWeather(input);
}


getCurrentPosition()
  .then(location => {
    const query = `${location.coords.latitude}, ${location.coords.longitude}`;
    fetchWeather(query);
    console.log(location);
    PNotify.success({
        text:  "Hello!",
        stack: {
          dir1: 'down', dir2: 'right', //  from the top left corner.
          firstpos1: 600, firstpos2: 600 // 90px from the top, 90px from the left.
        }
      }
     
    );
  })
  .catch(error => {
    PNotify.error({
        text:  "Нет прав доступа к геопозиции, используйте поиск по имени города.",
        stack: {
          dir1: 'down', dir2: 'right', //  from the top left corner.
          firstpos1: 600, firstpos2: 600 // 90px from the top, 90px from the left.
        }
      }
     
    );
  });
