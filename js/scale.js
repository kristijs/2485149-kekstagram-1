const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

let scaleValue = DEFAULT_SCALE;

const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const form = document.querySelector('#upload-select-image');
const changeInputElement = form.querySelector('.scale__control--value');
const imageElement = form.querySelector('img');


const changeScaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  changeInputElement.value = `${value}%`;
};

const onSmallerButtonClick = () =>{
  const currentValue = parseInt(changeInputElement.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if(newValue < MIN_SCALE){
    newValue = MIN_SCALE;
  }
  changeScaleImage(newValue);
};

const onBiggerButtonClick = () =>{
  const currentValue = parseInt(changeInputElement.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if(newValue > MAX_SCALE){
    newValue = MAX_SCALE;
  }
  changeScaleImage(newValue);
};

const resetScaleValue = () =>{
  scaleValue = DEFAULT_SCALE;
  changeScaleImage(scaleValue);
};

smallerButtonElement.addEventListener('click', onSmallerButtonClick);
biggerButtonElement.addEventListener('click', onBiggerButtonClick);

export {resetScaleValue};
