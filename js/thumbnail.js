const thumbnailTemplate = document
  .querySelector('#picture')
  .contetnt.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = ({ comments, description, likes, url}) =>{
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture_img').src = url;
  thumbnail.querySelector('.picture_img').alt = description;
  thumbnail.querySelector('.picture_likes').textContent = likes;
  thumbnail.querySelector('.picture_comments').textContent = comments.length;

  return thumbnail;

};

const renderThumbnails = (pictutres) => {
  const fragment = document.createDocumentFragment();
  pictutres.forEach((picture) =>{
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export { renderThumbnails };
