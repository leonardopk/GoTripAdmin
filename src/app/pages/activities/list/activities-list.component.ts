import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../../core/services/activity.service';
import { Router } from '@angular/router';
import { IActivity } from '../../../core/models/interfaces/iactivity';

@Component({
  selector: 'app-activities-list',
  standalone: false,
  templateUrl: './activities-list.component.html',
  styleUrl: './activities-list.component.scss'
})
export class ActivitiesListComponent implements OnInit {

  activities: IActivity[] = [];

  constructor (private activityService: ActivityService, private router: Router) {}

  ngOnInit(): void {
    this.activities = this.activityService.getActivities()
  }

  redirectToForm() {
    this.router.navigate(['/activities/new-activity'])
  }

  removeItem(activity: IActivity) {
    this.activityService.removeActivity(activity);
    this.activities = this.activityService.getActivities();
  }

}
