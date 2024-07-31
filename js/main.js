import { setDefaultClick, setRandomClick, setDiscussedClick } from './filters.js';
import { renderDiscussed, renderGallery, renderRandom } from './gallery.js';
import './valid.js';
import './effects.js';
import { getData } from './api.js';
import { onErrorDataForm } from './messages.js';
import { hideModal, setUploadFormSubmit } from './form.js';
import { debounce } from './util.js';

getData()
  .then((pictures) => {
    renderGallery(pictures);
    setDefaultClick(debounce(() => renderGallery(pictures)));
    setRandomClick(debounce(() => renderRandom(pictures)));
    setDiscussedClick(debounce(() => renderDiscussed(pictures)));
  })
  .catch(onErrorDataForm);

setUploadFormSubmit(hideModal);
