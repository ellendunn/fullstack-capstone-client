import React from 'react';
import {connect} from 'react-redux'
import {clearAuth} from '../actions/auth'
import {Link} from 'react-router-dom';
import {clearAuthToken} from '../local-storage'
import {clearUserData} from '../actions/app'

import './nav-bar.css'

export class NavBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth())
    this.props.dispatch(clearUserData())
    clearAuthToken()
  }

  render() {
    let button, backButton
    if (this.props.loggedIn) {
      button =	(
        <button onClick={() => this.logOut()} className="logout-button">
        Log Out
        </button>
      );
    }

    if (this.props.selected) {
      backButton = (
        <Link to="/recipes" >
          <button className="to-recipes-button">Back To Recipes</button>
        </Link >
      )
    }

    const homeButton = (
      <Link
        to="/dashboard"
        style={{ textDecoration: 'none' }}
        className="home-button clearfix"
      >
        <h1 className="title">KitchenSmart</h1>
      </Link>
    )

    return(
      <nav className="nav-bar">

        <div className="nav-buttons">
          {homeButton}
          <div className='stack-buttons'>
            {button}
            {backButton}
          </div>
        </div>
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
