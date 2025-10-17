import { Component } from '@angular/core';
import { OperationalService } from '../../../core/services/operational.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../../core/services/order.service';
import { EquipmentService } from '../../../core/services/equipment.service';
import { OperatorService } from '../../../core/services/operator.service';
import { IOrder } from '../../../core/models/interfaces/iorder';
import { IOperator } from '../../../core/models/interfaces/ioperator';
import { IEquipment } from '../../../core/models/interfaces/iequipment';

@Component({
  selector: 'app-operationals-form',
  standalone: false,
  templateUrl: './operationals-form.component.html',
  styleUrl: './operationals-form.component.scss'
})
export class OperationalsFormComponent {

  form!: FormGroup;
  ordersList: IOrder[] = [];
  operatorsList: IOperator[] = [];
  equipmentsList: IEquipment[] = [];

  constructor(
    private operationalService: OperationalService, 
    private router: Router,
    private fb: FormBuilder,
    private orderService: OrderService,
    private operatorService: OperatorService,
    private equipmentService: EquipmentService
  ) {
    this.ordersList = this.orderService.getOrders();
    this.operatorsList = this.operatorService.getOperators();
    this.equipmentsList = this.equipmentService.getEquipments();
    this.form = this.fb.group({
      order: ['', Validators.required],
      operator: ['', Validators.required],
      equipment: ['', Validators.required]
    })
  }

  formCancelled() {
    this.router.navigate(['/operationals']);
  }

  formSubmited() {
    if (this.form.valid) {
      this.operationalService.addOperational(this.form.value)
      this.router.navigate(['/operationals'])
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }

}
