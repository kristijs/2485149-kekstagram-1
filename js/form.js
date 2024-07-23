const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__descriptions');


const showModal = () =>{
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () =>{
  form.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
document.activeElement === commentField;

function onDocumentKeydown(evt){
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}
const onCancelButtonClick = () =>{
  hideModal();
};

const onFileInputChange = () =>{
  showModal();
};

const onFormSubmit = (evt) =>{
  evt.preventDefault();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click',onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);

export {form};
