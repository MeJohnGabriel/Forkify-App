import View from './view';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; //Parcel 2

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a recipe for later!';
  _succesMessage = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  //All bookmarks
  _generateMarkup() {
    return this._data
      .map(bookmarks => previewView.render(bookmarks, false))
      .join('');
  }
}

export default new BookmarksView();
