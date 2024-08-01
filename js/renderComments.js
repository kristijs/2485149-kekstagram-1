const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const counterElement = bigPicture.querySelector('.social__comment-counter');
const commentShownCount = bigPicture.querySelector('.comments-count');
const commentElementTemplate = document.querySelector('.social__comment');
const COMMENTS_PER_PORTION = 5;
const STEP = 5;
let counter = COMMENTS_PER_PORTION;
let totalValue = 5;
let commentsShown = 0;
let commentsElements = [];
let comments = [];

const hideLoader = () =>{
  commentsLoader.classList.add('hidden');
};
// срабатывает при клике на Загрузить еще
const showMoreComments = () => {
  const newCounterValue = counter + STEP;
  if(newCounterValue > totalValue) {
    counter = totalValue;
    hideLoader();
  } else {
    counter = newCounterValue;

  }
  counterElement.textContent = counter;
  for (let i = counter - STEP; i < counter; i++){
    commentsElements[i].classList.remove('hidden');
  }
};

const totalCountComments = () => {
  const newCounterValue = counter;
  counterElement.innerHTML = newCounterValue;
  commentShownCount.innerHTML = comments.length;
};

const renderComments = () => {
  commentsList.innerHTML = '';
  totalValue = comments.length;
  counter = COMMENTS_PER_PORTION > totalValue ? totalValue : COMMENTS_PER_PORTION;
  const fragment = document.createDocumentFragment();
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
  commentsList.appendChild(fragment);
};

const initComments = (data) =>{
  comments = data;
  commentsShown += COMMENTS_PER_PORTION;

  if(commentsShown >= comments.length){
    hideLoader();
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const resetComments = () =>{
  commentsShown = 0;
};
commentsLoader.addEventListener ('click', showMoreComments);

export { renderComments, initComments, resetComments, totalCountComments };
