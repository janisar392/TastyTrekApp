import axios from "axios";

const API_URL ='http://localhost:8080/api/cart';

export const addToCart = async (foodId , token) => {
    try {
         await axios.post(
            'http://localhost:8080/api/cart',
             {foodId}, 
             {headers:{Authorization : `Bearer ${token}`}});
    } catch (error) {
        console.error('Error while adding the cart data',error);
    }
}

export const removeQtyFromCart = async (foodId , token) => {
    try {
         await axios.post(
            'http://localhost:8080/api/cart/remove',
             {foodId}, 
             {headers:{Authorization : `Bearer ${token}`}});
    } catch (error) {
        console.error('Error while remove qty from the cart data',error);
    }
}

export const getCartData = async (token) => {
    try {
        const response = await axios.get("http://localhost:8080/api/cart",{
            headers:{Authorization:`Bearer ${token}`}
         });
         return response.data.items || [];
    } catch (error) {
        console.error('Error while fetching the cart data',error);
        return [];
    }
}