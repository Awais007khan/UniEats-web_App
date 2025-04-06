import React, { createContext, useState, useEffect,useContext } from "react";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    });
  
    // Save cart to localStorage on changes
    useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);
  
    // Add an item to the cart (with quantity logic)
    const addToCart = (item) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((i) => i.name === item.name);
        if (existingItem) {
          return prevItems.map((i) =>
            i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...prevItems, { ...item, quantity: 1 }];
      });
    };
  
    // Remove an item from the cart
    const removeFromCart = (itemName) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.name !== itemName));
    };
  
    // Update the quantity of an item
    const updateQuantity = (itemName, quantity) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.name === itemName ? { ...item, quantity } : item
        )
      );
    };
  
    return (
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
        {children}
      </CartContext.Provider>
    );
  };
