import { Component, OnInit } from '@angular/core';
import { IBooking } from '../../../models/Interfaces/iorder';
import { BookingService } from '../../../services/booking.service';
import { IBookingView } from '../../../models/Interfaces/ibooking-view';

@Component({
  selector: 'app-bookings-list',
  standalone: false,
  templateUrl: './bookings-list.component.html',
  styleUrl: './bookings-list.component.scss'
})
export class BookingsListComponent implements OnInit {
  bookings: IBookingView[] = [];

  constructor (private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookings = this.bookingService.getBookingsTableView();
  }

}
