// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const pictureLink = document.querySelector('.gallery__link');

gallery.style.listStyle = 'none';

const markup = galleryItems
  .map(
    item =>
      `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></img></a></li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

// lightbox

let modalGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
