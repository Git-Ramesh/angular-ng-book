import { Reducer, counterReducer } from './counter.reducer';
import { Action } from './redux';
import { AppState } from './app.state';

type ListenerCallback = () => void;

type UnsubscribeCallback = () => void;

export class AppStore<T> {
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

export function createAppStore(): AppStore<AppState> {
	return new AppStore(counterReducer, { counter: 0 } as AppState);
}

export const appStoreProviders = [ { provide: AppStore, useFactory: createAppStore } ];
