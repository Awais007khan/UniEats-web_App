import React, { createContext, useState, useContext } from "react";

const ItemsContext = createContext();

export const useItems = () => useContext(ItemsContext);

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([
    { id: 1, title: "Burger", price: 230 },
    { id: 2, title: "Fries", price: 150 },
  ]);

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <ItemsContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </ItemsContext.Provider>
  );
};
