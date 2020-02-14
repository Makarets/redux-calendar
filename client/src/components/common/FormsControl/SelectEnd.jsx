import React from "react";
import { Form } from 'react-bootstrap';

export const SelectEnd = ({input, meta, ...props}) => {
	return(
		<div>
			<Form.Control as="select" {...input} {...props} >
				<option value='0'   disabled={props.startTime > 0   ? true : false}>08 am</option>
				<option value='60'  disabled={props.startTime > 60  ? true : false}>09 am</option>
				<option value='120' disabled={props.startTime > 120 ? true : false}>10 am</option>
				<option value='180' disabled={props.startTime > 180 ? true : false}>11 am</option>
				<option value='240' disabled={props.startTime > 240 ? true : false}>12 pm</option>
				<option value='300' disabled={props.startTime > 300 ? true : false}>01 pm</option>
				<option value='360' disabled={props.startTime > 360 ? true : false}>02 pm</option>
				<option value='420' disabled={props.startTime > 420 ? true : false}>03 pm</option>
				<option value='480' disabled={props.startTime > 480 ? true : false}>04 pm</option>
				<option value='540' disabled={props.startTime > 540 ? true : false}>05 pm</option>
			</Form.Control>
		</div>	
	);
}