import React, { Component } from 'react';
import Header from './common/Header.jsx';

const Calendar = (props) => {
	return(
		<div className='main'>
			<Header history={props.history} />
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
					<div className="event-list">
						<div className="event event_1">test</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Calendar;	// <table className="time-grid">
					// 	<tr>
					// 		<td>
					// 			<div>8:00</div>
					// 			<div>8:30</div>
					// 		</td>
					// 		<td rowspan="2">awdwdawdawd</td>
					// 	</tr>
					// 	<tr>
					// 		<td>
					// 			<div>8:00</div>
					// 			<div>8:30</div>
					// 		</td>
					// 		<td rowspan="2">awdwdawdawd</td>
					// 	</tr>
					// 	<tr>
					// 		<td>8:00</td>
					// 		<td>awdwdawdawd</td>
					// 	</tr>
					// 	<tr>
					// 		<td>8:00</td>
					// 		<td>awdwdawdawd</td>
					// 	</tr>
					// </table>