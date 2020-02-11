import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from "react-router-dom";
import { Input } from "../common/FormsControl/Input.jsx";
import { login_action } from "../../redux/Auth/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = (props) => {
	const onSubmit = (formData) => {
		return props.login_action(formData, props.history);
	}
	return(
		<div className='form-bg'>
			<div className='center-form'>
				<h1 className='form-title'>Sign in to <span>Calendar</span></h1>
				<Form className='login-form' onSubmit={props.handleSubmit(onSubmit)}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Field type="email" name="email" placeholder="Enter email" component={Input} required />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Field type="password" name="password"  placeholder="Password" component={Input} required />
					</Form.Group>
					<Button variant="primary" type="submit" block>Login</Button>
					<NavLink to="/signup" className='navlink'>Create account</NavLink>
				</Form>
			</div>
		</div>
	);
};

const LoginReduxForm = reduxForm({form:'loginForm'})(Login);

export default connect(undefined, { login_action })(LoginReduxForm);
