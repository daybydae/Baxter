import { connect } from 'react-redux';
import BookingsShow from './bookings_show';
import { fetchBookings } from '../../actions/booking_actions';
import { fetchAllSitters } from '../../actions/sitter_actions';

const mapStateToProps = (state) => {

  return {
    bookings: Object.values(state.bookings),
    // sitters: Object.values(state.entities.sitters),
    // user: Object.values(state.entities.sitters),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookings: (user_id) => dispatch(fetchBookings(user_id)),
    fetchAllSitters: () => dispatch(fetchSitters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingsShow);
