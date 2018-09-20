import React from 'react';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchFoodItems} from '../actions/app'
import {connect} from 'react-redux';
import RequiresLogin from './requires-login';
import Kitchen from './kitchen';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData())
    this.props.dispatch(fetchFoodItems())
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
