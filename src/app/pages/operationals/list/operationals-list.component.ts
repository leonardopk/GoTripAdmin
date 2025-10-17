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
  operationals: IOperationalView[] = [];

  constructor (private operationalService: OperationalService, private router: Router) {}

  ngOnInit(): void {
    this.operationals = this.operationalService.getOperationalsTableView();
  }

  redirectToForm() {
    this.router.navigate(['/operationals/new-operational'])
  }

  removeItem(operationalView: IOperationalView) {
    this.operationalService.removeOperational(operationalView);
    this.operationals = this.operationalService.getOperationalsTableView();
  }
}
