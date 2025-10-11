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
import {MatSidenavModule} from '@angular/material/sidenav';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
