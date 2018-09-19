import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import NavBar from './nav-bar.js';
import LandingPage from './landing-page.js';
import RegistrationPage from './registration-page';
import Dashboard from './dashboard';
import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {
	componentDidUpdate(prevProps){
		if (!prevProps.loggedIn && this.props.loggedIn) {
			// periodically refresh auth token when logged in
			this.startPeriodicRefresh();
		} else if (prevProps.loggedIn && !this.props.loggedIn) {
			// stop periodic refresh of auth token when logged out
			this.stopPeriodicRefresh();
		}
	}

	componentWillUnmount() {
		this.stopPeriodicRefresh();
	}

	startPeriodicRefresh() {
		this.refreshInterval = setInterval(
			() => this.props.dispatch(refreshAuthToken()),
			60 * 60 * 1000
		);
	}

	stopPeriodicRefresh() {
		if (!this.refreshInterval) {
			return;
		}
		clearInterval(this.refreshInterval)
	}


	render() {
		return(
			<div className="app">
				<NavBar />
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/register" component={RegistrationPage} />
			</div>
			);
	}
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
