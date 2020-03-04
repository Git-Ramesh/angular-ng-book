interface Action {
	type: string;
	payload?: any;
}

interface Reducer<T> {
	(state: T, action: Action): T;
}

interface ListenerCallback {
	(): void;
}

interface UnsubscribeCallback {
	(): void;
}

class Store<T> {
	private _state: T;
	private _listeners: ListenerCallback[] = [];

	constructor(private reducer: Reducer<T>, initialState: T) {
		this._state = initialState;
	}

	getState(): T {
		return this._state;
	}

	dispatch(action: Action): void {
		this._state = this.reducer(this._state, action);
		this._listeners.forEach((listener: ListenerCallback) => listener());
	}
	subscribe(listener: ListenerCallback): UnsubscribeCallback {
		this._listeners.push(listener);
		return () => {
			this._listeners = this._listeners.filter((l: ListenerCallback) => l !== listener);
		};
	}
}

let reducer: Reducer<number> = (state: number, action: Action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'PLUS':
			return state + action.payload;
		case 'MINUS':
			return state - action.payload;
		default:
			return state;
	}
};
console.log(reducer);
let store: Store<number> = new Store(reducer, 0);

let unsubscribe = store.subscribe(() => {
	console.log('Subscribed:', store.getState());
});
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'PLUS', payload: 10 });

unsubscribe();
store.dispatch({ type: 'DECREMENT' });

// let reducer: Reducer<number> = (state: number, action: Action) => {
// 	return state;
// };

// console.log(reducer(0, null));
