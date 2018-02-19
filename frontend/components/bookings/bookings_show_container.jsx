import { connect } from 'react-redux';
import BookingsShow from './bookings_show';
import { fetchBookings } from '../../actions/booking_actions';

const mapStateToProps = (state) => {
  debugger
  return {
    bookings: Object.values(state.bookings)
  };
  debugger
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookings: (user_id) => dispatch(fetchBookings(user_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingsShow);
