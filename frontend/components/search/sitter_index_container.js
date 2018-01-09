import { connect } from 'react-redux';
import SitterIndex from './sitter_index';
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

export default connect(mapStateToProps, mapDispatchToProps)(SitterIndex);
