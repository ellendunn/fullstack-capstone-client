import React from 'react';
import {clearAuth} from '../actions/auth'
import {clearAuthToken} from '../local-storage'

import './nav-bar.css'

export default class NavBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth())
    clearAuthToken()
  }

  render() {
    let button
    if (this.props.loggedIn) {
      button =	(
        <button onClick={() => this.logOut()}>Log Out</button>
      );
    }

    return(
      <nav>
        <h1>KitchenSmart</h1>
        {button}
      </nav>
    )

  }

}
