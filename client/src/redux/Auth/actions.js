import { authAPI } from "../../api";
import history from 'history';
import { SubmissionError } from 'redux-form';

export const ON_LOGIN = 'ON_LOGIN';
export const ON_LOGOUT = 'ON_LOGOUT';

export const logout_action = () => ({
	type: ON_LOGOUT
});

export const signup_action = (formData, history) => {
	return dispatch => {
		return authAPI.signup(formData).then(res => {
			history.push('/login');
		}).catch((err) => {
			let name = err.response.data.error_field;
			let message = err.response.data.message;
			throw new SubmissionError({[name]: message});
		})
	}
}

export const login_action = (formData, history) => {
	return dispatch => {
		return authAPI.login(formData).then(res => {
			history.push('/');
			localStorage.setItem('user_id', res.data.user_id);
			dispatch({
				type: ON_LOGIN,
				payload: res.data.user_id
			});
		}).catch((err) => {
			let name = err.response.data.error_field;
			let message = err.response.data.message;
			throw new SubmissionError({[name]: message});
		})
	}
}