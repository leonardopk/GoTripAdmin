import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperatorService } from '../../../core/services/operator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operators-form',
  standalone: false,
  templateUrl: './operators-form.component.html',
  styleUrl: './operators-form.component.scss'
})
export class OperatorsFormComponent {
  
  form!: FormGroup;
  
  constructor(private operatorService: OperatorService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  formSubmited() {
    if (this.form.valid) {
      this.operatorService.addOperator(this.form.value)
      this.router.navigate(['/operators'])
    }
  }

  formCancelled() {
    this.router.navigate(['/operators']);
  }
}
