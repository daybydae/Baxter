import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({email: "dae@gmail.com", password: "daedae"});
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleClick(e) {
    e.preventDefault();
    document.getElementById("dropdown").classList.toggle("show");
    document.getElementById("dropdown-profile").classList.toggle("myClickState");
  }

  userNavLinks() {
    if (!this.props.currentUser) {
      return (
        <nav className="header-logged-in-links">
          <button
            type="button"
            onClick={this.handleSubmit}
            className="demo-login-button"
          >Demo Login</button>

          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#/signup" onClick={this.props.removeErrors}>Sign Up</a>

          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#/login" onClick={this.props.removeErrors}>Sign In</a>

        </nav>
      );
    } else {
      return (
        <nav className="header-login-signup-links">
          <ul className="nav-right">
            <li className="profile-box">
              <div className="nav-right-box" id="dropdown-profile">
                <button className="dropbtn" onClick={this.handleClick}>
                  <div className="profile-icon-box">
                    <img
                      className="profile-icon"
                      src={this.props.currentUser.image_url}
                      />
                  </div>
                  {this.props.currentUser.username}
                  <span className="caret">

                    <i className="fas fa-caret-down fa-xs"></i>
                  </span>
                </button>

              </div>

              <li>
                <ul className="header-dropdown-content" id="dropdown">
                  <li><a href="#">Dashboard</a></li>
                  <li><a href="#">Settings</a></li>
                  <li className="divider"></li>
                  <li><button className="logout-button" onClick={this.handleLogout}>
                    Log Out
                  </button></li>
                </ul>
              </li>
            </li>

            <li>
              <div className ="nav-right-box">

                <Link to={"/"}>

                  <span className="bookings-icon">
                    <i className="far fa-envelope">
                    </i>
                  </span>
                  Bookings

                </Link>
              </div>

            </li>
          </ul>

        </nav>
      );
    }

  };

  render () {
    return this.userNavLinks();
  }
}

export default Nav;
