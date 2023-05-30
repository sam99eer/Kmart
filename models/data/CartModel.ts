import { IProduct } from "@models/data/ProductModel";

type CartProduct = Omit<
  IProduct,
  "description" | "rating" | "isExclusive" | "isBestSelling" | "category"
>;

export type CartQuantityAction = "add" | "remove";

export interface ICart extends CartProduct {
  quantity: number;
}
