import { Injectable } from '@angular/core';
import { IOperator } from '../models/interfaces/ioperator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  
  operatorsList: IOperator[] = [
    {name: 'Luciano', cpf: "10265298962", phone: '48996659663', email: 'luciano.as@gmail.com'},
    {name: 'Marcos', cpf: "20158914523", phone: '51955126512', email: 'marcos_po@hotmail.com'},
    {name: 'Letícia', cpf: "12365459663", phone: '48955821146', email: 'letícialima@gmail.com'},
    {name: 'Carol', cpf: "46598312312", phone: '48941252545', email: 'carol.silva@gmail.com'},
  ]

  getOperators(): IOperator[] {
    return this.operatorsList;
  }

  addOperator(operator: IOperator) {
    this.operatorsList.push(operator);
  }

  removeOperator(operator: IOperator) {
    this.operatorsList = this.operatorsList.filter(a => a !== operator);
  }
  
}
