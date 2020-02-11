import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
	form: formReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;