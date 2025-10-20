import { Component, OnInit } from '@angular/core';
import { OperationalService } from '../../../core/services/operational.service';
import { ActivatedRoute, Router } from '@angular/router';
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
export class OperationalsFormComponent implements OnInit {

  form!: FormGroup;
  ordersList: IOrder[] = [];
  operatorsList: IOperator[] = [];
  equipmentsList: IEquipment[] = [];
  editMode = false;
  currentIndex: number | null = null;

  constructor(
    private operationalService: OperationalService, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private orderService: OrderService,
    private operatorService: OperatorService,
    private equipmentService: EquipmentService
  ) {
    this.ordersList = this.orderService.getOrders();
    this.operatorsList = this.operatorService.getOperators();
    this.equipmentsList = this.equipmentService.getEquipments();
    
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      order: ['', Validators.required],
      operator: ['', Validators.required],
      equipment: ['', Validators.required]
    })

    const index = this.activatedRoute.snapshot.paramMap.get('index');
    if (index !== null) {
      this.editMode = true;
      this.currentIndex = Number(index);
      const currentOperational = this.operationalService.getOperationals()[this.currentIndex]
      if (currentOperational) {
        this.form.patchValue(currentOperational);
      }
    }
  }

  formCancelled() {
    this.router.navigate(['/operationals']);
  }

  formSubmited() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    if (this.editMode && this.currentIndex !== null) {
      this.operationalService.editOperational(this.currentIndex, this.form.value)
    } else {
      this.operationalService.addOperational(this.form.value)
    }

    this.router.navigate(['/operationals'])
  }

}
