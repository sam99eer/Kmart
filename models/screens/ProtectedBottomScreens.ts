import { SCREENS } from "@models/screens";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProtectedStackScreens } from "./ProtectedStackScreens";

type ProtectedBottomScreens = ProtectedStackScreens & {
  [SCREENS.SHOP]: undefined;
  [SCREENS.CART]: undefined;
  [SCREENS.EXPLORE]: undefined;
  [SCREENS.ACCOUNT]: undefined;
};

export type ShopScreenProps = NativeStackScreenProps<
  ProtectedBottomScreens,
  SCREENS.SHOP
>;

export type CartScreenProps = NativeStackScreenProps<
  ProtectedBottomScreens,
  SCREENS.CART
>;

export { ProtectedBottomScreens };
