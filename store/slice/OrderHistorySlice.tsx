import { IOrderHistory } from "@models/data/OrderHistory";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [] as IOrderHistory[]
}

const OrderHistorySlice = createSlice({
    name: 'OrderHistorySlice',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<{
            data: IOrderHistory,
        }>) {
            state.data.push(action.payload.data);
        },
        clearOrderHistory(state) {
            state.data = []
        },
        fillData(state, action: PayloadAction<{
            data: IOrderHistory[],
        }>) {
            state.data = action.payload.data;
        }
    }
})

export default OrderHistorySlice;