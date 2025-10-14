import { Component, OnInit } from '@angular/core';
import { IOperator } from '../../../models/Interfaces/ioperator';
import { OperatorService } from '../../../services/operator.service';

@Component({
  selector: 'app-operators-list',
  standalone: false,
  templateUrl: './operators-list.component.html',
  styleUrl: './operators-list.component.scss'
})
export class OperatorsListComponent implements OnInit {

  operators: IOperator[] = [];

  constructor(private operatorsService: OperatorService) {}

  ngOnInit(): void {
    this.operators = this.operatorsService.getOperators();
  }

}
