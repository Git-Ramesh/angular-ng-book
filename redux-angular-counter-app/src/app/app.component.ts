import { Component, Inject } from '@angular/core';
import { AppState } from './app.state';
import { AppStore } from './app.store';
import { INCREMENT, DECREMENT } from './counter.actions';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	counter: number;
	constructor(@Inject(AppStore) private store: AppStore<AppState>) {
		store.subscribe(() => this.readState());
		this.readState();
	}
	readState() {
		const state: AppState = this.store.getState();
		this.counter = state.counter;
	}
	increment() {
		this.store.dispatch({ type: INCREMENT });
	}
	decrement() {
		this.store.dispatch({ type: DECREMENT });
	}
}
