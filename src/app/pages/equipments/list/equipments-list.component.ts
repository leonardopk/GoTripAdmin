import { Component, OnInit } from '@angular/core';
import { IEquipment } from '../../../models/Interfaces/iequipment';
import { EquipmentService } from '../../../services/equipment.service';

@Component({
  selector: 'app-equipments-list',
  standalone: false,
  templateUrl: './equipments-list.component.html',
  styleUrl: './equipments-list.component.scss'
})
export class EquipmentsListComponent implements OnInit {
  equipments: IEquipment[] = [];

  constructor (private equipmentService: EquipmentService) {}

  ngOnInit(): void {
    this.equipments = this.equipmentService.getEquipments();
  }

}
