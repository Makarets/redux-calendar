import React, { Component } from 'react';
import { connect } from "react-redux";
import { reset } from 'redux-form';
import Header from '../common/Header.jsx';
import { AddEventPanel } from './AddEventPanel.jsx';
import { Modal, Button  } from 'react-bootstrap';
import { add_event_action, get_event_action, remove_event_action } from "../../redux/Calendar/actions";
import 'bootstrap/dist/css/bootstrap.min.css';


class Calendar extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	modalShow: false,
	    	startTime: 0,
	    	endTime: 0
	    }
	}

	setModalShow = (status) => {
		this.setState({
			modalShow: status,
			startTime: 0,
			endTime: 0
		})
		this.props.reset('addEventForm');
	}

	setEventInfo = (startH, startM, endH, endM, label) => {
		const eventEnd    = endH + endM;
		const eventStart  = startH + startM;
		const eventTop    = Math.ceil((eventStart)*3.333);
		const eventHeight = Math.ceil((eventEnd - eventStart)*3.333);
		const userId      = localStorage.getItem("user_id");
		this.props.add_event_action({
			label: label, 
			top: eventTop,
			user_id: userId,
			height: eventHeight,
			eventStart: eventStart,
			eventDuration: eventEnd - eventStart
		})
	}

	removeEvent = (user_id, event_id) => {
		this.props.remove_event_action(user_id, event_id);
		var _this = this;
		setTimeout(function(){
			_this.props.get_event_action(user_id);
		},250)
	}

	setStartTime = (e) => {
		this.setState({
			startTime: e.target.value
		})
	}

	setEndTime = (e) => {
		this.setState({
			endTime: e.target.value
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
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.events !== prevProps.events) {
			const elem = document.querySelectorAll('.event');
			for(let i=0; i < elem.length; i++) {
				let nextElem = elem[i].nextElementSibling;
				if(nextElem && nextElem.classList.contains('intersection')) {
					let leftOffsStack = elem[i].offsetLeft;
					elem[i].style.width = '100px';
					nextElem.style.left = leftOffsStack + 100 + 'px';
				}
			}
		}
	}

	render() {
		const events = Object.keys(this.props.events).map((elem, i, arr) => {
			var newClass = '';
			var styles = {
				left: 50,
				top: this.props.events[elem].top,
				height: this.props.events[elem].height
			}
			
			if(i !== 0) {
				let currEvent = this.props.events[i];
				let prevEvent = this.props.events[--i];
				let topA = currEvent.top;
				let topB = prevEvent.top;
				let sumA = currEvent.top + currEvent.height;
				let sumB = prevEvent.top + prevEvent.height;
				if(sumA > topB && sumB > topA) {
					styles = {
						left: 0,
						width: 100,
						top: this.props.events[elem].top,
						height: this.props.events[elem].height
					}
					newClass = ' intersection';
				}
			}
			return 	<div className={"event"+newClass} key={this.props.events[elem]._id} style={styles}>
						{this.props.events[elem].label}
						<div className='remove-event' onClick={() => this.removeEvent(this.props.events[elem].user_id,this.props.events[elem]._id)}>remove</div>
					</div>
		});
		return(
			<div className='main'>
				<Header history={this.props.history} />
				<div className="control-buttons">
					<Button variant="success" onClick={() => this.setModalShow(true)}>Add event</Button>
					<Button variant="info" href={"http://localhost:9000/api/event/export/"+this.props.userId} download="events.json">Export JSON</Button>
				</div>
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
					startTime={this.state.startTime}
					endTime={this.state.endTime}
					setEndTime={this.setEndTime}
					setStartTime={this.setStartTime}
	        		onHide={() => this.setModalShow(false)} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userId: state.user.userId,
		events: state.events.userEvents,
	}
}

const mapDispatchToProps = {
	reset,
	add_event_action,
	get_event_action,
	remove_event_action
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
