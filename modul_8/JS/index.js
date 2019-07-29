import galleryItems from "./gallery-items.js";

const button = document.querySelector(".button");
const imgList = document.querySelector(".gallery");

const imgItem = document.createElement("li");
imgItem.classList.add("gallery__item");
const imgLink = document.createElement("a");
imgLink.classList.add("gallery__link");
const img = document.createElement("img");
img.classList.add("gallery__image");
const span = document.createElement("span");
span.classList.add("gallery__icon");
const i = document.createElement("i");
i.classList.add("material-icons");

galleryItems.forEach({galleryItems =>
  
});



// Необходимо динамически создать элементы галереи по указанному шаблону.

// При клике по элементу галереи должно открываться модальное окно с полноразмерным изображением. Обязательно используй делегирование событий и слушай клики на элементе ul.gallery.

// Модальное окно должно закрываться по клику на кнопку button[data-action="close-modal"], по клику на div.overlay или по нажатию ESC.

// {/* <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />

//     <span class="gallery__icon">
//       <i class="material-icons">zoom_out_map</i>
//     </span>
//   </a>
// </li> */}
