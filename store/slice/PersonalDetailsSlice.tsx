import { IPersonalDetails } from '@models/store/PersonalDetailsSliceModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    name: null,
    phone: null,
} as IPersonalDetails;

export const PersonalDetailsSlice = createSlice({
    name: 'personalDetailsSlice',
    initialState,
    reducers: {
        setDetails(
            state,
            action: PayloadAction<{
                name: string;
                phone: string;
            }>
        ) {
            state.name = action.payload.name;
            state.phone = action.payload.phone;
        },
        removeCredentials(state) {
            state.name = null;
            state.phone = null;
        },
    },
});
