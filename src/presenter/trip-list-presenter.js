import TripList from '../view/trip-list-view.js';
import EditTripForm from '../view/event-edit-trip-form-view.js';
import TripItem from '../view/trip-item-view.js';
import {render} from '../render.js';


export default class TripListPresenter {
  tripListComponent = new TripList();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.tripListComponent, this.boardContainer);
    render(new EditTripForm(), this.tripListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripItem(), this.tripListComponent.getElement());
    }
  }

}
