import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../core/services/order.service';
import { Router } from '@angular/router';
import { IOrderView } from '../../../core/models/interfaces/iorder-view';

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

  removeItem(orderView: IOrderView) {
    this.orderService.removeOrder(orderView);
    this.orders = this.orderService.getOrdersTableView();
  }

}
