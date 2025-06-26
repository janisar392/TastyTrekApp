import axios from "axios";

const API_URL = 'https://tastytrek.onrender.com/api/cart';

export const addToCart = async (foodId, token) => {
    try {
        await axios.post(
            API_URL,
            { foodId },
            { headers: { Authorization: `Bearer ${token}` } }
        );
    } catch (error) {
        console.error('Error while adding to the cart', error);
    }
};

export const removeQtyFromCart = async (foodId, token) => {
    try {
        await axios.post(
            `${API_URL}/remove`,
            { foodId },
            { headers: { Authorization: `Bearer ${token}` } }
        );
    } catch (error) {
        console.error('Error while removing quantity from the cart', error);
    }
};

export const getCartData = async (token) => {
    try {
        const response = await axios.get(API_URL, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data.items || [];
    } catch (error) {
        console.error('Error while fetching the cart data', error);
        return [];
    }
};
