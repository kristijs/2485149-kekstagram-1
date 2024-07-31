import { renderGallery } from './gallery.js';
import './valid.js';
import './effects.js';
import { getData } from './api.js';
import { onErrorDataForm } from './messages.js';
import { hideModal, setUploadFormSubmit } from './form.js';


getData()
  .then(renderGallery)
  .catch(onErrorDataForm);

setUploadFormSubmit(hideModal);
