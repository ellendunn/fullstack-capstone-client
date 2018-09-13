import React from 'react';
import {Link} from 'react-router-dom';
import RegistrationForm from './registration-form';

export default class RegistrationPage extends React.Component {
  render() {
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
}
