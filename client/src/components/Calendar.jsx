import React, { Component } from 'react';
import Header from './common/Header.jsx';

const Calendar = (props) => {
	return(
		<div className='main'>
			<Header />
			<div className='app-content'>calendar</div>
		</div>
	);
}

export default Calendar;