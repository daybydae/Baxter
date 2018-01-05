import { connect } from 'react-redux';
import SitterIndex from './sitter_index';
import { fetchSitters, fetchSitter } from '../../actions/sitter_actions';

const mapStateToProps = (state) => {
  return {
    sitters: state.entities.sitters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSitters: () => dispatch(fetchSitters())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SitterIndex);
