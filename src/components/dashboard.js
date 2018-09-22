import React from 'react';
// import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchProtectedData} from '../actions/protected-data';
import {fetchFoodItems} from '../actions/app'
import RequiresLogin from './requires-login';
import Kitchen from './kitchen';
// import RecipesResultsPage from './recipes-results-page'

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchFoodItems());
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}s Kitchen & Pantry</h1>
        <Kitchen />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default RequiresLogin()(connect(mapStateToProps)(Dashboard))
