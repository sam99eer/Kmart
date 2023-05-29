import { IProduct } from "@models/data/ProductModel";
import { IMAGES } from "./Images";

export const PRODUCTS = [
  {
    id: "apple",
    name: "Red Apple",
    category: "fruits",
    image: IMAGES.apple,
    description:
      "These apples are a delicious, nutritious, and versatile fruit enjoyed by people for its taste. Apples are not only delicious but also rich in fiber, antioxidants, and essential vitamins like vitamin C. They are low in calories and fat, making them a healthy snack option. Apples are known to promote good digestive health, regulate blood sugar levels, and support heart health.",
    price: 150,
    quantityUnit: "per 1KG",
    rating: 5,
    isExclusive: false,
    isBestSelling: true,
  },
  {
    id: "avocado",
    name: "Avocado",
    category: "fruits",
    image: IMAGES.avocado,
    description:
      "Avocados offer a wide range of health benefits due to their nutrient-rich composition. Avocados are packed with essential nutrients, including healthy monounsaturated fats, fiber, vitamins (such as vitamin K, vitamin C, vitamin E, and several B vitamins), and minerals (including potassium and magnesium). Despite being relatively high in calories, avocados can contribute to weight management due to their high fiber and healthy fat content. The combination of fiber and monounsaturated fats helps promote satiety, reducing overeating and aiding in weight control. Avocados are an excellent source of dietary fiber.",
    price: 248,
    quantityUnit: "per 1KG",
    rating: 4,
    isExclusive: false,
    isBestSelling: false,
  },
  {
    id: "cherry",
    name: "Cherry",
    category: "fruits",
    image: IMAGES.cherry,
    description:
      "Cherries are low in calories and chock full of fiber, vitamins, minerals, nutrients, and other good-for-you ingredients. You'll get vitamins C, A, and K. Each long-stemmed fruit delivers potassium, magnesium, and calcium too. They also bring antioxidants, like beta-carotene, and the essential nutrient choline. Cherries have a rich content of antioxidants that have a lot of good effects on our health. Consumption of cherries good for you, it helps to prevent certain types of cancer, reduces inflammation, and prevents gout, brings relief from arthritic pain, and even helps to reduce belly fat. In addition to these, cherries also supports healthy sleep, reduces post-exercise muscle pain, lowers the risk of stroke and takes care of your skin and hair.",
    price: 278,
    quantityUnit: "per 250g",
    rating: 4,
    isExclusive: true,
    isBestSelling: false,
  },
] as IProduct[];
