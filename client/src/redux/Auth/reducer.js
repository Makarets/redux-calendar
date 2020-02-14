import { ON_LOGIN, ON_LOGOUT } from "./actions";

const initialState = {
	isAuth: false,
	userId: ''
}

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case ON_LOGIN:
			return {
				...state,
				isAuth: true,
				userId: action.payload
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