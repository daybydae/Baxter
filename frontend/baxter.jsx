import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import React from 'react';
import { login, receiveCurrentUser } from './actions/session_actions';
import { fetchSitters } from './actions/sitter_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.login = login;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.receiveCurrentUser = receiveCurrentUser;

  window.fetchSitters = fetchSitters;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
