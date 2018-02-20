import { connect } from 'react-redux';
import BookingShow from './booking_show';
import { fetchSitter } from '../../actions/sitter_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    sitter: state.sitter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSitter: (sitterId) => dispatch(fetchSitter(sitterId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingShow));
