import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../../../core/services/equipment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-equipments-form',
  standalone: false,
  templateUrl: './equipments-form.component.html',
  styleUrl: './equipments-form.component.scss'
})
export class EquipmentsFormComponent implements OnInit {
  form!: FormGroup;
  editMode = false;
  currentIndex: number | null = null;

  constructor(private equipmentService: EquipmentService, private router: Router, private fb: FormBuilder, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    })

    const index = this.activatedRoute.snapshot.paramMap.get('index');
    if(index !== null) {
      this.editMode = true;
      this.currentIndex = Number(index);
      const currentEquipment = this.equipmentService.getEquipments()[this.currentIndex];
      if (currentEquipment) {
        this.form.patchValue(currentEquipment);
      }
    }
  }
  
  formSubmited() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    if (this.editMode && this.currentIndex !== null) {
      this.equipmentService.editEquipment(this.currentIndex, this.form.value)
    } else {
      this.equipmentService.addEquipment(this.form.value);
    }

    this.router.navigate(['/equipments'])
  }

  formCancelled() {
    this.router.navigate(['/equipments']);
  }
}
