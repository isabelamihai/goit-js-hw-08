import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Add imports above this line

// Change code below this line
const gallery = document.querySelectorAll(".gallery a");

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true, // pentru a arăta titlurile imaginilor
  captionSelector: "img", // selectorul pentru a extrage titlul din imagine
  captionType: "attr", // specificăm tipul de caption (de exemplu, "alt" text)
  captionsData: "alt", // folosim textul din atributul "alt" al imaginii
  captionPosition: "bottom", // poziția descrierii
  overlayOpacity: 0.9, // opacitatea overlay-ului
});



