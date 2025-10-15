import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { IOrderView } from '../../../models/Interfaces/iorder-view';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  standalone: false,
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.scss'
})
export class OrdersListComponent implements OnInit {
  orders: IOrderView[] = [];

  constructor (private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.orders = this.orderService.getOrdersTableView();
  }

  redirectToForm() {
    this.router.navigate(['/orders/new-order'])
  }

}
