import { eventAPI } from "../../api";
import history from 'history';

export const EVENT_LIST_UPDATE = 'EVENT_LIST_UPDATE';


export const add_event_action = (formData) => {
	return dispatch => {
		return eventAPI.addEvent(formData).then(res => {
			const events = res.data.user_events.sort(function (a, b) {
				if (a.top > b.top) {
					return 1;
				}
				if (a.top < b.top) {
					return -1;
				}
				// a == b
				return 0;
			});
			dispatch({ 
				type: EVENT_LIST_UPDATE,
				payload: events
			});
		})
	}
}

export const get_event_action = (user_id) => {
	return dispatch => {
		return eventAPI.getUserEvents(user_id).then(res => {
			const events = res.data.user_events.sort(function (a, b) {
				if (a.top > b.top) {
					return 1;
				}
				if (a.top < b.top) {
					return -1;
				}
				// a == b
				return 0;
			});
			dispatch({ 
				type: EVENT_LIST_UPDATE,
				payload: events
			});
		})
	}
}

export const export_event_action = (user_id) => {
	return dispatch => {
		return eventAPI.exportEvents(user_id).then(res => {
		})
	}
}