import React from "react";
import { Form, Button } from 'react-bootstrap';

export const Input = ({input, meta, ...props}) => {
	return(
		<div>
			<Form.Control {...input} {...props} className={meta.submitFailed && meta.error ? 'input-error' : ''} />
			{meta.submitFailed && meta.error && <div className='error-prompt'><span>{meta.error}</span></div>}
		</div>	
	);
}