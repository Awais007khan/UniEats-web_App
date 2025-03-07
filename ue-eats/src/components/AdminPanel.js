
// import React, { useState, useEffect } from "react";
// import { FiPlusCircle, FiTrash2, FiLogOut, FiList } from "react-icons/fi";

// const AdminPanel = () => {
//   const [items, setItems] = useState([]);
//   const [credentials, setCredentials] = useState({
//     name: "",
//     role: "",
//     intro: "",
//     Price: "",
//     image: null,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [activeSection, setActiveSection] = useState("add-item"); // State to track active section

//   const API_BASE_URL = "http://localhost:5000/api/auth/item";

//   // Fetch items from the backend
//   const fetchItems = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/items");
//       const json = await response.json();
//       if (json.Success) {
//         setItems(json.items);
//       } else {
//         console.error("Failed to fetch items:", json.message);
//       }
//     } catch (err) {
//       console.error("Error fetching items:", err.message || err);
//     }
//   };

//   // Handle form input changes
//   const onChange = (e) => {
//     if (e.target.name === "image") {
//       const file = e.target.files[0];
//       setCredentials({ ...credentials, image: file });
//     } else {
//       setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     }
//   };

//   // Submit form data to add an item
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const { name, role, intro, Price, image } = credentials;

//     if (!name || !role || !intro || !Price || !image) {
//       setError("All fields are required");
//       setLoading(false);
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("role", role);
//     formData.append("intro", intro);
//     formData.append("Price", Price);
//     formData.append("image", image);

//     try {
//       const response = await fetch(API_BASE_URL, {
//         method: "POST",
//         body: formData,
//       });
//       const json = await response.json();
//       if (json.Success) {
//         alert("Item added successfully!");
//         fetchItems();
//         setCredentials({ name: "", role: "", intro: "", Price: "", image: null });
//       } else {
//         setError(json.message || "Failed to add item");
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete an item
//   const handleDeleteItem = async (id) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${API_BASE_URL}/${id}`, {
//         method: "DELETE",
//       });
//       const json = await response.json();
//       if (json.Success) {
//         alert("Item deleted successfully!");
//         fetchItems();
//       } else {
//         setError(json.message || "Failed to delete item");
//       }
//     } catch (err) {
//       console.error("Error deleting item:", err.message || err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Load items on component mount
//   useEffect(() => {
//     fetchItems();
//   }, []);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 text-white p-6 flex flex-col">
//         <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
//         <ul>
//           <li className="mb-4">
//             <button
//               onClick={() => setActiveSection("add-item")}
//               className={`flex items-center text-gray-200 hover:text-white ${
//                 activeSection === "add-item" ? "font-bold" : ""
//               }`}
//             >
//               <FiPlusCircle className="mr-2" />
//               Add Item
//             </button>
//           </li>
//           <li className="mb-4">
//             <button
//               onClick={() => setActiveSection("items-list")}
//               className={`flex items-center text-gray-200 hover:text-white ${
//                 activeSection === "items-list" ? "font-bold" : ""
//               }`}
//             >
//               <FiList className="mr-2" />
//               Items List
//             </button>
//           </li>
//           <li className="mt-auto">
//             <button
//               onClick={() => console.log("Admin logged out")}
//               className="flex items-center text-gray-200 hover:text-white"
//             >
//               <FiLogOut className="mr-2" />
//               Logout
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-100 p-8 overflow-auto">
//         <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//         {/* Conditionally Render Sections */}
//         {activeSection === "add-item" && (
//           <div className="bg-white shadow rounded p-6 mb-8">
//             <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
//             {error && <p className="text-red-500 mb-4">{error}</p>}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={credentials.name}
//                   onChange={onChange}
//                   className="w-full border rounded p-2"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Role</label>
//                 <input
//                   type="text"
//                   name="role"
//                   value={credentials.role}
//                   onChange={onChange}
//                   className="w-full border rounded p-2"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Intro</label>
//                 <textarea
//                   name="intro"
//                   value={credentials.intro}
//                   onChange={onChange}
//                   className="w-full border rounded p-2"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700">Price</label>
//                 <input
//                   type="number"
//                   name="Price"
//                   value={credentials.Price}
//                   onChange={onChange}
//                   className="w-full border rounded p-2"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Upload Image</label>
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={onChange}
//                   accept="image/*"
//                   className="w-full border rounded p-2"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className={`w-full bg-blue-600 text-white py-2 rounded ${
//                   loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
//                 }`}
//                 disabled={loading}
//               >
//                 {loading ? "Submitting..." : "Add Item"}
//               </button>
//             </form>
//           </div>
//         )}

