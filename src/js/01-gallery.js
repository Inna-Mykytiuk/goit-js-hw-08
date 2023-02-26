// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// Пошук  порожнього списку для майбутньої галереї
const gallery = document.querySelector('.gallery');

// Створення функції для розмітки галереї

const makeGalleryMarkup = image => {
  const { preview, original, description } = image;

  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join('');

//  Додавання розмітки у список
gallery.insertAdjacentHTML('afterbegin', makeGallery);

// Створення самого лайтбоксу та додавання відображення напису з alt
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
// Change code below this line

console.log(galleryItems);
