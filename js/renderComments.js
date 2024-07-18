const bigPicture = document.querySelector('.big-picture');
const commentList = bigPicture.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const counterElement = bigPicture.querySelector('.social__comment-counter');
const loaderElement = bigPicture.querySelector('.social__comments-loader');
const commentElementTemplate = document.querySelector('.social__comment');
const COMMENTS_PER_PORTION = 5;
const STEP = 5;
let counter = COMMENTS_PER_PORTION;
let totalValue = 5;
let commentsShown = 0;
let commentsElements = [];

// срабатывает при клике на Загрузить еще
const showMoreComments = () => {
  const newCounterValue = counter + STEP;
  if(newCounterValue > totalValue) {
    counter = totalValue;
  } else {
    counter = newCounterValue;

  }
  counterElement.textContent = counter;
  for (let i = counter - STEP; i < counter; i++){
    commentsElements[i].classList.remove('hidden');
  }
};

loaderElement.addEventListener ('click', showMoreComments);

const createComment = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.innerHTML =
    '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  comment.classList.add('social__comment');
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

commentsShown += COMMENTS_PER_PORTION;

if(commentsShown >= comments.length){
  commentsLoader.classList.add('hidden');

  commentsShown = comments.length;
} else {
  commentsLoader.classList.remove('hidden');
}
const fragment = document.createDocumentFragment();
for (let i = 0; i < commentsShown; i++) {
  const commentElement = createComment(comments[i]);
  fragment.appendChild(commentElement);
}

const renderComments = () => {
  commentList.innerHTML = '';
  totalValue = comments.length;
  counter = COMMENTS_PER_PORTION > totalValue ? totalValue : COMMENTS_PER_PORTION;
  comments.forEach((comment, index) =>{
    const commentElement = commentElementTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__text').textContent = comment.message;
    if (index >= COMMENTS_PER_PORTION){
      commentElement.classList.add('hidden');
    }
    fragment.appendChild(commentElement);

  });
  commentsElements = [...fragment.childNodes];
  commentList.appendChild(fragment);

};

export {renderComments};
