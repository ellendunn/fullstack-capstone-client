import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default () => Component => {
  function RequiresLogin(props) {
    const {authenticating, loggedIn, error, ...passThroughProps} = props;
    if (authenticating) {
      console.log('logging in')
      return <div>Loading Your Kitchen</div>;
    } else if (!loggedIn || error) {
      console.log('not logged in')
      return <Redirect to="/" />;
    }
    return <Component {...passThroughProps} />;
  }

  const displayName = Component.displayName || Component.name || 'Component';
  RequiresLogin.displayName = `RequiresLogin(${displayName})`;

  const mapStateToProps = (state, props) => ({
    authenticating: state.auth.loading,
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.error
  })

  return connect(mapStateToProps)(RequiresLogin)
}
