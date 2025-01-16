// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const AdminPanel = () => {
//   // State for items list (You can fetch from API or store it in state)
//   const [items, setItems] = useState([
//     { id: 1, title: "Item 1", price: 10 },
//     { id: 2, title: "Item 2", price: 15 },
//     { id: 3, title: "Item 3", price: 20 },
//   ]);

//   // Handle Add Item
//   const handleAddItem = (newItem) => {
//     setItems([...items, newItem]);
//   };

//   // Handle Delete Item
//   const handleDeleteItem = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   // Handle Logout
//   const handleLogout = () => {
//     console.log("Admin logged out");
//     // You can add logout logic here
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 p-5 text-white">
//         <h2 className="text-xl font-bold mb-5">Admin Panel</h2>
//         <ul>
//           <li className="mb-3">
//             <Link to="/add-item" className="text-white hover:text-gray-400">
//               Add Item
//             </Link>
//           </li>
//           <li className="mb-3">
//             <Link to="/delete-item" className="text-white hover:text-gray-400">
//               Delete Item
//             </Link>
//           </li>
//           <li className="mb-3">
//             <button
//               onClick={handleLogout}
//               className="text-white hover:text-gray-400 w-full text-left"
//             >
//               Logout
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-1 p-8">
//         <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>
//         <div className="space-y-6">
//           <div>
//             <h2 className="text-xl font-semibold">Items List</h2>
//             <table className="min-w-full table-auto border-collapse border border-gray-300 mt-4">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="p-3 border">Item Title</th>
//                   <th className="p-3 border">Price</th>
//                   <th className="p-3 border">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {items.map((item) => (
//                   <tr key={item.id}>
//                     <td className="p-3 border">{item.title}</td>
//                     <td className="p-3 border">${item.price}</td>
//                     <td className="p-3 border">
//                       <button
//                         onClick={() => handleDeleteItem(item.id)}
//                         className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Add Item Form */}
//           <div>
//             <h2 className="text-xl font-semibold">Add New Item</h2>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const title = e.target.title.value;
//                 const price = e.target.price.value;
//                 const newItem = {
//                   id: items.length + 1,
//                   title,
//                   price: parseFloat(price),
//                 };
//                 handleAddItem(newItem);
//                 e.target.reset();
//               }}
//               className="space-y-4 mt-6"
//             >
//               <div>
//                 <label className="block text-gray-700">Item Title</label>
//                 <input
//                   type="text"
//                   name="title"
//                   required
//                   className="w-full p-3 border border-gray-300 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700">Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   required
//                   className="w-full p-3 border border-gray-300 rounded"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
//               >
//                 Add Item
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
import React, { useState, useEffect } from "react";
import { FiPlusCircle, FiTrash2, FiLogOut } from "react-icons/fi";

const AdminPanel = () => {
  const [items, setItems] = useState([]);
  const [credentials, setCredentials] = useState({
    name: "",
    role: "",
    intro: "",
    Price: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = "http://localhost:5000/api/auth/item";

  // Fetch items from the backend
  const fetchItems = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      const json = await response.json();
      if (json.Success) {
        setItems(json.items);
      } else {
        console.error("Failed to fetch items:", json.message);
      }
    } catch (err) {
      console.error("Error fetching items:", err.message || err);
    }
  };

  // Handle form input changes
  const onChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setCredentials({ ...credentials, image: file });
    } else {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
  };

  // Submit form data to add an item
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { name, role, intro, Price, image } = credentials;

    // Validate input fields
    if (!name || !role || !intro || !Price || !image) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("intro", intro);
    formData.append("Price", Price);
    formData.append("image", image);

    try {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      if (json.Success) {
        alert("Item added successfully!");
        fetchItems(); // Refresh the items list
        setCredentials({ name: "", role: "", intro: "", Price: "", image: null });
      } else {
        setError(json.message || "Failed to add item");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Delete an item
  const handleDeleteItem = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
      });
      const json = await response.json();
      if (json.Success) {
        alert("Item deleted successfully!");
        fetchItems(); // Refresh the items list
      } else {
        setError(json.message || "Failed to delete item");
      }
    } catch (err) {
      console.error("Error deleting item:", err.message || err);
    } finally {
      setLoading(false);
    }
  };

  // Load items on component mount
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul>
          <li className="mb-4">
            <a href="#add-item" className="flex items-center text-gray-200 hover:text-white">
              <FiPlusCircle className="mr-2" />
              Add Item
            </a>
          </li>
          <li className="mb-4">
            <a href="#items-list" className="flex items-center text-gray-200 hover:text-white">
              Items List
            </a>
          </li>
          <li className="mt-auto">
            <button
              onClick={() => console.log("Admin logged out")}
              className="flex items-center text-gray-200 hover:text-white"
            >
              <FiLogOut className="mr-2" />
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* Add Item Form */}
        <div id="add-item" className="bg-white shadow rounded p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={credentials.name}
                onChange={onChange}
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Role</label>
              <input
                type="text"
                name="role"
                value={credentials.role}
                onChange={onChange}
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Intro</label>
              <textarea
                name="intro"
                value={credentials.intro}
                onChange={onChange}
                className="w-full border rounded p-2"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                name="Price"
                value={credentials.Price}
                onChange={onChange}
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Upload Image</label>
              <input
                type="file"
                name="image"
                onChange={onChange}
                accept="image/*"
                className="w-full border rounded p-2"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-2 rounded ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Add Item"}
            </button>
          </form>
        </div>

        {/* Items List */}
        <div id="items-list" className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Items List</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Role</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                  <td className="p-3 border">{item.name}</td>
                  <td className="p-3 border">{item.role}</td>
                  <td className="p-3 border">${item.Price}</td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handleDeleteItem(item._id)}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

