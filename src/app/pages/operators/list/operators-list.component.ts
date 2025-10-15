import { Component, OnInit } from '@angular/core';
import { IOperator } from '../../../models/Interfaces/ioperator';
import { OperatorService } from '../../../services/operator.service';
import { Router } from '@angular/router';

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

}
