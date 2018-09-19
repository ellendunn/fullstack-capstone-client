import React from 'react';
import {fetchProtectedData} from '../actions/protected-data';
import {connect} from 'react-redux';
import RequiresLogin from './requires-login';
import Kitchen from './kitchen';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData())
  }

  render() {
    return (
      <div>
        <h1>{this.props.username} Kitchen & Pantry</h1>
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
