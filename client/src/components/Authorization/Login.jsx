import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Input } from "../common/FormsControl/Input.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = (props) => {
	return(
		<div className='center-form'>
			<h1 className='form-title'>Sign in</h1>
			<Form className='login-form' onSubmit={props.handleSubmit}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Field type="email" name="email" placeholder="Enter email" component={Input} required />
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Field type="password" name="password"  placeholder="Password" component={Input} required />
				</Form.Group>
				<Button variant="primary" type="submit" block>Login</Button>
			</Form>
		</div>
	);
};

export const LoginReduxForm = reduxForm({form:'loginForm'})(Login);

// <Form.Group controlId="formBasicName">
				// 	<Form.Label>User name</Form.Label>
				// 	<Field type="text" name="name" placeholder="Enter user name" component={Input} />
				// </Form.Group>