//         {activeSection === "items-list" && (
//           <div className="bg-white shadow rounded p-6">
//             <h2 className="text-xl font-semibold mb-4">Items List</h2>
//             <table className="w-full border-collapse border border-gray-300">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="p-3 border">Name</th>
//                   <th className="p-3 border">Role</th>
//                   <th className="p-3 border">Price</th>
//                   <th className="p-3 border">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {items.map((item) => (
//                   <tr key={item._id}>
//                     <td className="p-3 border">{item.name}</td>
//                     <td className="p-3 border">{item.role}</td>
//                     <td className="p-3 border">Rs.{item.Price}</td>
//                     <td className="p-3 border">
//                       <button
//                         onClick={() => handleDeleteItem(item._id)}
//                         className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//                       >
//                         <FiTrash2 />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
import React, { useState, useEffect } from "react";
import { FiPlusCircle, FiTrash2, FiLogOut, FiList, FiMenu, FiX } from "react-icons/fi";

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
  const [activeSection, setActiveSection] = useState("add-item");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const API_BASE_URL = "http://localhost:5000/api/auth/item";

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/items");
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

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-gray-800 text-white w-64 p-6 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:relative md:translate-x-0 md:w-64`}
      >
        {/* Close Button (Visible on Mobile) */}
        <div className="md:hidden flex justify-end">
          <button
            className="text-white text-2xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul>
          <li className="mb-4">
            <button
              onClick={() => {
                setActiveSection("add-item");
                setIsSidebarOpen(false);
              }}
              className={`flex items-center text-gray-200 hover:text-white ${
                activeSection === "add-item" ? "font-bold" : ""
              }`}
            >
              <FiPlusCircle className="mr-2" />
              Add Item
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => {
                setActiveSection("items-list");
                setIsSidebarOpen(false);
              }}
              className={`flex items-center text-gray-200 hover:text-white ${
                activeSection === "items-list" ? "font-bold" : ""
              }`}
            >
              <FiList className="mr-2" />
              Items List
            </button>
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

      {/* Mobile Sidebar Toggle */}
      <button
        className="fixed top-4 left-4 md:hidden bg-gray-800 text-white p-2 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FiMenu />
      </button>

      {/* Main Content */}
      <div
        className={`flex-1 bg-gray-100 p-6 transition-all duration-300 ${
          isSidebarOpen ? "mt-20 md:mt-0" : "mt-4 md:mt-0"
        }`}
      >
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Add Item Section */}
        {activeSection === "add-item" && (
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form className="space-y-4">
              <input type="text" name="name" placeholder="Name" className="w-full border p-2 rounded" required />
              <input type="text" name="role" placeholder="Role" className="w-full border p-2 rounded" required />
              <textarea name="intro" placeholder="Intro" className="w-full border p-2 rounded" required />
              <input type="number" name="Price" placeholder="Price" className="w-full border p-2 rounded" required />
              <input type="file" name="image" accept="image/*" className="w-full border p-2 rounded" required />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                {loading ? "Submitting..." : "Add Item"}
              </button>
            </form>
          </div>
        )}

        {/* Items List Section */}
        {activeSection === "items-list" && (
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-xl font-semibold mb-4">Items List</h2>
            <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Role</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id}>
                    <td className="p-2 border">{item.name}</td>
                    <td className="p-2 border">{item.role}</td>
                    <td className="p-2 border">Rs.{item.Price}</td>
                    <td className="p-2 border">
                      <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;

