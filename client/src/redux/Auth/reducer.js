import { ON_LOGIN, ON_LOGOUT } from "./actions";

const initialState = {
	isAuth: false
}

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case ON_LOGIN:
			return {
				...state,
				isAuth: true
			}
		case ON_LOGOUT:
			return {
				...state,
				isAuth: false
			}
		default:
			return state;
	}
}