import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

const galleryPictures = galleryItems.map((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryPicture = document.createElement("img");
  galleryPicture.classList.add("gallery__image");
  galleryPicture.src = item.preview;
  galleryPicture.alt = item.description;
  galleryPicture.dataset.source = item.original;

  galleryBox.appendChild(galleryItem);
  galleryItem.appendChild(galleryLink);
  galleryLink.appendChild(galleryPicture);
});

galleryBox.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  function escapeAction(event) {
    if (event.key === "Escape") {
      galleryShow.close();
    }
  }

  const galleryShow = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: (galleryShow) => {
        document.addEventListener("keydown", escapeAction);
      },
    },
    {
      onClose: (galleryShow) => {
        document.removeEventListener("keydown", escapeAction);
      },
    }
  );

  galleryShow.show();
});

console.log(galleryItems);
