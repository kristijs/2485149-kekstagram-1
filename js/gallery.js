import { renderThumbnails } from './thumbnail.js';
import { showBigPicture } from './full-size.js';

const container = document.querySelector('.pictures');
const NUMBER_RANDOM_PICTURES = 10;
let allPictures = [];

const listenerForThumbnail = (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (!thumbnail) {
    return;
  }
  evt.preventDefault();
  const picture = allPictures.find(
    (item) => item.id === +thumbnail.dataset.thumbnailId
  );
  showBigPicture(picture);
};
const renderGallery = (pictures) => {
  allPictures = pictures;
  container.removeEventListener('click', listenerForThumbnail);
  container.addEventListener('click', listenerForThumbnail);

  renderThumbnails(pictures, container);
};

function renderRandom(pictures) {
  renderGallery(
    [...pictures]
      .sort(() => (Math.random() - 0.5))
      .slice(0, NUMBER_RANDOM_PICTURES)
  );
}

function renderDiscussed(pictures) {
  renderGallery(
    [...pictures]
      .sort((a, b) => (b.comments.length - a.comments.length))
  );
}

export { renderGallery, renderRandom, renderDiscussed };

