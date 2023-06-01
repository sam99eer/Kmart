import { ICart } from "./CartModel";

export interface IOrderHistory {
  order_id: string;
  items: ICart[];
}
