import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../core/services/order.service';
import { Router } from '@angular/router';
import { IOrderView } from '../../../core/models/interfaces/iorder-view';
import { IOrder } from '../../../core/models/interfaces/iorder';

@Component({
  selector: 'app-orders-list',
  standalone: false,
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.scss'
})
export class OrdersListComponent implements OnInit {
  ordersView: IOrderView[] = [];
  orders: IOrder[] = [];

  constructor (private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.ordersView = this.orderService.getOrdersTableView();
    this.orders = this.orderService.getOrders();
  }

  redirectToForm() {
    this.router.navigate(['/orders/new-order'])
  }

  removeItem(orderView: IOrderView) {
    this.orderService.removeOrder(orderView);
    this.ordersView = this.orderService.getOrdersTableView();
  }

  editItem(orderView: IOrderView) {
    const index = this.orders.findIndex(o =>
    o.customer.name === orderView.customerName &&
    o.activity.name === orderView.activityName &&
    o.date === orderView.date
  );

  if (index !== -1) {
    this.router.navigate(['/orders/edit', index]);
  };
  }

}
