import { isEscapeKey, onEscKeydown } from './util.js';

const body = document.querySelector('body');
const succesMessage = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorMessage = document.querySelector('#error')
  .content
  .querySelector('.error');

const errorDataMessage = document.querySelector('#data-error')
  .content
  .querySelector('.data-error');

const onEscKeydownError = (evt) => {
  if (isEscapeKey(evt)) {
    onShowAlertClose();
  }
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
  document.addEventListener('keydown', onEscKeydown);
}

const onMessageClose = (evt) => {
  if (!evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    onShowAlertClose();
  }
};

const onSuccessForm = () => {
  const cloneSuccessElement = succesMessage.cloneNode(true);
  const successButtonElement = cloneSuccessElement.querySelector('.success__button');
  body.append(cloneSuccessElement);

  document.addEventListener('click', onMessageClose);
  document.addEventListener('keydown', onEscKeydownError);
  successButtonElement.addEventListener('click', onShowAlertClose);
};

const onErrorForm = () => {
  const cloneErrorElement = errorMessage.cloneNode(true);
  const errorButtonElement = cloneErrorElement.querySelector('.error__button');
  body.append(cloneErrorElement);

  document.addEventListener('click', onMessageClose);
  document.addEventListener('keydown', onEscKeydownError);
  errorButtonElement.addEventListener('click', onShowAlertClose);
  document.removeEventListener('keydown', onEscKeydown);
};

const onErrorDataForm = () => {
  const cloneErrorDataElement = errorDataMessage.cloneNode(true);
  body.append(cloneErrorDataElement);
};

export { onSuccessForm, onErrorForm, onErrorDataForm };
