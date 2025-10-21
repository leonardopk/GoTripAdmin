import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../core/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customers-form',
  standalone: false,
  templateUrl: './customers-form.component.html',
  styleUrl: './customers-form.component.scss'
})
export class CustomersFormComponent implements OnInit {
  
  form!: FormGroup;
  editMode = false;
  currentIndex: number | null = null;

  constructor (private fb: FormBuilder, private customerService: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required]
    })

    const index = this.activatedRoute.snapshot.paramMap.get('index');
    if(index !== null) {
      this.editMode = true;
      this.currentIndex = Number(index);
      const currentCustomer = this.customerService.getCustomers()[this.currentIndex];
      if (currentCustomer) {
        this.form.patchValue(currentCustomer);
      }
    }
  }

  formSubmited() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    if (this.editMode && this.currentIndex !== null) {
      this.customerService.editCustomer(this.currentIndex, this.form.value)
    } else {
      this.customerService.addCustomer(this.form.value);
    }

    this.router.navigate(['/customers'])
  }

  formCancelled() {
    this.router.navigate(['/customers'])
  }

}
