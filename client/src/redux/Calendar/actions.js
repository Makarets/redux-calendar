import { eventAPI } from "../../api";
import history from 'history';

export const EVENT_LIST_UPDATE = 'EVENT_LIST_UPDATE';


export const add_event_action = (formData) => {
	return dispatch => {
		return eventAPI.addEvent(formData).then(res => {
			dispatch({ 
				type: EVENT_LIST_UPDATE,
				payload: res.data.user_events
			});
		})
	}
}

export const remove_event_action = (user_id, event_id) => {
	return dispatch => {
		return eventAPI.removeEvent(user_id, event_id).then(res => {
			dispatch({ 
				type: EVENT_LIST_UPDATE,
				payload: res.data.user_events
			});
		})
	}
}

export const get_event_action = (user_id) => {
	return dispatch => {
		return eventAPI.getUserEvents(user_id).then(res => {
			dispatch({ 
				type: EVENT_LIST_UPDATE,
				payload: res.data.user_events
			});
		})
	}
}