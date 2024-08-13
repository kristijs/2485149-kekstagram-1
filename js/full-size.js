import { initComments, renderComments, resetComments, showCountComments} from './render-comments.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');


const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  resetComments();
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onCancelButtonClick = () => {
  hideBigPicture();
};

const renderPictureDetails = ({url, likes, description}) =>{
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape'){
    hideBigPicture();
  }
};

const showBigPicture = (picture) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  renderPictureDetails(picture);
  initComments(picture.comments);
  renderComments(picture.comments);
  showCountComments();
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture, hideBigPicture , renderPictureDetails};
