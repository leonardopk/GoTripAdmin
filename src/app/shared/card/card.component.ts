import { Component, Input, OnInit } from '@angular/core';
import { OperationalService } from '../../core/services/operational.service';
import { OrderService } from '../../core/services/order.service';
import { CustomerService } from '../../core/services/customer.service';
import { ActivityService } from '../../core/services/activity.service';
import { EquipmentService } from '../../core/services/equipment.service';
import { OperatorService } from '../../core/services/operator.service';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) cardIcon!: string;
  @Input({ required: true }) cardText!: string;
  @Input({ required: true }) data!: number;
  @Input() cardBackgroundColor!: string;
  @Input() cardFontColor!: string;

}
