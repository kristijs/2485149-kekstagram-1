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


const isEscapeKey = (evt) => evt.key === 'Escape';

const onEscKeydown = (evt) => {
  const inputFocus = evt.target.matches('.text__hashtags:focus') || evt.target.matches('textarea.text__description:focus');
  if (isEscapeKey(evt) && !inputFocus) {
    evt.preventDefault();
    hideModal();
    hideBigPicture();
  }
};
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomInteger, getRandomArrayElement,isEscapeKey,onEscKeydown, debounce};
