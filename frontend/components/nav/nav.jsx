import React from 'react';
import { Link } from 'react-router-dom';

const userNavLinks = (currentUser, logout) => (
    <nav className="header-login-signup-links">
      <Link to={"/"}>
        {currentUser.username}
      </Link>
      &nbsp;&nbsp;
      <Link to={"/"}>
        Bookings
      </Link>
      <button className="logout-button" onClick={logout}>
        Log Out
      </button>
    </nav>
);

const sessionLinks = () => (
  <nav className="header-logged-in-links">
    <Link to="/signup">Sign Up</Link>
    &nbsp;&nbsp;
    <Link to="/login">Sign In</Link>
  </nav>
);

const Nav = ({ currentUser, logout }) => (
  currentUser ? userNavLinks(currentUser, logout) : sessionLinks()
);


export default Nav;
