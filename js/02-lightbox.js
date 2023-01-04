import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});
console.log(galleryItems);
