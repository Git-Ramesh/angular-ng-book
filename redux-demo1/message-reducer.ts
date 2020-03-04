interface Action {
	type: string;
	payload?: any;
}

interface Reducer<T> {
	(state: T, action: Action): T;
}

interface AppState {
	messages: string[];
}

interface AddMessageAction extends Action {
	message: string;
}

interface RemoveMessageAction extends Action {
	index: number;
}

let reducer: Reducer<AppState> = (state: AppState, action: Action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return {
				messages: state.messages.concat((<AddMessageAction>action).message)
			};
		case 'REMOVE_MESSAGE':
			let index = (<RemoveMessageAction>action).index;
			let t1: Array<any> = state.messages.slice(0, index);
			let t2: Array<any> = state.messages.slice(index + 1, state.messages.length);
			return {
				messages: t1.concat(t2)
			};
		default:
			return state;
	}
};

class Store<T> {
	private _state: T;
	constructor(private reducer: Reducer<T>, initialState: T) {
		this._state = initialState;
	}

	getState(): T {
		return this._state;
	}

	dispatch(action: Action): void {
		this._state = this.reducer(this._state, action);
	}
}

let store = new Store(reducer, { messages: [] });

console.log(store.getState()); //  { messages: [] }

store.dispatch({
	type: 'ADD_MESSAGE',
	message: 'MESSAGE_1'
} as AddMessageAction);

store.dispatch({
	type: 'ADD_MESSAGE',
	message: 'MESSAGE_2'
} as AddMessageAction);

store.dispatch({
	type: 'ADD_MESSAGE',
	message: 'MESSAGE_3'
} as AddMessageAction);

store.dispatch({
	type: 'ADD_MESSAGE',
	message: 'MESSAGE_4'
} as AddMessageAction);

store.dispatch({
	type: 'ADD_MESSAGE',
	message: 'MESSAGE_5'
} as AddMessageAction);

console.log(store.getState());

store.dispatch({
	type: 'REMOVE_MESSAGE',
	index: 1
} as RemoveMessageAction);

console.log(store.getState());
