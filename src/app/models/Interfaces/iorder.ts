import { IActivity } from "./iactivity";
import { ICustomer } from "./icustomer";

export interface IBooking {
    customer: ICustomer,
    activity: IActivity,
    numPeople: number,
    date: string
}