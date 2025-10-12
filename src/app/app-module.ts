import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ActivitiesListComponent } from './pages/activities/list/activities-list.component';
import { ActivitiesFormComponent } from './pages/activities/form/activities-form.component';
import { BookingsListComponent } from './pages/bookings/list/bookings-list.component';
import { BookingsFormComponent } from './pages/bookings/form/bookings-form.component';
import { CustomersFormComponent } from './pages/customers/form/customers-form.component';
import { CustomersListComponent } from './pages/customers/list/customers-list.component';
import { FormViewComponent } from './shared/form-view/form-view.component';
import { ListViewComponent } from './shared/list-view/list-view.component';
import { UsersListComponent } from './pages/users/list/users-list.component';
import { UsersFormComponent } from './pages/users/form/users-form.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { OperationalsFormComponent } from './pages/operationals/form/operationals-form.component';
import { OperationalsListComponent } from './pages/operationals/list/operationals-list.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    App,
    ActivitiesListComponent,
    ActivitiesFormComponent,
    BookingsListComponent,
    BookingsFormComponent,
    CustomersFormComponent,
    CustomersListComponent,
    FormViewComponent,
    ListViewComponent,
    UsersListComponent,
    UsersFormComponent,
    SidebarComponent,
    HeaderComponent,
    ProfileComponent,
    OperationalsFormComponent,
    OperationalsListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
