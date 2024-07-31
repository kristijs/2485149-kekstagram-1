// import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';

// const PICTURE_COUNT = 25;
// const LIKE_MIN_COUNT = 15;
// const LIKE_MAX_COUNT = 200;
// const AVATAR_COUNT = 6;
// const COMMENT_COUNT = 13;
// const COMMENT_LINES = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
// ];
// const DESCRIPTIONS = [
//   'Надо любить жизнь больше, чем смысл жизни.',
//   'Жизнь — это то, что с тобой происходит, пока ты строишь планы.',
//   '80% успеха — это появиться в нужном месте в нужное время',
//   'Morning coffee, because anything else is worthless...',
//   'Follow your heart',
//   'Aspire to inspire!',
//   'Live without regrets.',
// ];
// const NAMES = [
//   'Виктор',
//   'Дмитрий',
//   'Кирилл',
//   'Яша',
//   'Ольга',
//   'Юля',
//   'Ангелина',
// ];

const FILTER_CONFIG = {
  none: {
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },

  chrome: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    unit: '',
  },

  sepia: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    unit: '',
  },

  marvin: {
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    unit: '%',
  },

  phobos: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    unit: 'px',
  },

  heat: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    unit: '',
  },
};
// const generateCommentId = createIdGenerator();

// const createMessage = () =>
//   Array.from({ length:getRandomInteger(1, 2)},() =>
//     getRandomArrayElement(COMMENT_LINES)
//   ).join('');

// const createComment = () => ({

//   id: generateCommentId(),
//   avatar: `img/avatar-${getRandomInteger(1,AVATAR_COUNT)}.svg`,
//   message: createMessage(),
//   name: getRandomArrayElement(NAMES),
// });

// const getPicture = (index) => ({
//   id: index,
//   url:`photos/${index}.jpg`,
//   description: getRandomArrayElement(DESCRIPTIONS),
//   likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
//   comments: Array.from({length:getRandomInteger(0,COMMENT_COUNT)}, createComment),

// });
// const getPictures = () =>
//   Array.from({ length: PICTURE_COUNT},(_, pictureIndex) =>
//     getPicture(pictureIndex + 1)
//   );

export { FILTER_CONFIG };
