import { createElement } from '../render.js';

function createTripRouteTemplate() {
  return `<div class="trip-info__main">
            <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

            <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
          </div>`;
}

export default class TripRouteView {
  #element = null;

  get template() {
    return createTripRouteTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}