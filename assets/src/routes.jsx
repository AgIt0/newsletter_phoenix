import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import RegistrationView from './components/registration_view';
import SessionView from './components/session_view';
import LinkCreationView from './components/link_creation_view';

export default (
  <Route component={App}>
    <Route path="/sign_up" component={RegistrationView} />
    <Route path="/sign_in" component={SessionView} />

    <Route path="/" component={LinkCreationView} />
    {/* <Route path="/" component={AuthenticatedContainer} onEnter={ensureAuthenticated} >
        <IndexRoute component={LinkCreationView} />
        </Route> */}
  </Route>
);
