import { initialState } from './counter.state';
import { CounterState } from './counter.state';
import { Action } from '@ngrx/store';
import { INCREMENT, DECREMENT } from './counter.actions';

export interface Reducer<T> {
    (state T, action: Action): T;
}

export const counterReducer: Reducer<CounterState> = (state: CounterState = initialState, action: Action): AppState => {
	switch (action.type) {
		case INCREMENT:
			return Object.assign({}, state, { counter: state.counter + 1 });
		case DECREMENT:
			return Object.assign({}, state, { counter: state.counter - 1 });
		default:
			return state;
	}
};