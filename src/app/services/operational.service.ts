import { Injectable } from '@angular/core';
import { IOperational } from '../models/Interfaces/ioperational';
import { OrderService } from './order.service';
import { OperatorService } from './operator.service';
import { EquipmentService } from './equipment.service';
import { IOperationalView } from '../models/Interfaces/ioperational-view';

@Injectable({
  providedIn: 'root'
})
export class OperationalService {

  private operationals: IOperational[] = [];
  
  constructor (private orderService: OrderService, private operatorService: OperatorService, private equipmentService: EquipmentService) {

    const ordersList = this.orderService.getOrders();
    const operatorsList = this.operatorService.getOperators();
    const equipmentsList = this.equipmentService.getEquipments();

    this.operationals = [
      {order: ordersList[0], operator: operatorsList[2], equipment: equipmentsList[0]},
      {order: ordersList[2], operator: operatorsList[1], equipment: equipmentsList[1]},
      {order: ordersList[1], operator: operatorsList[0], equipment: equipmentsList[6]},
    ]

  }

  getOperationals(): IOperational[] {
    return this.operationals;
  }

  getOperationalsTableView(): IOperationalView[] {
    return this.operationals.map(b => ({
      date: b.order.date,
      hour: b.order.date,
      activityName: b.order.activity.name,
      equipmentName: b.equipment.name,
      operatorName: b.operator.name
    })) 
  }

}
