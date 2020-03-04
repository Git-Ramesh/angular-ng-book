import { ActionCreator, Action } from './redux';

export const INCREMENT = 'INCREMENT';

export const increment: ActionCreator<Action> = () => ({
	type: INCREMENT
});

export const DECREMENT = 'DECREMENT';

export const decrement: ActionCreator<Action> = () => ({
	type: DECREMENT
});
