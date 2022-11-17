import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import {Routes, Route} from "react-router-dom"; 
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import { AuthProvider } from './context/authContext';
import RequireAuth from './components/Dashboard/RequireAuth/RequireAuth';
import AuthRedirect from './components/AuthRedirect/AuthRedirect';

class App extends React.Component {

  render () {
    return (
      <AuthProvider>
        <Routes>
          <Route path = "/" element = {<LandingPage/>} />
          <Route path = "login" element = {<AuthRedirect><Login /></AuthRedirect>} /> 
          <Route path = "signup" element = {<AuthRedirect><Signup/></AuthRedirect>} />
          <Route path = "dashboard" element = {<RequireAuth><Dashboard/></RequireAuth>} />
        </Routes>
      </AuthProvider>
    )
  }
}

export default App;
