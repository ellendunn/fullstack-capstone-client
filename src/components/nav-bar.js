import React from 'react';
import {connect} from 'react-redux'
import {clearAuth} from '../actions/auth'
import {clearAuthToken} from '../local-storage'

import './nav-bar.css'

export class NavBar extends React.Component {
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

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar)
