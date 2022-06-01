import { createSlice } from "@reduxjs/toolkit";




export const productSlice = createSlice({
    name: "product",
    initialState: {
            products: [
                {
                    id: "",
                    title: "",
                    price: "",
                    desc: "",
                    quantity: "",
                    img: "",
                
                },
            ],
        
    },
    reducers: {

        addProduct: (state, action) => {
            
           state.products = [...state.products, action.payload];
           console.log(state.products);

        },
        deleteProduct: (state, action) => {
            return{
                ...state,
                products: state.products.filter(product => product.id != action.payload.id)
            }

         },

        
        // orderProduct: (state, action) => {
        //     state.
        // }
    }
})

export const {addProduct, deleteProduct} = productSlice.actions;
export default productSlice.reducer;