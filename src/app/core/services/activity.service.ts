import { Injectable } from '@angular/core';
import { IActivity } from '../models/interfaces/iactivity';

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

  addActivity(activity: IActivity) {
    this.activitiesList.push(activity);
    console.log(activity)
  }

  removeActivity(activity: IActivity) {
    this.activitiesList = this.activitiesList.filter(a => a !== activity);
  }

  editActivity(index: number, newActivity: IActivity) {
    this.activitiesList[index] = newActivity;
  }

}
