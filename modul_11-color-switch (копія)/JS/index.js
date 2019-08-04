// import '../stiles.css';
const button = document.querySelector(".button");
const buttonStart = document.querySelector(".button-start");
const buttonStop = document.querySelector(".button-stop");
let body = document.querySelector("body");
const div = document.querySelector(".content");

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = () => {
  return Math.floor(Math.random() * colors.length);
};
let idInterval;
buttonStart.onclick = function() {
  idInterval = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval()];
    button.style.backgroundColor = colors[randomIntegerFromInterval()];
    buttonStop.style.backgroundColor = colors[randomIntegerFromInterval()];
    div.classList.add("div");
    buttonStop.classList.remove("div");
    buttonStart.disabled = true;
    buttonStop.textContent="STOP IT NOW";
  }, 1000);
};
buttonStop.onclick = function() {
  buttonStart.disabled = false;
  div.classList.remove("div");
  buttonStop.classList.add("div");
  buttonStop.textContent=" ";
  clearInterval(idInterval);
};
