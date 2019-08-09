import "./styles.css";
import "basiclightbox/dist/basicLightbox.min.css";
import * as basicLightbox from "basiclightbox";
import "pnotify/src/PNotifyBrightTheme.css";
import servisePictures from "./servisePictures";
import picturesTemplate from "./templates/pictures.hbs";
import PNotify from "pnotify/dist/es/PNotify.js";

const refs = {
  inputForm: document.querySelector("#search-form"),
  pictureCard: document.querySelector(".photo-card"),
  picture: document.querySelector(".picture"),
  paragraph: document.querySelector(".stats-item"),
  iconsMaterial: document.querySelector(".material-icons"),
  body: document.querySelector(".body"),
  gallery: document.querySelector(".gallery"),
  loadMoreButton: document.querySelector(".load_more"),
  goUpButoon: document.querySelector(".go_up"),
  input: document.querySelector(".input"),
  pictureItem: document.querySelector(".pict_item"),
  unvisible: document.querySelector(".unvisible")
};
refs.gallery.addEventListener("click", clickUl);
refs.inputForm.addEventListener("submit", serchPicturesInput);
refs.loadMoreButton.addEventListener("click", loadMoreButtonHendler);
refs.goUpButoon.addEventListener("click", goUpButtonHendler);

function clickUl(e) {
  if (e.target.nodeName === "IMG")
    basicLightbox
      .create(
        `
<img src="${e.target.dataset.sourse}" alt="full view" />
`
      )
      .show();
}

function serchPicturesInput(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;
  const inputValue = input.value;

  clearList();
  servisePictures.resetPage();

  servisePictures.serchQuery = inputValue;
  refs.loadMoreButton.classList.remove("unvisible");
  refs.goUpButoon.classList.remove("unvisible");
  servisePictures.fetchPictures().then(hits => {
    const markup = buildListPictures(hits);
    insertListItems(markup);
    PNotify.success({
      text: "Success! To see more, press 'Load more' ;-)",
      stack: {
        dir1: "down",
        dir2: "right", //  from the top left corner.
        firstpos1: 600,
        firstpos2: 600 // 90px from the top, 90px from the left.
      }
    });
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
  });
  input.value = "";
  
}
function goUpButtonHendler() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function insertListItems(items) {
  refs.gallery.insertAdjacentHTML("beforeend", items);
}

function loadMoreButtonHendler() {
  servisePictures.fetchPictures().then(hits => {
    const markup = buildListPictures(hits);
    insertListItems(markup);
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
  });
}
function buildListPictures(items) {
  return picturesTemplate(items);
}
function clearList() {
  refs.gallery.innerHTML = "";
}
