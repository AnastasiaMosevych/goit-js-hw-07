import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    let imageSrc = event.target.dataset.source;
    if (imageSrc !== undefined) {
        const instance = basicLightbox.create(`
        <div class="modal">
            <img src="${imageSrc}"
                width="1280" height="855" />
        </div>
    `, {
            onShow: (instance) => {
            document.addEventListener('keydown', onKeyDown);

            function onKeyDown(event) {
                if (event.key === 'Escape') {
                    instance.close();
                }
            }
            }
        });

    instance.show();
    };``
};

