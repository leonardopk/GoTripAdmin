import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../../../core/services/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities-form',
  standalone: false,
  templateUrl: './activities-form.component.html',
  styleUrl: './activities-form.component.scss'
})
export class ActivitiesFormComponent implements OnInit {
  form!: FormGroup;

  constructor (private fb: FormBuilder, private activityService: ActivityService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', Validators.required],
    })
  }

  formSubmited() {
    if (this.form.valid) {
      this.activityService.addActivity(this.form.value)
      this.router.navigate(['/activities'])
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }

  formCancelled() {
    this.router.navigate(['/activities'])
  }
}
