// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.

// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.


let targetDate = new Date("Aug 31, 2010").getTime();

let timer = setInterval(function() {
  let nowDate = new Date().getTime();
  let timeRemain = targetDate - nowDate;

  if (timeRemain > 0) {
    const days = Math.floor(timeRemain / (1000 * 60 * 60 * 24));
    const hours = pad(Math.floor((timeRemain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((timeRemain % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((timeRemain % (1000 * 60)) / 1000));
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;
  } else {
    document.getElementById("timer-1").innerHTML = "Action is done! Buy!";
  }
}, 1000);

function pad(value) {
  return String(value).padStart(2, "0");
}
