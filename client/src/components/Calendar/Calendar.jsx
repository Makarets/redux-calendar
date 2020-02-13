import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../common/Header.jsx';
import { AddEventPanel } from './AddEventPanel.jsx';
import { Modal, Button  } from 'react-bootstrap';
import { add_event_action, get_event_action } from "../../redux/Calendar/actions";
import 'bootstrap/dist/css/bootstrap.min.css';


class Calendar extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	modalShow: false
	    }
	}

	setModalShow = (status) => {
		this.setState({
			modalShow: status
		})
	}

	setEventInfo = (startH, startM, endH, endM, label) => {
		const eventEnd = endH + endM;
		const eventStart = startH + startM;
		const eventTop = Math.ceil((eventStart)*3.333);
		const eventHeight = Math.ceil((eventEnd - eventStart)*3.333);
		const userId = localStorage.getItem("user_id");
		this.props.add_event_action({
			label: label, 
			top: eventTop,
			user_id: userId,
			height: eventHeight,
			eventStart: eventStart,
			eventDuration: eventEnd - eventStart
		})
	}

	setEvent = (data) => {
		const start_hours   = Number(data.start_hours);
		const start_minutes = Number(data.start_minutes);
		const end_hours     = Number(data.end_hours);
		const end_minutes   = Number(data.end_minutes);
		this.setEventInfo(start_hours, start_minutes, end_hours, end_minutes, data.label);
	}

	componentDidMount() {
		const userId = localStorage.getItem("user_id");
		this.props.get_event_action(userId);
		setTimeout(function(){
			var elem = document.getElementsByClassName('event');
			for(let i=0; elem.length > i; i++) {
				console.log(elem[i].getBoundingClientRect());
			}
		}, 3000)
	}

	render() {
		const events = Object.keys(this.props.events).map((val, i) => {
			return <div className="event" key={this.props.events[val]._id} style={{top: this.props.events[val].top, height: this.props.events[val].height}}>{this.props.events[val].label}</div>
		});
		return(
			<div className='main'>
				<Header history={this.props.history} />
				<Button variant="primary" onClick={() => this.setModalShow(true)}>Add event</Button>
				<div className='app-content'>
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
									<div className="start-time">01:00</div>
									<div className="half">01:30</div>
								</div>
							</li>
							<li>
								<div className="time-line">
									<div className="start-time">02:00</div>
									<div className="half">02:30</div>
								</div>
							</li>
							<li>
								<div className="time-line">
									<div className="start-time">03:00</div>
									<div className="half">03:30</div>
								</div>
							</li>
							<li>
								<div className="time-line">
									<div className="start-time">04:00</div>
									<div className="half">04:30</div>
								</div>
							</li>
							<li>
								<div className="time-line">
									<div className="start-time">05:00</div>
								</div>
							</li>
						</ol>
						<div id='event-list' className="event-list">
							{events}
						</div>
					</div>
				</div>
				<AddEventPanel 
					show={this.state.modalShow}
					setEvent={this.setEvent}
	        		onHide={() => this.setModalShow(false)} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		events: state.events.userEvents,
	}
}

const mapDispatchToProps = {
	add_event_action,
	get_event_action
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
