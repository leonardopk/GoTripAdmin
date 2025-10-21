import { Injectable } from '@angular/core';
import { ICustomer } from '../models/interfaces/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customersList: ICustomer[] = [
    {name: "Leonardo", cpf: "108.485.829-00", email: "leonardopk88@hotmail.com", birthday: "1997-04-22T00:00:00Z"},
    {name: "João", cpf: "452.658.968-62", email: "joaom.silva@gmail.com", birthday: "1998-05-12T00:00:00Z"},
    {name: "Maria", cpf: "219.645.312-25", email: "maria_asouza@gmail.com", birthday: "1994-11-09T00:00:00Z"}
  ];

  getCustomers() {
    return this.customersList;
  }

  addCustomer(customer: ICustomer) {
    this.customersList.push(customer);
  }

  removeCustomer(customer: ICustomer) {
    this.customersList = this.customersList.filter(a => a !== customer);
  }

  editCustomer(index: number, customer: ICustomer) {
    this.customersList[index] = customer;
  }
}