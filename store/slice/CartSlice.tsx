import { CartQuantityAction, ICart } from "@models/data/CartModel";
import { IProduct } from "@models/data/ProductModel";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [] as ICart[]
}

const CartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers: {
        cartHandler(state, action: PayloadAction<{
            data: IProduct | ICart,
            action: CartQuantityAction
        }>) {

            if (action.payload.action === "add") {
                const alreadyPresentIndex = state.data?.findIndex(item => item?.id === action.payload?.data?.id);

                if (alreadyPresentIndex !== -1) {
                    if (state.data[alreadyPresentIndex].quantity >= 9) return;

                    state.data[alreadyPresentIndex].quantity += 1;
                    return;
                }

                state.data.push({ ...action.payload.data, quantity: 1 });
                return;
            }

            if (action.payload.action === "remove") {
                const alreadyPresentIndex = state.data?.findIndex(item => item?.id === action.payload?.data?.id);

                if (alreadyPresentIndex !== -1) {
                    if (state.data[alreadyPresentIndex].quantity <= 1) {
                        state.data.splice(alreadyPresentIndex, 1);
                        return;
                    }
                    state.data[alreadyPresentIndex].quantity -= 1;
                    return;
                }

            }
        },
        removeItem(state, action: PayloadAction<{
            id: string
        }>) {
            const findIndex = state.data?.findIndex(item => item.id === action.payload.id);
            if (findIndex !== -1) {
                state.data?.splice(findIndex, 1);
            }
        },
        clearCart(state) {
            state.data = [];
        }
    }
})

export default CartSlice;