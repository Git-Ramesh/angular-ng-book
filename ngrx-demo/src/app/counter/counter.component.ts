import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterState } from '../counter.state';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT } from '../counter.actions';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: [ './counter.component.css' ]
})
export class CounterComponent implements OnInit, OnDestroy {
	counterState$: Observable<number>;
	private counterStateSubscription: Subscription;
	counterSate: number;

	constructor(private store: Store<CounterState>) {
		this.counterState$ = store.select('counter');
	}

	ngOnInit() {
		this.counterStateSubscription = this.counterState$.subscribe((state) => {
			this.counterSate = state;
		});
	}

	ngOnDestroy(): void {
		this.counterStateSubscription.unsubscribe();
	}

	increment() {
		this.store.dispatch({ type: INCREMENT });
	}
	discrement() {
		this.store.dispatch({ type: DECREMENT });
	}
}
