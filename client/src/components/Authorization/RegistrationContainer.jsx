import React, { Component } from "react";
import { connect } from "react-redux";
import { SubmissionError } from 'redux-form';
import { Redirect } from "react-router-dom";
import { RegistrationReduxForm } from "./Registration.jsx";
import { authAPI } from "../../api";

class RegistrationContainer extends React.Component {
	onSubmit = (formData) => {
		return authAPI.signup(formData).then(res => {
			this.props.history.push('/login');
		}).catch((err) => {
			console.log(err.response.data);
			let name = err.response.data.error_field;
			let message = err.response.data.message;
			throw new SubmissionError({[name]: message});
		})
	}
	render() {
		return(
			<RegistrationReduxForm onSubmit={this.onSubmit}/>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
		
// 	}
// }

// const mapDispatchToProps = {
	
// }

export default connect(undefined,undefined)(RegistrationContainer);