import { connect } from 'react-redux';
import Search from './search';
import { fetchSitters } from '../../actions/sitter_actions';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = (state) => {

  return {
    sitters: Object.values(state.entities.sitters)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSitters: () => dispatch(fetchSitters()),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
