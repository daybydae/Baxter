import * as BookingApiUtil from '../util/booking_api_util';
import { RECEIVE_ERRORS, receiveErrors } from './sitter_actions';

export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";

export const receiveBookings = (bookings) => {
  return {
    type: RECEIVE_ALL_BOOKINGS,
    bookings
  };
};

export const receiveBooking = (booking) => {
  return {
    type: RECEIVE_BOOKING,
    booking
  };
};

export const removeBooking = (bookingId) => {
  return {
    type: REMOVE_BOOKING,
    bookingId
  };
};

export const fetchBookings = () => dispatch => {
  return BookingApiUtil.fetchBookings().then( bookings => dispatch(receiveBookings(bookings)), errors => dispatch(receiveErrors(errors)));
};

export const fetchBooking = () => dispatch => {
  return BookingApiUtil.fetchBooking().then( booking => dispatch(receiveBooking(booking)), errors => dispatch(receiveErrors(errors)));
};

export const createBooking = (booking) => dispatch => {
  return BookingApiUtil.createBooking(booking).then( booking => dispatch(receiveBooking(booking)), errors => dispatch(receiveErrors(errors)));
};

export const deleteBooking = (bookingId) => dispatch => {
  return BookingApiUtil.deleteBooking(bookingId).then( () => dispatch(removeBooking(bookingId)), errors => dispatch(receiveErrors(errors)));
};
