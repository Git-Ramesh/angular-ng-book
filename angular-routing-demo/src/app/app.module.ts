import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AUTH_PROVIDERS } from './auth.service';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './LoggedInGuard';

@NgModule({
  declarations: [
    AppComponent,
    routeComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LoggedInGuard, useClass: LoggedInGuard},
    // uncomment this for "hash-bang" routing
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
