import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../core/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-form',
  standalone: false,
  templateUrl: './customers-form.component.html',
  styleUrl: './customers-form.component.scss'
})
export class CustomersFormComponent {
  form!: FormGroup;

  constructor (private fb: FormBuilder, private customerService: CustomerService, private router: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required]
    })
  }
  
  formSubmited() {
    if (this.form.valid) {
      this.customerService.addCustomer(this.form.value);
      this.router.navigate(['/customers'])
    }
  }

  formCancelled() {
    this.router.navigate(['/customers'])
  }

}
