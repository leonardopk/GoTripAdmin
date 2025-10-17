import { Component } from '@angular/core';
import { EquipmentService } from '../../../core/services/equipment.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-equipments-form',
  standalone: false,
  templateUrl: './equipments-form.component.html',
  styleUrl: './equipments-form.component.scss'
})
  export class EquipmentsFormComponent {

    form!: FormGroup;

    constructor(private equipmentService: EquipmentService, private router: Router, private fb: FormBuilder) {
      this.form = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]]
      })
    }
    
    formSubmited() {
      if (this.form.valid) {
        this.equipmentService.addEquipment(this.form.value);
        this.router.navigate(['/equipments']);
      }
      if (this.form.invalid) {
        this.form.markAllAsTouched();
      }
    }

    formCancelled() {
      this.router.navigate(['/equipments']);
    }
}
