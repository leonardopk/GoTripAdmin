import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() remove = new EventEmitter;
  @Output() edit = new EventEmitter;

  get displayedAllColumns() {
    return ['index', ...this.displayedColumns.map(c => c.field), 'actions']
  }

  removeItem(element: any) {
    this.remove.emit(element);
  }

  editItem(element: any) {
    this.edit.emit(element);
  }
}
