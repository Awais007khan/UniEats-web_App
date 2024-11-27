import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  // State for items list (You can fetch from API or store it in state)
  const [items, setItems] = useState([
    { id: 1, title: "Item 1", price: 10 },
    { id: 2, title: "Item 2", price: 15 },
    { id: 3, title: "Item 3", price: 20 },
  ]);

  // Handle Add Item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Handle Delete Item
  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Handle Logout
  const handleLogout = () => {
    console.log("Admin logged out");
    // You can add logout logic here
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-5 text-white">
        <h2 className="text-xl font-bold mb-5">Admin Panel</h2>
        <ul>
          <li className="mb-3">
            <Link to="/add-item" className="text-white hover:text-gray-400">
              Add Item
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/delete-item" className="text-white hover:text-gray-400">
              Delete Item
            </Link>
          </li>
          <li className="mb-3">
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-400 w-full text-left"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Items List</h2>
            <table className="min-w-full table-auto border-collapse border border-gray-300 mt-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">Item Title</th>
                  <th className="p-3 border">Price</th>
                  <th className="p-3 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="p-3 border">{item.title}</td>
                    <td className="p-3 border">${item.price}</td>
                    <td className="p-3 border">
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Item Form */}
          <div>
            <h2 className="text-xl font-semibold">Add New Item</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const price = e.target.price.value;
                const newItem = {
                  id: items.length + 1,
                  title,
                  price: parseFloat(price),
                };
                handleAddItem(newItem);
                e.target.reset();
              }}
              className="space-y-4 mt-6"
            >
              <div>
                <label className="block text-gray-700">Item Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
              >
                Add Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
