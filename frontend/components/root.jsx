import { HashRouter } from 'react-router-dom';
import AppContainer from './app/app_container';
import React from 'react';
import { Provider } from 'react-redux';


const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <AppContainer />
    </HashRouter>
  </Provider>
);

export default Root;
