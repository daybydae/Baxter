import { connect } from 'react-redux';
import { closeDropdown } from '../../actions/app_actions';
import App from '../App';
import {toggleDropdown} from '../../actions/dropdown_actions';

const mapStateToProps = (state) => {

  return {
    state: state,
    currentUser: state.session.currentUser,
    dropDownOpen: state.ui.dropDown.open
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDropdown: () => dispatch(toggleDropdown())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
