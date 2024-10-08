import { resetScaleValue } from './scale.js';
import { resetEffect } from './effects.js';
import { handleFormSuccess, handleShowErrorForm } from './messages.js';
import { sendData } from './api.js';
import { pristine } from './valid.js';
import { uploadPhoto } from './upload-images.js';
import { hideBigPicture } from './full-size.js';
import { isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__descriptions');
const submitButton = form.querySelector('.img-upload__submit');
const SubmitButtonText = {
  IDLE: 'ОПУБЛИКОВАТЬ',
  SENDING: 'ПУБЛИКУЮ...'
};
const listenEscKeydown = () => document.addEventListener('keydown', onEscKeydown);

const showModal = () =>{
  resetScaleValue();
  resetEffect();
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  listenEscKeydown();
  uploadPhoto();
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
document.activeElement === commentField;

function onEscKeydown(evt) {
  const hasFocus = evt.target.matches('.text__hashtags:focus') || evt.target.matches('textarea.text__description:focus');
  if (isEscapeKey(evt) && !hasFocus) {
    evt.preventDefault();
    hideModal();
    hideBigPicture();
  }
}

function hideModal() {
  form.reset();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
}

function handleKeydownHideModal(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}
const handleClickHideModal = () =>{
  hideModal();
};

const handleChangeInputFile = () =>{
  showModal();
};

const handleFormSubmit = (evt) =>{
  evt.preventDefault();
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUploadFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .then(() => {
          pristine.reset();
          hideModal();
          handleFormSuccess();
        })
        .catch(handleShowErrorForm)
        .finally(unblockSubmitButton);
    }
  });
};

form.reset();
pristine.reset();

fileField.addEventListener('change', handleChangeInputFile);
cancelButton.addEventListener('click',handleClickHideModal);
form.addEventListener('submit', handleFormSubmit);

export {setUploadFormSubmit, handleKeydownHideModal, hideModal, isEscapeKey, onEscKeydown, listenEscKeydown};
