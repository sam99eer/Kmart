import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "@store/slice/CartSlice";
import OrderHistorySlice from "@store/slice/OrderHistorySlice";
import { PersonalDetailsSlice } from "@store/slice/PersonalDetailsSlice";

const store = configureStore({
  reducer: {
    personalDetailsReducer: PersonalDetailsSlice.reducer,
    cartReducer: CartSlice.reducer,
    orderHistoryReducer: OrderHistorySlice.reducer,
  },
});

export type StoreModel = ReturnType<typeof store.getState>;

export default store;
