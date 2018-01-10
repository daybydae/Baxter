import { connect } from 'react-redux';
import Search from './search';
import { fetchSitters } from '../../actions/sitter_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => {

  return {
    sitters: Object.values(state.entities.sitters)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSitters: (filters) => dispatch(fetchSitters(filters)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
