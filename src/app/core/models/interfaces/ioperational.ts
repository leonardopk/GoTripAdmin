import { IEquipment } from "./iequipment";
import { IOperator } from "./ioperator";
import { IOrder } from "./iorder";

export interface IOperational {
    order: IOrder,
    operator: IOperator,
    equipment: IEquipment
}