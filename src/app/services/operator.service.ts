import { Injectable } from '@angular/core';
import { IOperator } from '../models/Interfaces/ioperator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  
  operatorsList: IOperator[] = [
    {name: 'Luciano', cpf: '102.652.989-62', phone: '(48) 99665-9663', email: 'luciano.as@gmail.com'},
    {name: 'Marcos', cpf: '201.589.145-23', phone: '(51) 95512-6512', email: 'marcos_po@hotmail.com'},
    {name: 'Letícia', cpf: '123.654.596-63', phone: '(48) 95582-1146', email: 'letícialima@gmail.com'},
    {name: 'Carol', cpf: '465.983.123-12', phone: '(48) 94125-2545', email: 'carol.silva@gmail.com'},
  ]

  getOperators(): IOperator[] {
    return this.operatorsList;
  }
  
}
