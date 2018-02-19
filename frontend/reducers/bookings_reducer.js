import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions';
import { merge } from 'lodash';

const bookingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  debugger
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return merge({}, oldState, {[action.booking.id]: action.booking});
    case REMOVE_BOOKING:
      let newState = merge({}, oldState);
      delete newState[action.booking.id];
      return newState;
    default:
      return oldState;
  }
};

export default bookingsReducer;
