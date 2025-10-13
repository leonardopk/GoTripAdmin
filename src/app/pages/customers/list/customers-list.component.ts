import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  standalone: false,
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss'
})
export class CustomersListComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) buttonText!: string;
  @Input({ required: true }) buttonRoute!: string;
}
