import {} from "./productSlice";
import axios from "axios";


export const putCart = async (product) => {
    try {
        const res = await axios.put("https://62820e0d9fac04c6540e43fe.mockapi.io/shopping_app/products", product);
        dispatch(postCart)
    } catch (error) {
        console.log();
    }
}