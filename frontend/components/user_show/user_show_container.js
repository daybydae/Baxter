import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {

  return {
    currentUser: state.session.currentUser,
    
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
