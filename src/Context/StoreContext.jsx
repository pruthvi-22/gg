import React, { createContext, useState } from 'react';
import { food_list } from '../assets/assets'; // Ensure this file contains item prices

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (newCartItems[itemId] > 1) {
                newCartItems[itemId] -= 1;
            } else {
                delete newCartItems[itemId];
            }
            return newCartItems;
        });
    };

    const getTotalCartAmount = () => {
        return Object.keys(cartItems).reduce((totalAmount, itemId) => {
            const item = food_list.find((product) => product.id === itemId);
            if (item) {
                totalAmount += item.price * cartItems[itemId];
            }
            return totalAmount;
        }, 0);
    };

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
