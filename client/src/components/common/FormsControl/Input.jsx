import React from "react";
import { Form, Button } from 'react-bootstrap';

export const Input = ({input, meta, ...props}) => {
	return(
		<Form.Control {...input} {...props} />
	);
}