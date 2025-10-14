import { Component, OnInit } from '@angular/core';
import { IOperationalView } from '../../../models/Interfaces/ioperational-view';
import { OperationalService } from '../../../services/operational.service';

@Component({
  selector: 'app-operationals-list',
  standalone: false,
  templateUrl: './operationals-list.component.html',
  styleUrl: './operationals-list.component.scss'
})
export class OperationalsListComponent implements OnInit {
  operationals: IOperationalView[] = [];

  constructor (private operationalService: OperationalService) {}

  ngOnInit(): void {
    this.operationals = this.operationalService.getOperationalsTableView();
    console.log(this.operationals);
  }
}
