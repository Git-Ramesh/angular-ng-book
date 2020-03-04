import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalService } from '../external.service';

@NgModule({
	imports: [ CommonModule ],
	declarations: [],
	providers: [ ExternalService ]
})
export class ChildModule {}
