import CartSlice from "@store/slice/CartSlice";
import OrderHistorySlice from "@store/slice/OrderHistorySlice";
import { PersonalDetailsSlice } from "@store/slice/PersonalDetailsSlice";

export const personalDetailsActions = PersonalDetailsSlice.actions;
export const cartActions = CartSlice.actions;
export const orderHistoryActions = OrderHistorySlice.actions;
