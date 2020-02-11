import React, { Component } from "react";
import { connect } from "react-redux";
import { SubmissionError } from 'redux-form';
import { Redirect } from "react-router-dom";
import { LoginReduxForm } from "./Login.jsx";
import { login } from "../../api";

class LoginContainer extends React.Component {
	onSubmit = (formData) => {
		return login(formData).then(res => {
			this.props.history.push('/');
		}).catch(err => {
			console.log(err);
			if(err == 'Email is not found!') {
				throw new SubmissionError({email: 'test',_error: 'Login failed!'})
			}

			if(err == 'Email is not found!') {
				throw new SubmissionError({email: 'test',_error: 'Login failed!'})
			}
		})
	}
	render() {
		return(
			<LoginReduxForm onSubmit={this.onSubmit}/>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
		
// 	}
// }

// const mapDispatchToProps = {
	
// }

export default connect(undefined,undefined)(LoginContainer);