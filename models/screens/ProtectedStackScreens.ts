import { IProduct } from "@models/data/ProductModel";
import { SCREENS } from "@models/screens";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ProtectedStackScreens = {
  [SCREENS.DASHBOARD]: undefined;
  [SCREENS.CATEGORY_DATA]: { data: IProduct[]; headerText: string };
  [SCREENS.PRODUCT_DETAILS]: { data: IProduct };
};

export type CategoryDataScreenProps = NativeStackScreenProps<
  ProtectedStackScreens,
  SCREENS.CATEGORY_DATA
>;

export type ProductDetailsDataScreenProps = NativeStackScreenProps<
  ProtectedStackScreens,
  SCREENS.PRODUCT_DETAILS
>;

export { ProtectedStackScreens };
