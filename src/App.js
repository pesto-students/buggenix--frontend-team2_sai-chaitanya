import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import {Routes, Route} from "react-router-dom"; 
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { AuthProvider } from './context/authContext';
import DashboardContainer from './containers/DashboardContainer/DashboardContainer';
import TeamInvite from './components/TeamInvite/TeamInvite';
import NoMatch from './components/NoMatch/NoMatch';
import { MetricsContainer } from './containers/MetricsContainer/MetricsContainer';
import { ProjectsContainer } from "./containers/ProjectsContainer/ProjectsContainer";
import { TicketsContainer } from './containers/TicketsContainer/TicketsContainer';
import PeopleContainer from './containers/PeopleContainer/PeopleContainer';
import InputSocials from './components/InputSocials/InputSocials';

class App extends React.Component {

  render () {
    return (
      <AuthProvider>
        <Routes>
          <Route path = "/" element = {<LandingPage/>} />
          <Route path = "login" element = {<Login />} />   {/* //AuthRedirect should be added*/}
          <Route path = "signup" element = {<Signup/>} /> {/* //AuthRedirect should be added*/}
          {/* <Route path = "dashboard" element = {<RequireAuth><DashboardContainer/></RequireAuth>} /> */}
          <Route path = "dashboard" element = {<DashboardContainer/>}>
              <Route path = "metrics" element = {<MetricsContainer/>}/>  
              <Route path = "projects" element = {<ProjectsContainer/>}/>  
              <Route path = "tickets" element = {<TicketsContainer/>}/>  
              <Route path = "people" element = {<PeopleContainer/>}/>  
          </Route> 
          <Route path = "input-socials" element = {<InputSocials/>}/>
          <Route path = "team-invite" element = {<TeamInvite/>} />
          <Route path = "*" element = {<NoMatch />} />
        </Routes>
      </AuthProvider> 
    )
  }
}

export default App;
