import React from "react";
import { Form } from 'react-bootstrap';

export const Select = ({input, meta, ...props}) => {
	return(
		<div>
			<Form.Control as="select" {...input} {...props}>
				<option value='0'>08 am</option>
				<option value='60'>09 am</option>
				<option value='120'>10 am</option>
				<option value='180'>11 am</option>
				<option value='240'>12 pm</option>
				<option value='300'>01 pm</option>
				<option value='360'>02 pm</option>
				<option value='420'>03 pm</option>
				<option value='480'>04 pm</option>
				<option value='540'>05 pm</option>
			</Form.Control>
		</div>	
	);
}