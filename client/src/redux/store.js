import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './Auth/reducer';
import eventReducer from './Calendar/reducer';

const reducers = combineReducers({
	user: authReducer,
    events: eventReducer,
	form: formReducer
});


const saveState = (state) => {
    try {
        // Convert the state to a JSON string 
        const serialisedState = JSON.stringify(state);

        // Clone state
        const stateClone = JSON.parse(serialisedState);
        delete stateClone.form;
        delete stateClone.events;
        
        // Save the serialised state to localStorage against the key 'app_state'
        window.localStorage.setItem('app_state', JSON.stringify(stateClone));
    } catch (err) {
        // Log errors here, or ignore
    }
};

const loadState = () => {
    try {
        // Load the data saved in localStorage, against the key 'app_state'
        const serialisedState = window.localStorage.getItem('app_state');

        // Passing undefined to createStore will result in our app getting the default state
        // If no data is saved, return undefined
        if (!serialisedState) return undefined;

        // De-serialise the saved state.
        const deserialiseState = JSON.parse(serialisedState);

        // remove forms and events state, and return it.
        delete deserialiseState.form;
        delete deserialiseState.events;
        return deserialiseState;
    } catch (err) {
        // Return undefined if localStorage is not available, 
        // or data could not be de-serialised, 
        // or there was some other error
        return undefined;
    }
};


/**
 * This is where you create the app store
 */
const oldState = loadState();
const store = createStore(reducers, oldState, composeWithDevTools(applyMiddleware(thunk)));

/**
 * Add a change listener to the store, and invoke our saveState function defined above.
 */
store.subscribe(() => {
    saveState(store.getState());
});

export default store;