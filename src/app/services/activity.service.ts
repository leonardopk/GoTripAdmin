import { Injectable } from '@angular/core';
import { IActivity } from '../models/Interfaces/iactivity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activitiesList: IActivity[] = [
    {name: "Voo de Balão", price: 1500.90},
    {name: "UTV", price: 560.00},
    {name: "Trilha", price: 450.90},
    {name: "4x4 Off Road", price: 699.00}
  ]

  getActivities(): IActivity[] {
    return this.activitiesList;
  }

}
