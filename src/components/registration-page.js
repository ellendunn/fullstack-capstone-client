import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import RegistrationForm from './registration-form';

import './landing-page.css'

export function RegistrationPage(props) {

  if (props.loggedIn) {
    return <Redirect to="/dashboard" />
  }
    return(
      <div className="registration">
        <header>
          <h1>Create an account and start cooking!</h1>
        </header>
        <RegistrationForm />
        <Link to="/">Log In</Link>
      </div>
    )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
