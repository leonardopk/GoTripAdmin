import { Component, OnInit } from '@angular/core';
import { OperationalService } from '../../core/services/operational.service';
import { OrderService } from '../../core/services/order.service';
import { CustomerService } from '../../core/services/customer.service';
import { ActivityService } from '../../core/services/activity.service';
import { EquipmentService } from '../../core/services/equipment.service';
import { OperatorService } from '../../core/services/operator.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  qtd_operationals!: number;
  qtd_orders!: number;
  qtd_customers!: number;
  qtd_activities!: number;
  qtd_equipments!: number;
  qtd_operators!: number;

  constructor (
    private operationalService: OperationalService,
    private orderService: OrderService,
    private customerService: CustomerService,
    private activityService: ActivityService,
    private equipmentService: EquipmentService,
    private operatorService: OperatorService
  ) {}

  ngOnInit(): void {
    this.qtd_operationals = this.operationalService.getOperationals().length;
    this.qtd_customers = this.customerService.getCustomers().length;
    this.qtd_activities = this.activityService.getActivities().length;
    this.qtd_equipments = this.equipmentService.getEquipments().length;
    this.qtd_operators = this.operatorService.getOperators().length;
    this.qtd_orders = this.orderService.getOrders().length;
  }
}
