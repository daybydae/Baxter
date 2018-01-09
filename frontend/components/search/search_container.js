import { connect } from 'react-redux';
import Search from './search';
import { fetchSitters } from '../../actions/sitter_actions';

const mapStateToProps = (state) => {

  return {
    sitters: Object.values(state.entities.sitters)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSitters: () => dispatch(fetchSitters())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
