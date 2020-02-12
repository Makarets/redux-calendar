import React, { Component } from 'react';
import { connect } from "react-redux";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { logout_action } from "../../redux/Auth/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
	const logout = () => {
		props.logout_action();
	}
	return(
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Redux Calendar</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home" disabled>Home</Nav.Link>
					<Nav.Link href="#link" disabled>Link</Nav.Link>
				</Nav>
				<Button variant="info" type="submit" onClick={logout}>Logout</Button>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default connect(undefined, {logout_action})(Header);