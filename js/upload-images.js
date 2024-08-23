const FILE_TYPES = ['jpeg', 'jpg', 'png'];

const photoUploadButton = document.querySelector('.img-upload__input');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const uploadPhoto = () => {
  const file = photoUploadButton.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const url = URL.createObjectURL(file);
    imgUploadPreview.src = url;
    effectsPreview.forEach((effect) => (effect.style.backgroundImage = `url(${url})`));
  }
};

export { uploadPhoto };
