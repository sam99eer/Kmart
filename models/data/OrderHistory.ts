import { ICart } from "./CartModel";

export interface IOrderHistory {
  order_id: string;
  date: string;
  time: string;
  total_cost: number;
  items: ICart[];
}
