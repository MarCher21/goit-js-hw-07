import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const galleryMarkup = createMarkupGalleryItems(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createMarkupGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryList.addEventListener("click", openModal);

function openModal(e) {
  e.preventDefault();

  if (e.target.tagName !== "IMG" && !document.querySelector(".basicLightbox"))  {
    return;
  }

  const image = e.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    ` <img src="${image}" width = "800" height = "600">`
  );
  instance.show();

  document.addEventListener("keydown", closeModal);

  function closeModal(e) {
    if (e.code === "Escape") {
      galleryList.removeEventListener("keydown", closeModal);
      instance.close();
    }
  }
}
console.log(galleryItems);
