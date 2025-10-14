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

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "orders", component: OrdersListComponent },
  { path: "customers", component: CustomersListComponent },
  { path: "users", component: UsersListComponent },
  { path: "activities", component: ActivitiesListComponent },
  { path: "profile", component: ProfileComponent },
  { path: "operationals", component: OperationalsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
