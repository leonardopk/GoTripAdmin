import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../core/services/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
export class OrdersFormComponent implements OnInit {

  form!: FormGroup;
  customersList: ICustomer[] = [];
  activitiesList: IActivity[] = [];
  editMode = false;
  currentIndex: number | null = null;

  constructor(
    private orderService: OrderService, 
    private fb: FormBuilder, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private activityService: ActivityService
  ) {
    this.customersList = customerService.getCustomers();
    this.activitiesList = activityService.getActivities();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      customer: ['', Validators.required],
      activity: ['', Validators.required],
      numPeople: ['', [Validators.required, Validators.min(1)]],
      date: ['', Validators.required]
    })

    const index = this.activatedRoute.snapshot.paramMap.get('index');
    if (index !== null) {
      this.editMode = true;
      this.currentIndex = Number(index);
      const currentOrder = this.orderService.getOrders()[this.currentIndex]
      if (currentOrder) {
        this.form.patchValue(currentOrder);
      }
    }
  }
  
  formSubmited() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    if (this.editMode && this.currentIndex !== null) {
      this.orderService.editOrder(this.currentIndex, this.form.value)
    } else {
      this.orderService.addOrder(this.form.value)
    }

    this.router.navigate(['/orders'])
  }
  
  formCancelled() {
    this.router.navigate(['/orders']);
  }

}
