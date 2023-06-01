import { IMAGES } from "@constants/Images";
import { ICategoryData } from "@models/data/CategoryDataModel";

export const CATEGORY_DATA: ICategoryData[] = [
  {
    id: "category_veggies",
    name: "Vegetables",
    type: "veggies",
    bgColor: "rgba(83, 177, 117, 0.1)",
    borderColor: "rgba(83, 177, 117, 0.7)",
    img: IMAGES.VeggiesMain,
  },
  {
    id: "category_fruits",
    name: "Fruits",
    type: "fruits",
    bgColor: "rgba(248, 164, 76, 0.1)",
    borderColor: "rgba(248, 164, 76, 0.7)",
    img: IMAGES.FruitsMain,
  },
  {
    id: "category_drinks",
    name: "Beverages",
    type: "drinks",
    bgColor: "rgba(183, 223, 245, 0.25)",
    borderColor: "#B7DFF5",
    img: IMAGES.BeveragesMain,
  },
  {
    id: "category_basket",
    name: "Baskets",
    type: "basket",
    bgColor: "rgba(211, 176, 224, 0.25)",
    borderColor: "#D3B0E0",
    img: IMAGES.BasketsMain,
  },
  {
    id: "category_meat",
    name: "Non Vegetarian",
    type: "nonveg",
    bgColor: "rgba(247, 165, 147, 0.25)",
    borderColor: "#F7A593",
    img: IMAGES.NonvegMain,
  },
];
