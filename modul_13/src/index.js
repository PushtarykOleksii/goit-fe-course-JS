import "./styles.css";
import "basiclightbox/dist/basiclightbox.min.css";
import * as basicLightbox from "basiclightbox";
import servisePictures from "./servisePictures";
import picturesTemplate from "./templates/pictures.hbs";
import PNotify from "pnotify/dist/es/PNotify";

const refs = {
  inputForm: document.querySelector("#search-form"),
  pictureCard: document.querySelector(".photo-card"),
  picture: document.querySelector(".picture"),
  paragraph: document.querySelector(".stats-item"),
  iconsMaterial: document.querySelector(".material-icons"),
  body: document.querySelector(".body"),
  gallery: document.querySelector(".gallery"),
  loadMoreButton: document.querySelector(".load_more"),
  goUpButoon: document.querySelector(".go_up")
};

refs.inputForm.addEventListener("submit", serchPicturesInput);
refs.loadMoreButton.addEventListener("click", loadMoreButtonHendler);
refs.goUpButoon.addEventListener("click", goUpButtonHendler);
function serchPicturesInput(e) {
  e.preventDefault();

  const inputValue = e.currentTarget.elements.query.value;

  servisePictures.resetPage();

  servisePictures.serchQuery = inputValue;

  servisePictures.fetchPictures().then(hits => {
    const markup = buildListPictures(hits);
    insertListItems(markup);
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
  });
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
// function clearList() {
//   refs.gallery.innerHTML = "";
// }
