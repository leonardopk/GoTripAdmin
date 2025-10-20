import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ActivitiesListComponent } from './pages/activities/list/activities-list.component';
import { ActivitiesFormComponent } from './pages/activities/form/activities-form.component';
import { OrdersListComponent } from './pages/bookings/list/orders-list.component';
import { OrdersFormComponent } from './pages/bookings/form/orders-form.component';
import { CustomersFormComponent } from './pages/customers/form/customers-form.component';
import { CustomersListComponent } from './pages/customers/list/customers-list.component';
import { FormViewComponent } from './shared/form-view/form-view.component';
import { ListViewComponent } from './shared/list-view/list-view.component';
import { UsersListComponent } from './pages/users/list/users-list.component';
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
import { MatTableModule } from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { BaseTableComponent } from './shared/base-table/base-table.component';
import { EquipmentsFormComponent } from './pages/equipments/form/equipments-form.component';
import { EquipmentsListComponent } from './pages/equipments/list/equipments-list.component';
import { OperatorsFormComponent } from './pages/operators/form/operators-form.component';
import { OperatorsListComponent } from './pages/operators/list/operators-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CpftransformPipe } from './core/pipes/cpftransform.pipe';
import { PhoneTransformPipe } from './core/pipes/phone-transform.pipe';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    App,
    ActivitiesListComponent,
    ActivitiesFormComponent,
    OrdersListComponent,
    OrdersFormComponent,
    CustomersFormComponent,
    CustomersListComponent,
    FormViewComponent,
    ListViewComponent,
    UsersListComponent,
    SidebarComponent,
    HeaderComponent,
    ProfileComponent,
    OperationalsFormComponent,
    OperationalsListComponent,
    HomeComponent,
    BaseTableComponent,
    EquipmentsFormComponent,
    EquipmentsListComponent,
    OperatorsFormComponent,
    OperatorsListComponent,
    CpftransformPipe,
    PhoneTransformPipe,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatTableModule,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideNgxMask()
  ],
  bootstrap: [App]
})
export class AppModule { }
