import { PRODUCTS } from "@data/Products";

export const EXCLUSIVE_PRODUCTS = PRODUCTS.filter(
  (item) => item.isExclusive === true
);

export const BEST_SELLING_PRODUCTS = PRODUCTS.filter(
  (item) => item.isBestSelling === true
);
