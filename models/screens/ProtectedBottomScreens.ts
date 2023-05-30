import { SCREENS } from "@models/screens";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProtectedStackScreens } from "./ProtectedStackScreens";

type ProtectedBottomScreens = ProtectedStackScreens & {
  [SCREENS.SHOP]: undefined;
};

export type ShopScreenProps = NativeStackScreenProps<
  ProtectedBottomScreens,
  SCREENS.SHOP
>;

export { ProtectedBottomScreens };
