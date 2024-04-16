import { createReducer } from "@reduxjs/toolkit"
import { addToCart, removeCart } from "./actionCart"


const initialState = {
    CartItems : []
}

const listCart = createReducer(initialState, builder => {
    builder
    .addCase(addToCart, (state , action) => {
        const checkItem = state.CartItems.find(item => item.id === action.payload.id);
        if(!checkItem){
            state.CartItems.push({...action.payload, quantity : 1});
        }else{
            checkItem.quantity++;
        }
    })
    .addCase(removeCart, (state, action) => {
        const checkItemIndex = state.CartItems.findIndex(item => item.id === action.payload.id);
        if(checkItemIndex !== -1){
            const checkItem = state.CartItems[checkItemIndex];
            checkItem.quantity--;
            if(checkItem.quantity === 0){
                state.CartItems = state.CartItems.filter(item => item.id !== action.payload.id);
            }
        }
    })
})

export default listCart;