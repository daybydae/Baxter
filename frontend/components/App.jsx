import React from 'react';
import NavContainer from './nav/nav_container';
import SessionFormContainer from './session_form/session_form_container';

import SitterShowContainer from './sitter_show/sitter_show_container';

import SitterIndexContainer from './search/sitter_index_container';

import UserShowContainer from './user_show/user_show_container';

import SearchContainer from './search/search_container';

import { Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="main">

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
        <Route path="/sitters/:sitterId" component={SitterShowContainer} />
        <Route exact path="/" component={SearchContainer} />
        <ProtectedRoute exact path="/user" component={UserShowContainer} />

      </div>

  </div>
);

export default App;
