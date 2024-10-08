import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
   name: "cart",
   initialState: {
      items: [],
   },
   reducers: {
      addToCart: (state, action) => {
         const newItem = action.payload;
         const existingItem = state.items.find(item => item.id === newItem.id);
         if (existingItem) {
            existingItem.quantity += newItem.quantity;
         } else {
            state.items.push(newItem);
         }
      },

      updateCart: (state, action) => {
         state.items = state.items.map((p) => {
            if (p.id === action.payload.id) {
               if (action.payload.key === "quantity") {
                  p.attributes.price = p.oneQuantityPrice * action.payload.val;
               }
               return { ...p, [action.payload.key]: action.payload.val };
            }
            return p;
         });
      },

      removeFromCart: (state, action) => {
         state.items = state.items.filter((p) => p.id !== action.payload.id)
      },
   },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
