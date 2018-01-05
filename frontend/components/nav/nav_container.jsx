import { connect } from 'react-redux';
import { login, logout, removeErrors } from '../../actions/session_actions';
import Nav from './nav';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
