import { Component } from '@angular/core';
import { OrderService } from '../../../core/services/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../../core/services/customer.service';
import { ActivityService } from '../../../core/services/activity.service';
import { ICustomer } from '../../../core/models/interfaces/icustomer';
import { IActivity } from '../../../core/models/interfaces/iactivity';

@Component({
  selector: 'app-orders-form',
  standalone: false,
  templateUrl: './orders-form.component.html',
  styleUrl: './orders-form.component.scss'
})
export class OrdersFormComponent {

  form!: FormGroup;
  customersList: ICustomer[] = [];
  activitiesList: IActivity[] = [];

  constructor(
    private orderService: OrderService, 
    private fb: FormBuilder, 
    private router: Router,
    private customerService: CustomerService,
    private activityService: ActivityService
  ) {
    this.customersList = customerService.getCustomers();
    this.activitiesList = activityService.getActivities();
    this.form = this.fb.group({
      customer: ['', Validators.required],
      activity: ['', Validators.required],
      numPeople: ['', Validators.required],
      date: ['', Validators.required]
    })
  }
  
  formSubmited() {
    if (this.form.valid) {
      this.orderService.addOrder(this.form.value);
      this.router.navigate(['/orders']);
    }
  }
  
  formCancelled() {
    this.router.navigate(['/orders']);
  }

}
