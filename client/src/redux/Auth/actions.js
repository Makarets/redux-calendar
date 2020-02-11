import { authAPI } from "../../api";
import history from 'history';
import { SubmissionError } from 'redux-form';

export const ON_LOGIN = 'ON_LOGIN';
export const ON_LOGOUT = 'ON_LOGOUT';

// export const login_action = () => ({
// 	type: ON_LOGIN
// });

export const logout_action = () => ({
	type: ON_LOGOUT
});


// return login(formData).then(res => {
// 			this.props.history.push('/');
// 			this.props.login_action();
// 		}).catch((err) => {
// 			console.log(err.response.data);
// 			let name = err.response.data.error_field;
// 			let message = err.response.data.message;
// 			throw new SubmissionError({[name]: message});
// 		})


export const login_action = (formData, history) => {
	return dispatch => {
		return authAPI.login(formData).then(res => {
			history.push('/');
			dispatch({ type: ON_LOGIN });
		}).catch((err) => {
			console.log(err);
			let name = err.response.data.error_field;
			let message = err.response.data.message;
			throw new SubmissionError({[name]: message});
		})
	}
}