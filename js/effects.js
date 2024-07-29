import { FILTER_CONFIG } from './data.js';

const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');
const sliderElementContainer = document.querySelector('.img-upload__effect-level');
const specialElements = document.querySelectorAll('.effects__radio');
const specialElementsArray = Array.from(specialElements);
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const resetEffect = () => {
  imgUploadPreview.className = '';
  imgUploadPreview.classList.add('effects__preview--none');
  sliderElementContainer.classList.add('hidden');
};

const setFilter = (filter) => {
  sliderElementContainer.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions(filter.options);
  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreview.style.filter = `${filter.style}(${values[handle]}${filter.unit})`;
    sliderElementValue.value = values[handle];
  });
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  sliderElementValue.value = sliderElement.noUiSlider.get();
});

specialElementsArray.forEach((element) => {
  element.addEventListener('change', () => {
    imgUploadPreview.className = '';
    imgUploadPreview.classList.add(`effects__preview--${element.value}`);
    switch (element.value) {
      case 'none':
        sliderElementContainer.classList.add('hidden');
        imgUploadPreview.style.filter = 'none';
        break;
      case 'chrome':
        setFilter(FILTER_CONFIG.chrome);
        break;
      case 'sepia':
        setFilter(FILTER_CONFIG.sepia);
        break;
      case 'marvin':
        setFilter(FILTER_CONFIG.marvin);
        break;
      case 'phobos':
        setFilter(FILTER_CONFIG.phobos);
        break;
      case 'heat':
        setFilter(FILTER_CONFIG.heat);
        break;
    }
  });
});

export { resetEffect };
