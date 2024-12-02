// import React, { createContext, useState, useContext } from "react";

// // Create Context
// const CartContext = createContext();

// // Create a custom hook for easy access
// export const useCart = () => useContext(CartContext);

// // Create Provider Component
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Add item to the cart
//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );}
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
  // };
//   import React, { createContext, useState, useContext } from "react";

//   const CartContext = createContext();
  
//   export const useCart = () => useContext(CartContext);
  
//   export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);
  
//     // Add item to cart
//     const addToCart = (item) => {
//       const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
  
//       if (existingItem) {
//         // If item exists, increase the quantity
//         setCartItems(
//           cartItems.map((cartItem) =>
//             cartItem.name === item.name
//               ? { ...cartItem, quantity: cartItem.quantity + 1 }
//               : cartItem
//           )
//         );
//       } else {
//         // If item doesn't exist, add it to the cart
//         setCartItems([...cartItems, item]);
//       }
//     };
  
//     // Remove item from cart
//     const removeFromCart = (itemName) => {
//       setCartItems(cartItems.filter((item) => item.name !== itemName));
//     };
  
//     // Update item quantity
//     const updateQuantity = (itemName, newQuantity) => {
//       setCartItems(
//         cartItems.map((item) =>
//           item.name === itemName ? { ...item, quantity: newQuantity } : item
//         )
//       );
//     };
  
//     return (
//       <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
//         {children}
//       </CartContext.Provider>
//     );
//   };
  