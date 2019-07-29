import galleryItems from "./gallery-items.js";

const imgList = document.querySelector("ul");
const lightboxButton = document.querySelector(".lightbox__button");
const lightboxImage = document.querySelector(".lightbox__image");

function createGalery(galleryItems) {
  let fragment = document.createDocumentFragment();
  galleryItems.forEach(elem => {
    const imgItem = document.createElement("li");
    imgItem.classList.add("gallery__item");
    const imgLink = document.createElement("a");
    imgLink.classList.add("gallery__link");
    imgLink.href = elem.original;
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.setAttribute("src", elem.preview);
    img.setAttribute("data-source", elem.original);
    img.setAttribute("alt", elem.description);
    const span = document.createElement("span");
    span.classList.add("gallery__icon");
    const i = document.createElement("i");
    i.classList.add("material-icons");
    i.textContent = "zoom_out_map";

    span.append(i);
    imgLink.append(img, span);
    imgItem.append(imgLink);
    fragment.append(imgItem);
  });
  imgList.append(fragment);
}

createGalery(galleryItems);

imgList.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  lightboxButton.addEventListener("click", closeModal);
  window.addEventListener("keydown", handleKeyPress);

  const lightbox = document.querySelector(".lightbox");
  lightbox.addEventListener("click", handleBackdropClick);
  lightbox.classList.add("is-open");

  function bigImageGet() {
    lightboxImage.src = event.target.getAttribute(["data-source"]);
    lightboxImage.alt = event.target.getAttribute(["alt"]);
  }
  bigImageGet();
}

function closeModal(event) {
  const lightbox = document.querySelector(".lightbox");
  lightbox.classList.remove("is-open");
  window.removeEventListener("keydown", handleKeyPress);
  lightboxButton.removeEventListener("click", handleKeyPress);
  lightbox.removeEventListener("click", handleBackdropClick);
}

function handleBackdropClick(event) {
  if (event.target === lightboxImage || event.target === lightboxButton) {
    return;
  }
  closeModal();
}
function handleKeyPress(event) {
  if (event.code !== "Escape") {
    return;
  }
  closeModal();
}
