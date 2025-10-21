import { Component, OnInit, signal } from '@angular/core';
import { OrderService } from './core/services/order.service';
import { OperationalService } from './core/services/operational.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('GoTripAdmin');

  constructor (private orderService: OrderService, private operationalService: OperationalService) {}

  ngOnInit(): void {
    this.orderService.initializeOrders();
    this.operationalService.initializerOperationals()
  }
}
