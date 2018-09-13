import React from 'react';
import {Route} from 'react-router-dom'

import NavBar from './nav-bar.js';
import LandingPage from './landing-page.js'
import RegistrationPage from './registration-page'
import Dashboard from './dashboard'

export class App extends React.Component {
	render() {
		return(
			<div className="app">
				<NavBar />
				<Route exact path="/" component={LandingPage} />
			</div>
			);
	}
}

export default App

// <Route exact path="/" component={LandingPage} />
// <Route exact path="/dashboard" component={Dashboard} />
// <Route exact path="/register" component={RegistrationForm} />
