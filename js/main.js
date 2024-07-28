import { getPictures } from './data.js';
import {renderPictureDetails} from './full-size.js';
import { renderGallery } from './gallery.js';
import './valid.js';
import './effects.js';
import { getData } from './api.js';
import { onErrorDataForm } from './messages.js';
import { hideModal, setUploadFormSubmit } from './form.js';


const SIMILAR_PICTURE_COUNT = 25;

renderGallery(getPictures());

getData()
  .then((pictures) => {
    renderPictureDetails(pictures.slice(0, SIMILAR_PICTURE_COUNT));
  })
  .catch(() => {
    onErrorDataForm();
  });

setUploadFormSubmit(hideModal);
