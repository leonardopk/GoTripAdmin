import { Component, OnInit } from '@angular/core';
import { IActivity } from '../../../models/Interfaces/iactivity';
import { ActivityService } from '../../../services/activity.service';

@Component({
  selector: 'app-activities-list',
  standalone: false,
  templateUrl: './activities-list.component.html',
  styleUrl: './activities-list.component.scss'
})
export class ActivitiesListComponent implements OnInit {

  activities: IActivity[] = [];

  constructor (private activityService: ActivityService) {}

  ngOnInit(): void {
    this.activities = this.activityService.getActivities()
  }

}
