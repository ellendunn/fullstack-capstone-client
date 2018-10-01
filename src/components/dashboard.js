import React from 'react';
import {connect} from 'react-redux';

import {
  fetchFoodItems,
  clearSearchItems
  // fetchFoodItemsSuccess
} from '../actions/app'
import {clearRecipeId} from '../actions/recipes-api'
import RequiresLogin from './requires-login';
import Kitchen from './kitchen';
import Loading from './loading';

import './dashboard.css'

export class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(clearSearchItems())
    this.props.dispatch(clearRecipeId())
    const authToken = localStorage.getItem('authToken')
    if (!this.props.fridge.length && !this.props.pantry.length && authToken) {
        this.props.dispatch(fetchFoodItems());
      }
  }

  render() {
    if (this.props.loading && (!this.props.fridge.length || !this.props.pantry.length)) {
      return <Loading />
    }

    return (
      <div className="dashboard" >
        <h1 className="dashboard-header">{this.props.name}'s Kitchen</h1>
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
    fridge: state.app.fridge,
    pantry: state.app.pantry,
    loading: state.app.loading,
    searchItems: state.app.searchItems

  };
};

export default RequiresLogin()(connect(mapStateToProps)(Dashboard))
