import React from "react";
import { Form, Button } from 'react-bootstrap';

export const Textarea = ({input, meta, ...props}) => {
	return(
		<div>
			<Form.Control as="textarea" {...input} {...props} className='textarea-input' />
		</div>	
	);
}