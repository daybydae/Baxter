import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchSitter } from '../../actions/sitter_actions';

const mapStateToProps = (state, ownProps) => {

  const sitterId = parseInt(ownProps.match.params.sitterId);
  return {
    sitter: state.entities.sitters[sitterId] || {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSitter: (sitterId) => dispatch(fetchSitter(sitterId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
