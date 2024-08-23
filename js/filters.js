const Filters = {
  DEFAULT: 0,
  RANDOM: 1,
  DISCUSSED: 2
};

const FILTER_BUTTONS = [
  document.querySelector('#filter-default'),
  document.querySelector('#filter-random'),
  document.querySelector('#filter-discussed')
];

const container = document.querySelector('.img-filters');

let currentFilter = Filters.DEFAULT;

function setDefaultClick(cb) {
  FILTER_BUTTONS[Filters.DEFAULT].addEventListener('click', () => {
    FILTER_BUTTONS[currentFilter].classList.remove('img-filters__button--active');
    currentFilter = Filters.DEFAULT;
    FILTER_BUTTONS[currentFilter].classList.add('img-filters__button--active');
    cb();
  });
}

function setRandomClick(cb) {
  FILTER_BUTTONS[Filters.RANDOM].addEventListener('click', () => {
    FILTER_BUTTONS[currentFilter].classList.remove('img-filters__button--active');
    currentFilter = Filters.RANDOM;
    FILTER_BUTTONS[currentFilter].classList.add('img-filters__button--active');
    cb();
  });
}

function setDiscussedClick(cb) {
  FILTER_BUTTONS[Filters.DISCUSSED].addEventListener('click', () => {
    FILTER_BUTTONS[currentFilter].classList.remove('img-filters__button--active');
    currentFilter = Filters.DISCUSSED;
    FILTER_BUTTONS[currentFilter].classList.add('img-filters__button--active');
    cb();
  });
}

FILTER_BUTTONS.forEach((btn) => btn.classList.remove('img-filters__button--active'));
FILTER_BUTTONS[currentFilter].classList.add('img-filters__button--active');

container.classList.remove('img-filters--inactive');

export { setDefaultClick, setRandomClick, setDiscussedClick };
