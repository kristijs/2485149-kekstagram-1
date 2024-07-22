// 3.1. После заполнения всех данных, при нажатии на кнопку «Отправить», все данные из формы, включая изображения, с помощью AJAX-запроса отправляются на сервер https://28.javascript.htmlacademy.pro/kekstagram методом POST с типом multipart/form-data. На время выполнения запроса к серверу кнопка «Отправить» блокируется.

// 3.2. Страница реагирует на неправильно введённые значения в форму. Если данные, введённые в форму, не соответствуют ограничениям, указанным в пунктах 2.3 и 2.4, форму невозможно отправить на сервер. При попытке отправить форму с неправильными данными, отправки не происходит, а пользователю показываются ошибки для неверно заполненных полей (для проверки данных используется сторонняя библиотека Pristine).

// 3.3. При успешной отправке формы форма редактирования изображения закрывается, все данные, введённые в форму, и контрол фильтра приходят в исходное состояние:

//     масштаб возвращается к 100%;
//     эффект сбрасывается на «Оригинал»;
//     поля для ввода хэш-тегов и комментария очищаются;
//     поле загрузки фотографии, стилизованное под букву «О» в логотипе, очищается.

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('.body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__descriptions');


const showModal = () =>{
  overlay.classList.remove('.hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () =>{
  form.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
document.activeElement === commentField;

function onDocumentKeydown(evt){
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}
const onCancelButtonClick = () =>{
  hideModal();
};

const onFileInputChange = () =>{
  showModal();
};

const onFormSubmit = (evt) =>{
  evt.preventDefault();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click',onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);

export {form,showModal, hideModal};
