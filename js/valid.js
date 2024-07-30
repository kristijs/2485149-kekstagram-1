const MAX_HASHTAG_COUNT = 5;
const MAX_COMMENTS_LENGTH = 140;
const TAG_ERROR_TEXT = 'Некорректно записаны хэштеги';
const form = document.querySelector('.img-upload__form');
const hashtags = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const regularHashtag = /^#[a-zа-яё0-9]{1,19}$/i;
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper',
});
const isValidTag = (tag) => regularHashtag.test(tag);
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;
const hasUniqueTags = (tags) =>{
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};
const validateTags = (value) =>{
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};
const checkDescriptionLength = () => comment.value.length <= MAX_COMMENTS_LENGTH;// максимальная длинна комментария

pristine.addValidator(
  hashtags,
  validateTags,
  TAG_ERROR_TEXT
);

pristine.addValidator(
  comment,
  checkDescriptionLength,
  `Длина комментария не может превышать ${MAX_COMMENTS_LENGTH} символов`
);
