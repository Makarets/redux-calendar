import { EVENT_LIST_UPDATE } from "./actions";

const initialState = {
	userEvents: []
}

export default function eventReducer(state = initialState, action) {
	switch (action.type) {
		case EVENT_LIST_UPDATE:
			return {
				...state,
				userEvents: action.payload
			}
		default:
			return state;
	}
}