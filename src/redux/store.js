import { configureStore } from "@reduxjs/toolkit";
import listSach from "./reducer";
import listCart from "./reducerCart";


const store = configureStore({
    reducer: {
        sach : listSach,
        cart : listCart
    }
})

export default store