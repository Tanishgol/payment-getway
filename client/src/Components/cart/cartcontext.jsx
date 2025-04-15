import React, { useState, createContext, useContext } from 'react';

// MenuItem and CartItem Types
export const CartContext = createContext(undefined);

// CartProvider component to provide the cart context
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity = 1, specialInstructions = '') => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + quantity,
                            specialInstructions,
                        }
                        : cartItem
                );
            } else {
                return [
                    ...prevCart,
                    {
                        ...item,
                        quantity,
                        specialInstructions,
                    },
                ];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    const updateQuantity = (itemId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(itemId);
            return;
        }
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === itemId
                    ? {
                        ...item,
                        quantity,
                    }
                    : item
            )
        );
    };

    const updateSpecialInstructions = (itemId, instructions) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === itemId
                    ? {
                        ...item,
                        specialInstructions: instructions,
                    }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                updateSpecialInstructions,
                clearCart,
                getCartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// useCart custom hook to access cart data
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};