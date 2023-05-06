import {createElement} from '../render.js';

function createTripInfoTemplate() {
  return (
    '<div class="trip-info__main">\n' +
    '              <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>\n' +
    '\n' +
    '              <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>\n' +
    '            </div>'
  );
}

export default class NewTripInfo {
  getTemplate() {
    return createTripInfoTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
