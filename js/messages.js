import { onEscKeydown, listenEscKeydown } from './form.js';
import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const successMessage = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorMessage = document.querySelector('#error')
  .content
  .querySelector('.error');

const errorDataMessage = document.querySelector('#data-error')
  .content
  .querySelector('.data-error');

const handleClickCloseAlert = (evt) => {
  if (isEscapeKey(evt)) {
    onShowAlertClose();
  }
};

const handleClickCloseMessage = (evt) => {
  if (!evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    onShowAlertClose();
  }
};

const handleFormSuccess = () => {
  const cloneSuccessElement = successMessage.cloneNode(true);
  const successButtonElement = cloneSuccessElement.querySelector('.success__button');
  body.append(cloneSuccessElement);

  document.addEventListener('click', handleClickCloseMessage);
  document.addEventListener('keydown', handleClickCloseAlert);
  successButtonElement.addEventListener('click', onShowAlertClose);
};

const handleShowErrorForm = () => {
  const cloneErrorElement = errorMessage.cloneNode(true);
  const errorButtonElement = cloneErrorElement.querySelector('.error__button');
  body.append(cloneErrorElement);

  document.addEventListener('click', handleClickCloseMessage);
  document.addEventListener('keydown', handleClickCloseAlert);
  errorButtonElement.addEventListener('click', onShowAlertClose);
  document.removeEventListener('keydown', onEscKeydown);
};

const handleShowErrorData = () => {
  const cloneErrorDataElement = errorDataMessage.cloneNode(true);
  body.append(cloneErrorDataElement);
};

function onShowAlertClose() {
  const successSectionElement = document.querySelector('.success');
  const errorSectionElement = document.querySelector('.error');

  if (successSectionElement) {
    successSectionElement.remove();
  }

  if (errorSectionElement) {
    errorSectionElement.remove();
  }
  listenEscKeydown();
  document.removeEventListener('click', handleClickCloseMessage);
  document.removeEventListener('keydown', handleClickCloseAlert);
}

export { handleFormSuccess, handleShowErrorForm, handleShowErrorData };
