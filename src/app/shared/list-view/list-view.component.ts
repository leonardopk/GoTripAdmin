import { Component, Input, OnInit } from '@angular/core';
import { IColumn } from '../../models/Interfaces/IColumn';

@Component({
  selector: 'app-list-view',
  standalone: false,
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {
  @Input({ required: true }) pageTitle: String = '';
  @Input({ required: true }) btnText: String = '';
  @Input() showAddBtn: boolean = true;

  @Input({ required: true }) dataListSource: any[] = [];
  @Input({ required: true }) nameColums: IColumn[] = [];
}
