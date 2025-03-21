import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const galleryItem = document.createElement('a');
  galleryItem.href = item.original; 
  galleryItem.classList.add('gallery__item'); 

  const galleryImage = document.createElement('img');
  galleryImage.src = item.preview; 
  galleryImage.alt = item.description; 
  galleryImage.classList.add('gallery__image'); 

  galleryItem.appendChild(galleryImage);
  galleryContainer.appendChild(galleryItem); // 
});

// SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  overlayOpacity: 0.9,
});