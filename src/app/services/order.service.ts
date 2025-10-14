import { Injectable } from '@angular/core';
import { IOrder } from '../models/Interfaces/iorder';
import { CustomerService } from './customer.service';
import { ActivityService } from './activity.service';
import { IOrderView } from '../models/Interfaces/iorder-view';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: IOrder[] = [];

  constructor (private customerService: CustomerService, private activityService: ActivityService) {
    const customers = customerService.getCustomers();
    const activities = activityService.getActivities();

    this.orders = [
      {customer: customers[1], activity: activities[2], numPeople: 2, date: '2026-01-26T15:00:00Z'},
      {customer: customers[0], activity: activities[0], numPeople: 1, date: '2025-11-12T16:00:00Z'},
      {customer: customers[2], activity: activities[1], numPeople: 3, date: '2025-12-09T09:30:00Z'},
    ]
  }

  getOrders(): IOrder[] {
    return this.orders;
  }

  getOrdersTableView(): IOrderView[] {
    return this.orders.map(b => ({
      customerName: b.customer.name,
      activityName: b.activity.name,
      numPeople: b.numPeople,
      total: b.activity.price * b.numPeople,
      date: b.date
    }))
  }

}
