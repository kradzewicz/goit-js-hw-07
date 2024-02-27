import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

const galleryPictures = galleryItems.map((item) => {
  const galleryItem = document.createElement("li");
  // galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__item");
  galleryLink.href = item.original;

  const galleryPicture = document.createElement("img");
  galleryPicture.classList.add("gallery__image");
  galleryPicture.src = item.preview;
  galleryPicture.alt = item.description;
  galleryPicture.title = item.description;

  galleryBox.appendChild(galleryItem);
  galleryItem.appendChild(galleryLink);
  galleryLink.appendChild(galleryPicture);
});

const galleryShow = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});

console.log(galleryItems);
