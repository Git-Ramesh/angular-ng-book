import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderListComponent } from './orders/order-list/order-list.component';

const routes: Routes = [
	// {
	// 	path: '',
	// 	redirectTo: '/employees',
	// 	pathMatch: 'full'
	// },
	// {
	// 	path: 'employees',
	// 	component: EmployeeListComponent
	// },
	{
		path: 'customer-list',
		// component: CustomerListComponent
		loadChildren: () => import('./customers/customers.module').then((m) => m.CustomersModule)
	},
	{
		path: 'order-list',
		loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule)
		// component: OrderListComponent
	}
	// {
	// 	path: '**',
	// 	component: PageNotFoundComponent
	// }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
