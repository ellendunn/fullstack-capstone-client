import React from 'react';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form'

export default function LandingPage(props) {

  if(props.loggedIn) {
    return <Redirect to="/dashboard" />
  }

  return(
    <div className="landing">
      <header>
        <h1>Learn to cook with what you have!</h1>
        <h3>Discover new recipes and incorporate foods that are already in your pantry and refridgerator to minimize waste and save money.</h3>
      </header>
      <LoginForm />
      <Link to="/register">Register</Link>
    </div>

  )
}
