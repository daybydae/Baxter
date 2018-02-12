import React from 'react';
import NavContainer from './nav/nav_container';
import SessionFormContainer from './session_form/session_form_container';
import BookingFormContainer from './bookings/booking_form_container';

import SitterShowContainer from './sitter_show/sitter_show_container';

import AppContainer from './app/app_container';

import SitterIndexContainer from './search/sitter_index_container';

import UserShowContainer from './user_show/user_show_container';

import SearchContainer from './search/search_container';

import { Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.dropDownOpen === true) {
      this.props.toggleDropdown();
    }
  }

  render () {
    return (
        <div className="main" onClick={this.handleClick}>

          <div className="navbar">
            <header className="nav-header">

              <Link to="/" className="brand-nav">
                <div className="icon-baxter-duo">
                  <div className="brand-icon">
                      <img src={window.staticImages.logoImage}/>

                  </div>

                  <h1 className="baxter">&nbsp;Baxter</h1>
                </div>
              </Link>
              <NavContainer />
            </header>

          </div>

            <div className='main-content'>
              <AuthRoute exact path="/login" component={SessionFormContainer} />
              <AuthRoute path="/signup" component={SessionFormContainer} />
              <Route exact path="/" component={SearchContainer} />
              <Route exact path="/sitters/:sitterId" component={SitterShowContainer} />
              <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
              <ProtectedRoute exact path="/sitters/:sitter_id/bookings" component={BookingFormContainer} />

            </div>

        </div>
      );
  }
}

export default App;
