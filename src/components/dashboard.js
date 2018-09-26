import React from 'react';
import {connect} from 'react-redux';

import {fetchProtectedData} from '../actions/protected-data';
import {
  fetchFoodItems,
  fetchFoodItemsSuccess
} from '../actions/app'
import RequiresLogin from './requires-login';
import Kitchen from './kitchen';

import './dashboard.css'

export class Dashboard extends React.Component {

  componentDidMount() {
    // if (this.props.username) {
      this.props.dispatch(fetchProtectedData())
      .then(() => {
        if (this.props.fridge.length === 0 && this.props.pantry.length === 0) {
          console.log(this.props.fridge, this.props.pantry)
          this.props.dispatch(fetchFoodItems());
        }
        else {
          let foodItems = [];
          this.props.dispatch(fetchFoodItemsSuccess(foodItems))
        }
      }
    )
  }

  render() {
    return (
      <div className="dashboard" >
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
    protectedData: state.protectedData.data,
    fridge: state.app.fridge,
    pantry: state.app.pantry
  };
};

export default RequiresLogin()(connect(mapStateToProps)(Dashboard))
