import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    SachItems : []
}

const listSach = createSlice({
    name: 'sach',
    initialState,
    reducers: {
        addSach(state, action){
            const checkItem = state.SachItems.find(item => item.id === action.payload.id);
            if(!checkItem){
                state.SachItems.push(action.payload)
            }
        }
    },
    extraReducers: builder => {

    }
})

export const {addSach } = listSach.actions;
export default listSach.reducer