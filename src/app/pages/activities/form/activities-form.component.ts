import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../../../services/activity.service';

@Component({
  selector: 'app-activities-form',
  standalone: false,
  templateUrl: './activities-form.component.html',
  styleUrl: './activities-form.component.scss'
})
export class ActivitiesFormComponent implements OnInit {
  form!: FormGroup;

  constructor (private fb: FormBuilder, private activityService: ActivityService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', Validators.required]
    })
  }

  formSubmited() {
    this.activityService.addActivity(this.form.value)
  }
}
