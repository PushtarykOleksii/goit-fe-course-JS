import "./css/styles.css";
import menuData from "./menus.json";
import menuTemplate from "./templates/menu.hbs";
const list = document.querySelector(".menu");
const body = document.querySelector("body");
const checkInput = document.querySelector(".switch__input");

// const setBefor = localStorage.getItem("class");

// if (setBefor === "dark-theme") {
//   body.classList.add("dark-theme");
//   checkInput.checked = true;
// }
body.addEventListener("change", event => {
  if (checkInput.checked) {

    body.classList.add("dark-theme");
    localStorage.setItem("class", "dark-theme");
  } else {
    body.classList.remove("dark-theme");
    localStorage.removeItem("class");
  }
});

buildMenu(menuData);

function buildMenu(menuData) {
  const menu = menuData.map(item => menuTemplate(item)).join("");
  list.insertAdjacentHTML("beforeend", menu);
}
