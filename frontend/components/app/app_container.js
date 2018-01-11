import { connect } from 'react-redux';
import { closeDropdown } from '../../actions/app_actions';
import App from '../App';
import {toggleDropdown} from '../../actions/dropdown_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {

  return {
    currentUser: state.session.currentUser,
    dropDownOpen: state.ui.dropDown.open
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDropdown: () => dispatch(toggleDropdown())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
