import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="main">

    <div className="navbar">
      <header>
        <h1>Baxter</h1>

        <GreetingContainer />
      </header>
    </div>

      <div className='main-content'>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>

  </div>
);

export default App;
