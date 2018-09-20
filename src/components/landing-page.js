import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import LoginForm from './login-form'

export function LandingPage(props) {
  // console.log(props)

  if (props.loggedIn) {
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
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(LandingPage)