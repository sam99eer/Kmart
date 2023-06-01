import { ImageSourcePropType } from "react-native";
import { IProductCategory } from "./ProductModel";

export interface ICategoryData {
  id: string;
  name: string;
  type: IProductCategory;
  img: ImageSourcePropType;
  bgColor: string;
  borderColor: string;
}
