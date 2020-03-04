import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestService } from './test.service';
import { ChildModule } from './child/child.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, ChildModule ],
	providers: [ TestService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
