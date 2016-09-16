import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import AuthenticationComponent from './components/authenticated';
import RegistrationView from './components/registration_view';
import SessionView from './components/session_view';
import LinkCreationView from './components/link_creation_view';
import Actions from './actions/sessions';

export default function configRoutes(store) {
  const ensureAuthenticated = (nextState, replace, callback) => {
    const { dispatch } = store;
    const { session } = store.getState();
    const { currentUser } = session;

    if(!currentUser && localStorage.getItem('authToken')) {
      dispatch(Actions.currentUser());
    } else if (!localStorage.getItem('authToken')) {
      replace('/sign_in');
    }

    callback();
  };

  return (
    <Route component={App}>
      <Route path="/sign_up" component={RegistrationView}/>
      <Route path="/sign_in" component={SessionView}/>

      <Route path="/" component={AuthenticationComponent} onEnter={ensureAuthenticated}>
        <IndexRoute component={LinkCreationView} />
      </Route>
    </Route>
  )
};
