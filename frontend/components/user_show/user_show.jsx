import React from 'react';
import { Link } from 'react-router-dom';
import UserShowForm from './user_show_form';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

      return (

      <div className="main-content-user-show">
        <div className="hero-container-user">
          <div className="row">
            <div className ="col-two-fifths">
              <div className="profile-pic-box">
                <div className="widget-body">
                  <img
                    className="profile-pic"
                    src={this.props.currentUser.image_thumb}
                    />

                </div>
              </div>
            </div>
            <div className="col-three-fifths">
              <div className="inner-profile-right">

                <div className="username">
                  {this.props.currentUser.username}
                </div>
                <div className="profile-description">

                  <UserShowForm
                    currentUser={this.props.currentUser}
                    updateUser={this.props.updateUser}
                  />

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      );
    }

}

export default UserShow;
