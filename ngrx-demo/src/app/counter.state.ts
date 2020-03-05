export interface CounterState {
	counter: number;
	'message': string;
}

export const initialState: CounterState = { counter: 0, message: '' };
