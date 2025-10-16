import { Component, Input, OnInit } from '@angular/core';
import { IColumn } from '../../core/models/interfaces/icolumn';

@Component({
  selector: 'app-base-table',
  standalone: false,
  templateUrl: './base-table.component.html',
  styleUrl: './base-table.component.scss'
})
export class BaseTableComponent {
  @Input({ required: true }) dataList: any[] = [];
  @Input({ required: true }) displayedColumns: IColumn[] = []

  get displayedAllColumns() {
    return ['index', ...this.displayedColumns.map(c => c.field), 'actions']
  }
}
