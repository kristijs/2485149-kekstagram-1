import { FILTERSCONFIG } from './data.js';

const NO_FILTER = FILTERSCONFIG[0];

const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');
const sliderElementConteiner = document.querySelector('.img-upload__effect-level');
const specialElements = document.querySelectorAll('.effects__radio');
const specialElementsArray = Array.from(specialElements);
const imgUploadPreview = document.querySelector('.img-upload__preview img');


noUiSlider.create(sliderElement, {
  range: {
    min: NO_FILTER.min,
    max: NO_FILTER.max,
  },
  start: NO_FILTER.max,
  step: NO_FILTER.step,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  sliderElementValue.value = sliderElement.noUiSlider.get();
});

const defaultEffect = () => {
  imgUploadPreview.className = '';
  imgUploadPreview.classList.add('effects__preview--none');
  sliderElementConteiner.classList.add('hidden');
};

const setFilter = (filter) => {
  sliderElementConteiner.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions(filter.options);
  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreview.style.filter = `${filter.style}(${values[handle]}${filter.unit})`;
    sliderElementValue.value = values[handle];
  });
};

specialElementsArray.forEach((element) => {
  element.addEventListener('change', () => {
    imgUploadPreview.className = '';
    imgUploadPreview.classList.add(`effects__preview--${element.value}`);
    switch (element.value) {
      case 'none':
        sliderElementConteiner.classList.add('hidden');
        imgUploadPreview.style.filter = 'none';
        break;
      case 'chrome':
        setFilter(FILTERSCONFIG.chrome);
        break;
      case 'sepia':
        setFilter(FILTERSCONFIG.sepia);
        break;
      case 'marvin':
        setFilter(FILTERSCONFIG.marvin);
        break;
      case 'phobos':
        setFilter(FILTERSCONFIG.phobos);
        break;
      case 'heat':
        setFilter(FILTERSCONFIG.heat);
        break;
    }
  });
});

export { defaultEffect };
