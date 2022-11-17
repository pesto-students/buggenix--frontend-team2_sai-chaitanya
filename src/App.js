import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import {Routes, Route} from "react-router-dom"; 
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { AuthProvider } from './context/authContext';
import RequireAuth from './components/Dashboard/RequireAuth/RequireAuth';
import AuthRedirect from './components/AuthRedirect/AuthRedirect';
import DashboardContainer from './containers/DashboardContainer/DashboardContainer';

class App extends React.Component {

  render () {
    return (
      <AuthProvider>
        <Routes>
          <Route path = "/" element = {<LandingPage/>} />
          <Route path = "login" element = {<Login />} />   {/* //AuthRedirect should be added*/}
          <Route path = "signup" element = {<Signup/>} /> {/* //AuthRedirect should be added*/}
          {/* <Route path = "dashboard" element = {<RequireAuth><DashboardContainer/></RequireAuth>} /> */}
          <Route path = "dashboard" element = {<DashboardContainer/>} /> 
        </Routes>
      </AuthProvider> 
    )
  }
}

export default App;
