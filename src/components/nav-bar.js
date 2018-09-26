import React from 'react';
import {connect} from 'react-redux'
import {clearAuth} from '../actions/auth'
import {Link} from 'react-router-dom';
import {clearAuthToken} from '../local-storage'

import './nav-bar.css'

export class NavBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth())
    clearAuthToken()
  }

  render() {
    let button, backButton
    if (this.props.loggedIn) {
      button =	(
        <button onClick={() => this.logOut()}>Log Out</button>
      );
    }

    if (this.props.recipeId) {
      backButton = (
        <Link to="/recipes" >
        <button >Back To Recipes</button>
        </Link >
      )
    }

    return(
      <nav className="nav-bar">
        <Link to="/dashboard">
          <h1>KitchenSmart</h1>
        </Link>
        {button}
        {backButton}
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  recipeId: state.recipes.recipeId,
  recipes: state.recipes.recipes,
  selected: state.recipes.selected
});

export default connect(mapStateToProps)(NavBar)
