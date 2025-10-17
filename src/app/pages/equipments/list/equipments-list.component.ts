import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../../../core/services/equipment.service';
import { Router } from '@angular/router';
import { IEquipment } from '../../../core/models/interfaces/iequipment';

@Component({
  selector: 'app-equipments-list',
  standalone: false,
  templateUrl: './equipments-list.component.html',
  styleUrl: './equipments-list.component.scss'
})
export class EquipmentsListComponent implements OnInit {
  equipments: IEquipment[] = [];

  constructor (private equipmentService: EquipmentService, private router: Router) {}

  ngOnInit(): void {
    this.equipments = this.equipmentService.getEquipments();
  }

  redirectToForm() {
    this.router.navigate(['/equipments/new-equipment']);
  }

  removeItem(equipment: IEquipment) {
    this.equipmentService.removeEquipment(equipment);
    this.equipments = this.equipmentService.getEquipments();
  }

}
