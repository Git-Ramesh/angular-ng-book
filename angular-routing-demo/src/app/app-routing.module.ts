import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoggedInGuard } from './LoggedInGuard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/departments', pathMatch: 'full'},
  {path: 'departments', component: DepartmentListComponent, canActivate: [LoggedInGuard]},
  {path: 'employees',
   component: EmployeeListComponent},
   {path: 'login', component: LoginComponent},
  {path: 'departments/:id',
   component: DepartmentDetailsComponent,
   children: [
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'about-us', component: AboutUsComponent},
  ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents: any[] = [DepartmentListComponent,
                                       DepartmentDetailsComponent,
                                       EmployeeListComponent,
                                       PageNotFoundComponent, 
                                       ContactUsComponent, 
                                       AboutUsComponent, 
                                       LoginComponent];
