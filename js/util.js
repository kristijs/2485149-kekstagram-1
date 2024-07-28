import { hideModal } from './form.js';
import { hideBigPicture } from './full-size.js';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () =>{
  let lastGeneratedId = 0;

  return () =>{
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const onEscKeydown = (evt) => {
  const inputFocus = evt.target.matches('input.text__hashtags:focus') || evt.target.matches('textarea.text__description:focus');
  if (isEscapeKey(evt) && !inputFocus) {
    evt.preventDefault();
    hideModal();
    hideBigPicture();
  }
};
// const showAlert = (message) => {
//   const alertContainer = document.createElement('div');
//   alertContainer.style.zIndex = '100';
//   alertContainer.style.position = 'absolute';
//   alertContainer.style.margin = 'auto 0';
//   alertContainer.style.left = '30%';
//   alertContainer.style.right = '30%';
//   alertContainer.style.top = '10px';
//   alertContainer.style.padding = '5px 10px';
//   alertContainer.style.fontSize = '16px';
//   alertContainer.style.textAlign = 'center';
//   alertContainer.style.backgroundColor = 'rgba(255, 77, 77, 0.1)';
//   alertContainer.style.borderRadius = '10px';
//   alertContainer.style.textTransform = 'none';

//   alertContainer.textContent = message;

//   document.body.append(alertContainer);

//   setTimeout(() => {
//     alertContainer.remove();
//   }, ALERT_SHOW_TIME);
// };


export {getRandomInteger, getRandomArrayElement,createIdGenerator, isEscapeKey,onEscKeydown};
