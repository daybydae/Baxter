import { connect } from 'react-redux';
import { login, logout, removeErrors } from '../../actions/session_actions';
import Nav from './nav';
import {toggleDropdown} from '../../actions/dropdown_actions';

const mapStateToProps = ({ session, ui }) => {

  return {
    currentUser: session.currentUser,
    dropDownOpen: ui.dropDown.open
  };
};

const mapDispatchToProps = dispatch => {

  return {

    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    toggleDropdown: () => dispatch(toggleDropdown())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
