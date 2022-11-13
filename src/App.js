import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import { Route, Switch, useHistory,BrowserRouter as Router, } from "react-router-dom";
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import { oktaConfig } from './config/oktaConfig';
const oktaAuth = new OktaAuth(oktaConfig);
const CALLBACK_PATH = "/login/callback";

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };
  const customAuthHandler = (oktaAuth) => {
    // Redirect to the /login page that has a CustomLoginComponent
    // This example is specific to React-Router
    history.push('/login');
  };

  const onAuthResume = async () => {
    history.push('/login');
};

  return (
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}  onAuthRequired={customAuthHandler}>
        <Switch>
          {/* <Route path = "/" exact={true} component = {LandingPage} /> */}
          <Route path="/login/callback"
                    component={(props) => <LoginCallback {...props} onAuthResume={onAuthResume} />} />
          <Route path = "/login" exact component = {Login} /> 
          <Route path = "/signup" exact component = {Signup} />
          {/* <Route path={CALLBACK_PATH} exact component={Dashboard} /> */}
          <SecureRoute  path = "/dashboard"  component = {Dashboard} />
        </Switch>
      </Security>
  );
};
const AppWithRouterAccess = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouterAccess;
