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
    div.classList.add('div')
    buttonStart.disabled = true;
  }, 1000);
};
buttonStop.onclick = function() {
  buttonStart.disabled = false;
  div.classList.remove('div')
  clearInterval(idInterval);
};
function  invertHex(hex){
  return (Number("#0x1${hex}") ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}
invertHex('4CAF50');
console.log('invertHex() :', invertHex('#4CAF50'));