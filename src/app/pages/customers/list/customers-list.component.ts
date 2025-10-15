import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from '../../../models/Interfaces/icustomer';
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  standalone: false,
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss'
})
export class CustomersListComponent implements OnInit {
  customers: ICustomer[] = [];

  constructor (private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }

  redirectToForm() {
    this.router.navigate(['/customers/new-customer'])
  }

}
