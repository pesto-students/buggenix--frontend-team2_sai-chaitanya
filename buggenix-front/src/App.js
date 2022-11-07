import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import {Routes, Route} from "react-router-dom"; 
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path = "/" element = {<LandingPage/>} />
        <Route path = "/login" element = {<Login />} /> 
        <Route path = "/signup" element = {<Signup/>} />
      </Routes>
    )
  }
}

export default App;
