import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "@store/slice/CartSlice";
import { PersonalDetailsSlice } from "@store/slice/PersonalDetailsSlice";

const store = configureStore({
  reducer: {
    personalDetailsReducer: PersonalDetailsSlice.reducer,
    cartReducer: CartSlice.reducer,
  },
});

export type StoreModel = ReturnType<typeof store.getState>;

export default store;
