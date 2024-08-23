import { setDefaultClick, setRandomClick, setDiscussedClick } from './filters.js';
import { renderDiscussed, renderGallery, renderRandom } from './gallery.js';
import './valid.js';
import './effects.js';
import { getData } from './api.js';
import { handleShowErrorData } from './messages.js';
import { hideModal, setUploadFormSubmit } from './form.js';
import { runDebounce } from './util.js';

getData()
  .then((pictures) => {
    renderGallery(pictures);
    setDefaultClick(runDebounce(() => renderGallery(pictures)));
    setRandomClick(runDebounce(() => renderRandom(pictures)));
    setDiscussedClick(runDebounce(() => renderDiscussed(pictures)));
  })
  .catch(handleShowErrorData);

setUploadFormSubmit(hideModal);
