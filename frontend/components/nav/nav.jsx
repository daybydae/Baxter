import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({email: "dae", password: "daedae"});
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  userNavLinks() {
    if (!this.props.currentUser) {
      return (
        <nav className="header-logged-in-links">
          <button
            type="button"
            onClick={this.handleSubmit}
          >Demo Login</button>

          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/signup">Sign Up</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/login">Sign In</Link>
        </nav>
      );
    } else {
      return (
        <nav className="header-login-signup-links">
          <Link to={"/"}>
            {this.props.currentUser.username}
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/"}>
            Bookings
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="logout-button" onClick={this.handleLogout}>
            Log Out
          </button>
        </nav>
      );
    }

  };

  render () {
    return this.userNavLinks();
  }
}

export default Nav;
