import { Injectable } from '@angular/core';
import { IBooking } from '../models/Interfaces/iorder';
import { CustomerService } from './customer.service';
import { ActivityService } from './activity.service';
import { IBookingView } from '../models/Interfaces/ibooking-view';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookings: IBooking[] = [];

  constructor (private customerService: CustomerService, private activityService: ActivityService) {
    const customers = customerService.getCustomers();
    const activities = activityService.getActivities();

    this.bookings = [
      {customer: customers[1], activity: activities[2], numPeople: 2, date: '2026-01-26T15:00:00Z'},
      {customer: customers[0], activity: activities[0], numPeople: 1, date: '2025-11-12T16:00:00Z'},
      {customer: customers[2], activity: activities[1], numPeople: 3, date: '2025-12-09T09:30:00Z'},
    ]
  }

  getBookings(): IBooking[] {
    return this.bookings;
  }

  getBookingsTableView(): IBookingView[] {
    return this.bookings.map(b => ({
      customerName: b.customer.name,
      activityName: b.activity.name,
      numPeople: b.numPeople,
      total: b.activity.price * b.numPeople,
      date: b.date
    }))
  }

}
