import { Component, OnInit } from '@angular/core';
import { OperationalService } from '../../../core/services/operational.service';
import { Router } from '@angular/router';
import { IOperationalView } from '../../../core/models/interfaces/ioperational-view';
import { IOperational } from '../../../core/models/interfaces/ioperational';

@Component({
  selector: 'app-operationals-list',
  standalone: false,
  templateUrl: './operationals-list.component.html',
  styleUrl: './operationals-list.component.scss'
})
export class OperationalsListComponent implements OnInit {
  operationalsView: IOperationalView[] = [];
  operationals: IOperational[] = [];


  constructor (private operationalService: OperationalService, private router: Router) {}

  ngOnInit(): void {
    this.operationalsView = this.operationalService.getOperationalsTableView();
    this.operationals = this.operationalService.getOperationals();
  }

  redirectToForm() {
    this.router.navigate(['/operationals/new-operational'])
  }

  removeItem(operationalView: IOperationalView) {
    this.operationalService.removeOperational(operationalView);
    this.operationalsView = this.operationalService.getOperationalsTableView();
  }

  editItem(operationalView: IOperationalView) {
    const index = this.operationals.findIndex(o =>
    o.order.activity.name === operationalView.activityName &&
    o.operator.name === operationalView.operatorName &&
    o.equipment.name === operationalView.equipmentName &&
    o.order.date === operationalView.date
  );

  if (index !== -1) {
    this.router.navigate(['/operationals/edit', index]);
  }
  }
}
