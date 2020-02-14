import React, { Component } from 'react';
import './App.css';
import './assets/main.scss';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import LoginReduxForm from './components/Authorization/Login.jsx';
import RegistrationReduxForm from './components/Authorization/Registration.jsx';
import Calendar from './components/Calendar/Calendar.jsx'
import PrivateRoute from "./PrivateRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	auth: false
	    };

	    this.props.store.subscribe(() => {
			this.setState({
				auth: this.props.store.getState().user.isAuth
			});
		});
	}

	render() {
		return(
			<BrowserRouter>
				<Switch>
					<PrivateRoute exact path="/" isAuth={this.state.auth} component={Calendar} />
					<PublicRoute path="/login" restricted={true} isAuth={this.state.auth} component={LoginReduxForm} />
					<PublicRoute path="/signup" restricted={true} isAuth={this.state.auth} component={RegistrationReduxForm} />
					<Route path='*' exact={true}>
						<Redirect from='*' to='/' />
					</Route>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
