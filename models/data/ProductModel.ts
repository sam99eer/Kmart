import { ImageSourcePropType } from "react-native";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  quantityUnit: string;
  image: ImageSourcePropType;
  description: string;
  rating: number;
  isExclusive: boolean;
  isBestSelling: boolean;
  category: "veggies" | "drinks" | "nonveg" | "basket" | "fruits";
}
