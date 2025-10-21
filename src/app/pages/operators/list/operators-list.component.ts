import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../../core/services/operator.service';
import { Router } from '@angular/router';
import { IOperator } from '../../../core/models/interfaces/ioperator';

@Component({
  selector: 'app-operators-list',
  standalone: false,
  templateUrl: './operators-list.component.html',
  styleUrl: './operators-list.component.scss'
})
export class OperatorsListComponent implements OnInit {

  operators: IOperator[] = [];

  constructor(private operatorsService: OperatorService, private router: Router) {}

  ngOnInit(): void {
    this.operators = this.operatorsService.getOperators();
  }

  redirectToForm() {
    this.router.navigate(['/operators/new-operator'])
  }

  removeItem(operator: IOperator) {
    this.operatorsService.removeOperator(operator);
    this.operators = this.operatorsService.getOperators();
  }

  editItem(operator: IOperator) {
    const index: number = this.operators.indexOf(operator);
    this.router.navigate(['/operators/edit/', index])
  }
}
