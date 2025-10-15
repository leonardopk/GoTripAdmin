import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesFormComponent } from './pages/activities/form/activities-form.component';
import { OrdersListComponent } from './pages/bookings/list/orders-list.component';
import { UsersListComponent } from './pages/users/list/users-list.component';
import { CustomersListComponent } from './pages/customers/list/customers-list.component';
import { ActivitiesListComponent } from './pages/activities/list/activities-list.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OperationalsListComponent } from './pages/operationals/list/operationals-list.component';
import { HomeComponent } from './pages/home/home.component';
import { EquipmentsListComponent } from './pages/equipments/list/equipments-list.component';
import { OperatorsListComponent } from './pages/operators/list/operators-list.component';
import { OrdersFormComponent } from './pages/bookings/form/orders-form.component';
import { OperationalsFormComponent } from './pages/operationals/form/operationals-form.component';
import { EquipmentsFormComponent } from './pages/equipments/form/equipments-form.component';
import { OperatorsFormComponent } from './pages/operators/form/operators-form.component';
import { CustomersFormComponent } from './pages/customers/form/customers-form.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "activities", component: ActivitiesListComponent},
  { path: "activities/new-activity", component: ActivitiesFormComponent},
  { path: "orders", component: OrdersListComponent },
  { path: "orders/new-order", component: OrdersFormComponent },
  { path: "customers", component: CustomersListComponent },
  { path: "customers/new-customer", component: CustomersFormComponent },
  { path: "operationals", component: OperationalsListComponent },
  { path: "operationals/new-operational", component: OperationalsFormComponent },
  { path: "equipments", component: EquipmentsListComponent },
  { path: "equipments/new-equipment", component: EquipmentsFormComponent },
  { path: "operators", component: OperatorsListComponent },
  { path: "operators/new-operator", component: OperatorsFormComponent },
  { path: "users", component: UsersListComponent },
  { path: "profile", component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
