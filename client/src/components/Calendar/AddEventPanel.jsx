import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from "../common/FormsControl/Input.jsx";
import { Textarea } from "../common/FormsControl/Textarea.jsx";
import { Select } from "../common/FormsControl/Select.jsx";
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddEventForm = (props) => {
	const onSubmit = (formData) => {
		props.setEvent(formData);
		props.onHide();
	}
	return(
		<div className="add-event-panel">
			<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Add new event</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className='add-event-form' onSubmit={props.handleSubmit(onSubmit)}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Event label</Form.Label>
							<Field placeholder="Event label" name='label' maxlength="30" component={Textarea} required />
						</Form.Group>
						<Form.Label>Pick event time:</Form.Label>
						<Form.Row className='time-row'>
							<Form.Label>from</Form.Label>
							<Form.Group as='Col' controlId="formBasicnumber" className='hours-select'>
								<Field name="start_hours" onChange={(e) => {props.setStartTime(e)}} component={Select} required />
							</Form.Group>
							<Form.Label className='time-separate'>:</Form.Label>
							<Form.Group as='Col' controlId="formBasicnumber">
								<Field type="number" min='0' max='59' name="start_minutes" component={Input} required />
							</Form.Group>
						</Form.Row>
						<Form.Row className='time-row'>
							<Form.Label>to</Form.Label>
							<Form.Group as='Col' controlId="formBasicnumber" className='hours-select'>
								<Field name="end_hours" onChange={(e) => {props.setEndTime(e)}} startTime={props.startTime} component={Select} required />
							</Form.Group>
							<Form.Label className='time-separate'>:</Form.Label>
							<Form.Group as='Col' controlId="formBasicnumber">
								<Field type="number" min='0' max={props.endTime >= 540 ? 0 : 59} name="end_minutes" component={Input} required />
							</Form.Group>
						</Form.Row>
						<Button variant="btn btn-success" type="submit" block>Save</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export const AddEventPanel = reduxForm({form:'addEventForm', initialValues: {start_hours: 0, end_hours: 0}})(AddEventForm);