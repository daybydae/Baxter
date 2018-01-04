import React from 'react';
import NavContainer from './nav/nav_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="main">

    <div className="navbar">
      <header className="nav-header">

        <div className="icon-baxter-duo">
          <div className="brand-icon">
            <img src={window.staticImages.logoImage}/>
          </div>

          <h1 className="baxter">&nbsp;Baxter</h1>
        </div>

        <NavContainer />
      </header>

    </div>

      <div className='main-content'>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>

  </div>
);

export default App;
