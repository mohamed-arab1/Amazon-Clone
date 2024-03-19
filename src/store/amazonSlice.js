import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    userInfo: []
}

export const amazonSlice = createSlice({
    name: 'amazon',
    initialState,
    reducers: {
        addToCart: (state, action) => {
           const item = state.products.find(item => item.id === action.payload.id);
           if(item){
            item.quantity += action.payload.quantity; 
           } else {
            state.products.push(action.payload)
           }
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload.id)
        },
        resetCart: (state) => {
            state.products = []
        },
        incrementQuantity: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id);
            item.quantity += 1;
        },
        decrementQuantity: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id);
            if(item.quantity > 1){
                item.quantity -= 1;
            };
        },
    }
});

export const { addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity } = amazonSlice.actions;
export default amazonSlice.reducer;