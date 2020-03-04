import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: 'order-list',
		component: OrderListComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class OrdersRoutingModule {}
