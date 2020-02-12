import React, { Component } from 'react';
import Header from '../common/Header.jsx';
import { AddEventPanel } from './AddEventPanel.jsx';
import { Modal, Button  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Calendar extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	modalShow: false,
	    	eventStart: 0,
	    	eventEnd: 0,
	    	eventDuration: 0,
	    	events: []
	    }
	}

	setModalShow = (status) => {
		this.setState({
			modalShow: status
		})
	}

	setEventInfo = (startH, startM, endH, endM, lable) => {
		const eventEnd = endH + endM;
		const eventStart = startH + startM;
		const eventTop = Math.ceil((eventStart)*3.333);
		const eventHeight = Math.ceil((eventEnd - eventStart)*3.333);
		this.setState({
			eventStart: eventStart,
			eventEnd: eventEnd,
			eventDuration: eventEnd - eventStart,
			events: [...this.state.events, {top: eventTop, height: eventHeight, lable: lable}]
		})
	}

	setEvent = (data) => {
		const start_hours   = Number(data.start_hours);
		const start_minutes = Number(data.start_minutes);
		const end_hours     = Number(data.end_hours);
		const end_minutes   = Number(data.end_minutes);
		this.setEventInfo(start_hours, start_minutes, end_hours, end_minutes, data.lable);
		console.log(this.state);
	}

	render() {
		const events = Object.keys(this.state.events).map((val, i) => {
			return <div className="event event_1" style={{top: this.state.events[val].top, height: this.state.events[val].height}}>{this.state.events[val].lable}</div>
		});
		return(
			<div className='main'>
				<Header history={this.props.history} />
				<Button variant="primary" onClick={() => this.setModalShow(true)}>Add event</Button>
				<div className='app-content'>
					<AddEventPanel 
						show={this.state.modalShow}
						setEvent={this.setEvent}
		        		onHide={() => this.setModalShow(false)} />
					<div className="calendar-markup">
						<ol className="time-grid">
							<li>
								<div className="time-line">
									<div className="start-time">8:00</div>
									<div className="half">8:30</div>
								</div>
							</li>
							<li>
								<div className="time-line">
									<div className="start-time">9:00</div>
									<div className="half">9:30</div>
								</div>
							</li>
							<li>
								<div className="time-line">
									<div className="start-time">10:00</div>
									<div className="half">10:30</div>
								</div>
							</li>
							<li>
								<div className="time-line">
									<div className="start-time">11:00</div>
									<div className="half">11:30</div>
								</div>
							</li>
							<li>
								<div className="time-line">
									<div className="start-time">12:00</div>
									<div className="half">12:30</div>
								</div>
							</li>
							<li>
								<div className="time-line">
									<div className="start-time">13:00</div>
									<div className="half">13:30</div>
								</div>
							</li>
							<li>
								<div className="time-line">
									<div className="start-time">14:00</div>
									<div className="half">14:30</div>
								</div>
							</li>
						</ol>
						<div id='event-list' className="event-list">
							{events}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Calendar;