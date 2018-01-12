import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBooking, removeErrors } from '../../actions/booking_actions';
import { fetchSitter } from '../../actions/sitter_actions';
import BookingForm from './booking_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    sitter: state.entities.sitters[ownProps.match.params.sitter_id] || {}
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    createBooking: booking => dispatch(createBooking(booking)),
    fetchSitter: sitterId => dispatch(fetchSitter(sitterId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm));
