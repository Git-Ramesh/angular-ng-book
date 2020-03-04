import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
	imports: [ CommonModule, CustomersRoutingModule ],
	declarations: [ CustomerListComponent ]
	// exports: [ CustomerListComponent ]
})
export class CustomersModule {}
