import { IActivity } from "./iactivity";
import { ICustomer } from "./icustomer";

export interface IOrder {
    customer: ICustomer,
    activity: IActivity,
    numPeople: number,
    date: string
}