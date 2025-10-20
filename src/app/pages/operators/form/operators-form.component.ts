import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperatorService } from '../../../core/services/operator.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-operators-form',
  standalone: false,
  templateUrl: './operators-form.component.html',
  styleUrl: './operators-form.component.scss'
})
export class OperatorsFormComponent implements OnInit {
  
  form!: FormGroup;
  editMode = false;
  currentIndex: number | null = null;

  
  constructor(private operatorService: OperatorService, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })

    const index = this.activatedRoute.snapshot.paramMap.get('index');
    if(index !== null) {
      this.editMode = true;
      this.currentIndex = Number(index);
      const currentOperator = this.operatorService.getOperators()[this.currentIndex];
      if (currentOperator) {
        this.form.patchValue(currentOperator);
      }
    }
  }

  formSubmited() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    if (this.editMode && this.currentIndex !== null) {
      this.operatorService.editOperator(this.currentIndex, this.form.value)
    } else {
      this.operatorService.addOperator(this.form.value);
    }

    this.router.navigate(['/operators'])
  }

  formCancelled() {
    this.router.navigate(['/operators']);
  }
}
