import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { NavLink } from "react-router-dom";
import { Input } from "../common/FormsControl/Input.jsx";
import { signup_action } from "../../redux/Auth/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration = (props) => {
	const onSubmit = (formData) => {
		return props.signup_action(formData, props.history);
	}
	return(
		<div className='form-bg'>
			<div className='center-form'>
				<h1 className='form-title'>Create your account</h1>
				<Form className='registration-form' onSubmit={props.handleSubmit(onSubmit)}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Field type="email" name="email" placeholder="Enter email" component={Input} required />
					</Form.Group>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>User name</Form.Label>
						<Field type="text" name="name" placeholder="Enter name" component={Input} required />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Field type="password" name="password"  placeholder="Password" component={Input} required />
					</Form.Group>
					<Button variant="primary" type="submit" block>Sign up</Button>
					<NavLink to="/login" className='navlink'>Have account?</NavLink>
				</Form>
			</div>
		</div>
	);
};

const RegistrationReduxForm = reduxForm({form:'registrationForm'})(Registration);

export default connect(undefined, { signup_action })(RegistrationReduxForm);