import { renderThumbnails } from './thumbnail.js';
import { showBigPicture } from './full-size.js';

const container = document.querySelector('.pictures');
const NUMBER_RANDOM_PICTURES = 10;

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }
    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );

    showBigPicture(picture);
  });

  renderThumbnails(pictures, container);
};

function renderRandom(pictures) {
  renderGallery(
    pictures.slice()
      .sort(() => (Math.random() - 0.5))
      .slice(0, NUMBER_RANDOM_PICTURES)
  );
}

function renderDiscussed(pictures) {
  renderGallery(
    pictures.slice()
      .sort((a, b) => (b.comments.length - a.comments.length))
  );
}

export { renderGallery, renderRandom, renderDiscussed };

