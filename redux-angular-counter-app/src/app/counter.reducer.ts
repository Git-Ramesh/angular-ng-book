import { INCREMENT, DECREMENT } from './counter.actions';
import { AppState } from './app.state';
import { Action } from './redux';

export interface Reducer<T> {
	// tslint:disable-next-line: callable-types
	(state: T, action: Action): T;
}

export const initialState: AppState = { counter: 0 };

// Create our reducer that will handle changes to the state
export const counterReducer: Reducer<AppState> = (state: AppState = initialState, action: Action): AppState => {
	switch (action.type) {
		case INCREMENT:
			return Object.assign({}, state, { counter: state.counter + 1 });
		case DECREMENT:
			return Object.assign({}, state, { counter: state.counter - 1 });
		default:
			return state;
	}
};
