import React, { Suspense } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import {Routes, Route} from "react-router-dom"; 
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { AuthProvider } from './context/authContext';
import TeamInvite from './components/TeamInvite/TeamInvite';
import NoMatch from './components/NoMatch/NoMatch';
import InputSocials from './components/InputSocials/InputSocials';
import AuthRedirect from './components/AuthRedirect/AuthRedirect';
import RequireAuth from './components/RequireAuth/RequireAuth';


const DashboardContainer = React.lazy(() => import("./containers/DashboardContainer"));
const MetricsContainer = React.lazy(() => import("./containers/MetricsContainer"));
const ProjectsContainer = React.lazy(() => import("./containers/ProjectsContainer"));
const TicketsContainer = React.lazy(() => import("./containers/TicketsContainer"));
const PeopleContainer = React.lazy(() => import("./containers/PeopleContainer"));
 


class App extends React.Component {

  render () {
    return (
      <AuthProvider>
        <Suspense fallback = {<div>This is the fallback ui</div>}>
          <Routes>
            <Route path = "/" element = {<LandingPage/>} />
            <Route path = "login" element = {<AuthRedirect> <Login /></AuthRedirect>} />   {/* //AuthRedirect should be added*/}
            <Route path = "signup" element = {<AuthRedirect><Signup/></AuthRedirect>} /> {/* //AuthRedirect should be added*/}
            <Route path = "dashboard" element = {<RequireAuth><DashboardContainer/></RequireAuth>} >
                <Route path = "metrics" element = {<MetricsContainer/>}/>  
                <Route path = "projects" element = {<ProjectsContainer/>}/>  
                <Route path = "tickets" element = {<TicketsContainer/>}/>  
                <Route path = "people" element = {<PeopleContainer/>}/>  
            </Route> 
            <Route path = "input-socials" element = {<InputSocials/>}/>
            <Route path = "team-invite" element = {<TeamInvite/>} />
            <Route path = "*" element = {<NoMatch />} />
          </Routes>
        </Suspense>
      </AuthProvider> 
    )
  }
}

export default App;
