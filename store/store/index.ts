import { configureStore } from '@reduxjs/toolkit';
import { PersonalDetailsSlice } from '@store/slice/PersonalDetailsSlice';

const store = configureStore({
    reducer: {
        personalDetailsReducer: PersonalDetailsSlice.reducer,
    },
});

export type StoreModel = ReturnType<typeof store.getState>;

export default store;
