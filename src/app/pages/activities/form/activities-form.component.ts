import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../../../core/services/activity.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-activities-form',
  standalone: false,
  templateUrl: './activities-form.component.html',
  styleUrl: './activities-form.component.scss'
})
export class ActivitiesFormComponent implements OnInit {
  form!: FormGroup;
  editMode = false;
  currentIndex: number | null = null;

  constructor (private fb: FormBuilder, private activityService: ActivityService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', Validators.required],
    })

    const index = this.route.snapshot.paramMap.get('index');
    if (index !== null) {
      this.editMode = true;
      this.currentIndex = Number(index);
      const currentActivity = this.activityService.getActivities()[this.currentIndex]
      if (currentActivity) {
        this.form.patchValue(currentActivity);
      }
    }
  }

  formSubmited() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    if (this.editMode && this.currentIndex !== null) {
      this.activityService.editActivity(this.currentIndex, this.form.value)
    } else {
      this.activityService.addActivity(this.form.value)
    }

    this.router.navigate(['/activities'])
  }

  formCancelled() {
    this.router.navigate(['/activities'])
  }
}
