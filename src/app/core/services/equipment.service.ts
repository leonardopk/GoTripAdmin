import { Injectable } from '@angular/core';
import { IEquipment } from '../models/interfaces/iequipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  equipmentsList: IEquipment[] = [
    {name: 'Sem Equipamento'},
    {name: 'UTV Branco'},
    {name: 'UTV Preto'},
    {name: 'Land 4x4 Branca'},
    {name: 'Land 4x4 Verde'},
    {name: 'Balão Colorido'},
    {name: 'Balão azul'},
  ]

  getEquipments(): IEquipment[] {
    return this.equipmentsList;
  }

  addEquipment(equipment: IEquipment) {
    this.equipmentsList.push(equipment);
  }
  
}
