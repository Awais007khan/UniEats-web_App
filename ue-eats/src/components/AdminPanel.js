// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { 
// // //   FiPlusCircle, 
// // //   FiTrash2, 
// // //   FiLogOut, 
// // //   FiList, 
// // //   FiMenu, 
// // //   FiX,
// // //   FiUser,
// // //   FiChevronDown,
// // //   FiChevronUp,
// // //   FiEdit2
// // // } from "react-icons/fi";
// // // import { toast, ToastContainer } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';

// // // const AdminPanel = () => {
// // //   const [items, setItems] = useState([]);
// // //   const [credentials, setCredentials] = useState({
// // //     name: "",
// // //     role: "",
// // //     intro: "",
// // //     Price: "",
// // //     image: null,
// // //   });
// // //   const [loading, setLoading] = useState({
// // //     delete: false,
// // //     fetch: false,
// // //     add: false
// // //   });
// // //   const [error, setError] = useState(null);
// // //   const [activeSection, setActiveSection] = useState("items-list");
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// // //   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
// // //   const [selectedItem, setSelectedItem] = useState(null);
// // //   const [showDeleteModal, setShowDeleteModal] = useState(false);
// // //   const navigate = useNavigate();

// // //   const API_BASE_URL = "http://localhost:5000/api/auth";

// // //   const fetchItems = async () => {
// // //     try {
// // //       setLoading(prev => ({...prev, fetch: true}));
// // //       const response = await fetch(`${API_BASE_URL}/items`);
// // //       const json = await response.json();
// // //       if (json.Success) {
// // //         setItems(json.items);
// // //         toast.success("Items loaded successfully");
// // //       } else {
// // //         setError(json.message || "Failed to fetch items");
// // //         toast.error(json.message || "Failed to fetch items");
// // //       }
// // //     } catch (err) {
// // //       setError(err.message || "Error fetching items");
// // //       toast.error(err.message || "Error fetching items");
// // //     } finally {
// // //       setLoading(prev => ({...prev, fetch: false}));
// // //     }
// // //   };

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setCredentials(prev => ({
// // //       ...prev,
// // //       [name]: value
// // //     }));
// // //   };

// // //   const handleImageChange = (e) => {
// // //     setCredentials(prev => ({
// // //       ...prev,
// // //       image: e.target.files[0]
// // //     }));
// // //   };

// // //   const handleAddItem = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       setLoading(prev => ({...prev, add: true}));
// // //       const formData = new FormData();
// // //       formData.append('name', credentials.name);
// // //       formData.append('role', credentials.role);
// // //       formData.append('intro', credentials.intro);
// // //       formData.append('Price', credentials.Price);
// // //       if (credentials.image) {
// // //         formData.append('image', credentials.image);
// // //       }

// // //       const response = await fetch(`${API_BASE_URL}/item`, {
// // //         method: "POST",
// // //         body: formData,
// // //       });

// // //       const json = await response.json();

// // //       if (json.Success) {
// // //         toast.success("Item added successfully");
// // //         setCredentials({
// // //           name: "",
// // //           role: "",
// // //           intro: "",
// // //           Price: "",
// // //           image: null,
// // //         });
// // //         fetchItems();
// // //         setActiveSection("items-list");
// // //       } else {
// // //         setError(json.message || "Failed to add item");
// // //         toast.error(json.message || "Failed to add item");
// // //       }
// // //     } catch (err) {
// // //       setError(err.message || "Error adding item");
// // //       toast.error(err.message || "Error adding item");
// // //     } finally {
// // //       setLoading(prev => ({...prev, add: false}));
// // //     }
// // //   };

// // //   const openDeleteModal = (item) => {
// // //     setSelectedItem(item);
// // //     setShowDeleteModal(true);
// // //   };

// // //   const deleteItem = async () => {
// // //     if (!selectedItem) return;
    
// // //     try {
// // //       setLoading(prev => ({...prev, delete: true}));
// // //       const response = await fetch(`${API_BASE_URL}/item/${selectedItem._id}`, {
// // //         method: "DELETE",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //       });

// // //       const data = await response.json();

// // //       if (!response.ok) {
// // //         throw new Error(data.message || 'Failed to delete item');
// // //       }

// // //       if (data.Success) {
// // //         setItems(prevItems => prevItems.filter(item => item._id !== selectedItem._id));
// // //         toast.success("Item deleted successfully");
// // //       } else {
// // //         throw new Error(data.message || 'Failed to delete item');
// // //       }
// // //     } catch (error) {
// // //       console.error("Delete error:", error);
// // //       toast.error(error.message || "Error deleting item");
// // //       fetchItems();
// // //     } finally {
// // //       setLoading(prev => ({...prev, delete: false}));
// // //       setShowDeleteModal(false);
// // //       setSelectedItem(null);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchItems();
// // //   }, []);

// // //   const handleLogout = () => {
// // //     console.log("Admin logged out");
// // //     navigate("/login");
// // //   };

// // //   const handleAddItemClick = () => {
// // //     navigate("/add");
// // //   };

// // //   return (
// // //     <div 
// // //       className="flex h-screen flex-col md:flex-row bg-cover bg-center"
// // //       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
// // //     >
// // //       {/* Overlay for background image */}
// // //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
// // //       <ToastContainer position="top-right" autoClose={3000} />

// // //       {/* Delete Confirmation Modal */}
// // //       {showDeleteModal && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// // //           <div className="bg-white rounded-lg p-6 w-full max-w-md">
// // //             <h3 className="text-xl font-semibold mb-4">Confirm Deletion</h3>
// // //             <p className="mb-6">Are you sure you want to delete <span className="font-bold">"{selectedItem?.name}"</span>? This action cannot be undone.</p>
// // //             <div className="flex justify-end space-x-3">
// // //               <button
// // //                 onClick={() => setShowDeleteModal(false)}
// // //                 className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
// // //                 disabled={loading.delete}
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 onClick={deleteItem}
// // //                 className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center"
// // //                 disabled={loading.delete}
// // //               >
// // //                 {loading.delete ? (
// // //                   <>
// // //                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // //                     </svg>
// // //                     Deleting...
// // //                   </>
// // //                 ) : (
// // //                   "Delete"
// // //                 )}
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Sidebar */}
// // //       <div
// // //         className={`fixed inset-y-0 left-0 z-40 bg-gray-800 text-white w-64 p-6 transform ${
// // //           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
// // //         } transition-transform md:relative md:translate-x-0 md:w-64`}
// // //       >
// // //         {/* Close Button (Visible on Mobile) */}
// // //         <div className="md:hidden flex justify-end">
// // //           <button
// // //             className="text-white text-2xl"
// // //             onClick={() => setIsSidebarOpen(false)}
// // //           >
// // //             <FiX />
// // //           </button>
// // //         </div>

// // //         {/* Profile Section */}
// // //         <div className="flex items-center mb-8 p-4 bg-gray-700 rounded-lg">
// // //           <div className="relative">
// // //             <div 
// // //               className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center cursor-pointer"
// // //               onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
// // //             >
// // //               <FiUser className="text-2xl" />
// // //             </div>
// // //             {isProfileDropdownOpen && (
// // //               <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
// // //                 <div className="py-1">
// // //                   <button
// // //                     onClick={() => {
// // //                       setActiveSection("items-list");
// // //                       setIsProfileDropdownOpen(false);
// // //                       setIsSidebarOpen(false);
// // //                     }}
// // //                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
// // //                   >
// // //                     <FiList className="inline mr-2" />
// // //                     Items List
// // //                   </button>
// // //                   <button
// // //                     onClick={() => {
// // //                       handleAddItemClick();
// // //                       setIsProfileDropdownOpen(false);
// // //                       setIsSidebarOpen(false);
// // //                     }}
// // //                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
// // //                   >
// // //                     <FiPlusCircle className="inline mr-2" />
// // //                     Add Item
// // //                   </button>
// // //                   <button
// // //                     onClick={handleLogout}
// // //                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
// // //                   >
// // //                     <FiLogOut className="inline mr-2" />
// // //                     Logout
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>
// // //           <div className="ml-4">
// // //             <p className="font-semibold">Admin User</p>
// // //             <p className="text-gray-300 text-sm">Administrator</p>
// // //           </div>
// // //           <button 
// // //             className="ml-auto text-gray-300"
// // //             onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
// // //           >
// // //             {isProfileDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
// // //           </button>
// // //         </div>

// // //         <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
// // //         <ul>
// // //           <li className="mb-4">
// // //             <button
// // //               onClick={() => {
// // //                 setActiveSection("add-item");
// // //                 setIsSidebarOpen(false);
// // //               }}
// // //               className={`flex items-center text-gray-200 hover:text-white ${
// // //                 activeSection === "add-item" ? "font-bold text-white" : ""
// // //               }`}
// // //             >
// // //               <FiPlusCircle className="mr-2" />
// // //               Add Item
// // //             </button>
// // //           </li>
// // //           <li className="mb-4">
// // //             <button
// // //               onClick={() => {
// // //                 setActiveSection("items-list");
// // //                 setIsSidebarOpen(false);
// // //               }}
// // //               className={`flex items-center text-gray-200 hover:text-white ${
// // //                 activeSection === "items-list" ? "font-bold text-white" : ""
// // //               }`}
// // //             >
// // //               <FiList className="mr-2" />
// // //               Items List
// // //             </button>
// // //           </li>
// // //           <li className="mt-auto">
// // //             <button
// // //               onClick={handleLogout}
// // //               className="flex items-center text-gray-200 hover:text-white"
// // //             >
// // //               <FiLogOut className="mr-2" />
// // //               Logout
// // //             </button>
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Mobile Sidebar Toggle */}
// // //       <button
// // //         className="fixed top-4 left-4 md:hidden bg-gray-800 text-white p-2 rounded-md z-40"
// // //         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// // //       >
// // //         <FiMenu />
// // //       </button>

// // //       {/* Main Content */}
// // //       <div
// // //         className={`flex-1 p-6 transition-all duration-300 relative z-10 ${
// // //           isSidebarOpen ? "mt-20 md:mt-0" : "mt-4 md:mt-0"
// // //         }`}
// // //       >
// // //         <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-6">
// // //           <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

// // //           {/* Add Item Section */}
// // //           {activeSection === "add-item" && (
// // //             <div className="bg-white shadow rounded p-6">
// // //               <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
// // //               {error && <p className="text-red-500 mb-4">{error}</p>}
// // //               <form className="space-y-4" onSubmit={handleAddItem}>
// // //                 <input 
// // //                   type="text" 
// // //                   name="name" 
// // //                   placeholder="Name" 
// // //                   className="w-full border p-2 rounded" 
// // //                   value={credentials.name}
// // //                   onChange={handleInputChange}
// // //                   required 
// // //                 />
// // //                 <input 
// // //                   type="text" 
// // //                   name="role" 
// // //                   placeholder="Role" 
// // //                   className="w-full border p-2 rounded" 
// // //                   value={credentials.role}
// // //                   onChange={handleInputChange}
// // //                   required 
// // //                 />
// // //                 <textarea 
// // //                   name="intro" 
// // //                   placeholder="Intro" 
// // //                   className="w-full border p-2 rounded" 
// // //                   value={credentials.intro}
// // //                   onChange={handleInputChange}
// // //                   required 
// // //                 />
// // //                 <input 
// // //                   type="number" 
// // //                   name="Price" 
// // //                   placeholder="Price" 
// // //                   className="w-full border p-2 rounded" 
// // //                   value={credentials.Price}
// // //                   onChange={handleInputChange}
// // //                   required 
// // //                 />
// // //                 <input 
// // //                   type="file" 
// // //                   name="image" 
// // //                   accept="image/*" 
// // //                   className="w-full border p-2 rounded" 
// // //                   onChange={handleImageChange}
// // //                 />
// // //                 <button 
// // //                   type="submit" 
// // //                   className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
// // //                   disabled={loading.add}
// // //                 >
// // //                   {loading.add ? "Adding..." : "Add Item"}
// // //                 </button>
// // //               </form>
// // //             </div>
// // //           )}

// // //           {/* Items List Section */}
// // //           {activeSection === "items-list" && (
// // //             <div>
// // //               <div className="flex justify-between items-center mb-6">
// // //                 <h2 className="text-xl font-semibold text-gray-800">Items List</h2>
// // //                 <button
// // //                   onClick={() => setActiveSection("add-item")}
// // //                   className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center transition-colors"
// // //                 >
// // //                   <FiPlusCircle className="mr-2" />
// // //                   Add New Item
// // //                 </button>
// // //               </div>
              
// // //               {loading.fetch ? (
// // //                 <div className="flex justify-center items-center h-64">
// // //                   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
// // //                 </div>
// // //               ) : (
// // //                 <div className="overflow-x-auto">
// // //                   <table className="w-full border-collapse">
// // //                     <thead className="bg-gray-100">
// // //                       <tr>
// // //                         <th className="p-3 text-left text-gray-700 font-medium">Name</th>
// // //                         <th className="p-3 text-left text-gray-700 font-medium">Role</th>
// // //                         <th className="p-3 text-left text-gray-700 font-medium">Price</th>
// // //                         <th className="p-3 text-left text-gray-700 font-medium">Actions</th>
// // //                       </tr>
// // //                     </thead>
// // //                     <tbody className="divide-y divide-gray-200">
// // //                       {items.map((item) => (
// // //                         <tr key={item._id} className="hover:bg-gray-50 transition-colors">
// // //                           <td className="p-3 text-gray-800">{item.name}</td>
// // //                           <td className="p-3 text-gray-800">{item.role}</td>
// // //                           <td className="p-3 text-gray-800">Rs.{item.Price}</td>
// // //                           <td className="p-3 flex space-x-2">
// // //                             <button 
// // //                               className="p-2 text-indigo-600 hover:text-indigo-800 transition-colors"
// // //                               onClick={() => {
// // //                                 // Add edit functionality here
// // //                                 console.log("Edit item:", item._id);
// // //                               }}
// // //                             >
// // //                               <FiEdit2 />
// // //                             </button>
// // //                             <button 
// // //                               className="p-2 text-red-600 hover:text-red-800 transition-colors"
// // //                               onClick={() => openDeleteModal(item)}
// // //                             >
// // //                               <FiTrash2 />
// // //                             </button>
// // //                           </td>
// // //                         </tr>
// // //                       ))}
// // //                     </tbody>
// // //                   </table>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminPanel;
// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { 
// //   FiPlusCircle, 
// //   FiTrash2, 
// //   FiLogOut, 
// //   FiList, 
// //   FiMenu, 
// //   FiX,
// //   FiUser,
// //   FiChevronDown,
// //   FiChevronUp,
// //   FiEdit2
// // } from "react-icons/fi";
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const AdminPanel = () => {
// //   const [items, setItems] = useState([]);
// //   const [credentials, setCredentials] = useState({
// //     name: "",
// //     role: "",
// //     intro: "",
// //     Price: "",
// //     image: null,
// //   });
// //   const [loading, setLoading] = useState({
// //     delete: false,
// //     fetch: false,
// //     add: false
// //   });
// //   const [error, setError] = useState(null);
// //   const [activeSection, setActiveSection] = useState("items-list");
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
// //   const [selectedItem, setSelectedItem] = useState(null);
// //   const [showDeleteModal, setShowDeleteModal] = useState(false);
// //   const navigate = useNavigate();

// //   const API_BASE_URL = "http://localhost:5000/api/auth";

// //   const fetchItems = async () => {
// //     try {
// //       setLoading(prev => ({...prev, fetch: true}));
// //       const response = await fetch(`${API_BASE_URL}/items`);
// //       const json = await response.json();
// //       if (json.Success) {
// //         setItems(json.items);
// //         toast.success("Items loaded successfully");
// //       } else {
// //         setError(json.message || "Failed to fetch items");
// //         toast.error(json.message || "Failed to fetch items");
// //       }
// //     } catch (err) {
// //       setError(err.message || "Error fetching items");
// //       toast.error(err.message || "Error fetching items");
// //     } finally {
// //       setLoading(prev => ({...prev, fetch: false}));
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setCredentials(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handleImageChange = (e) => {
// //     setCredentials(prev => ({
// //       ...prev,
// //       image: e.target.files[0]
// //     }));
// //   };

// //   const handleAddItem = async (e) => {
// //     e.preventDefault();
// //     try {
// //       setLoading(prev => ({...prev, add: true}));
// //       const formData = new FormData();
// //       formData.append('name', credentials.name);
// //       formData.append('role', credentials.role);
// //       formData.append('intro', credentials.intro);
// //       formData.append('Price', credentials.Price);
// //       if (credentials.image) {
// //         formData.append('image', credentials.image);
// //       }

// //       const response = await fetch(`${API_BASE_URL}/item`, {
// //         method: "POST",
// //         body: formData,
// //       });

// //       const json = await response.json();

// //       if (json.Success) {
// //         toast.success("Item added successfully");
// //         setCredentials({
// //           name: "",
// //           role: "",
// //           intro: "",
// //           Price: "",
// //           image: null,
// //         });
// //         fetchItems();
// //         setActiveSection("items-list");
// //       } else {
// //         setError(json.message || "Failed to add item");
// //         toast.error(json.message || "Failed to add item");
// //       }
// //     } catch (err) {
// //       setError(err.message || "Error adding item");
// //       toast.error(err.message || "Error adding item");
// //     } finally {
// //       setLoading(prev => ({...prev, add: false}));
// //     }
// //   };

// //   const openDeleteModal = (item) => {
// //     setSelectedItem(item);
// //     setShowDeleteModal(true);
// //   };

// //   const deleteItem = async () => {
// //     if (!selectedItem) return;
    
// //     try {
// //       setLoading(prev => ({...prev, delete: true}));
// //       const response = await fetch(`${API_BASE_URL}/item/${selectedItem._id}`, {
// //         method: "DELETE",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       });

// //       const data = await response.json();

// //       if (!response.ok) {
// //         throw new Error(data.message || 'Failed to delete item');
// //       }

// //       if (data.Success) {
// //         setItems(prevItems => prevItems.filter(item => item._id !== selectedItem._id));
// //         toast.success("Item deleted successfully");
// //       } else {
// //         throw new Error(data.message || 'Failed to delete item');
// //       }
// //     } catch (error) {
// //       console.error("Delete error:", error);
// //       toast.error(error.message || "Error deleting item");
// //       fetchItems();
// //     } finally {
// //       setLoading(prev => ({...prev, delete: false}));
// //       setShowDeleteModal(false);
// //       setSelectedItem(null);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchItems();
// //   }, []);

// //   const handleLogout = () => {
// //     console.log("Admin logged out");
// //     navigate("/login");
// //   };

// //   const handleAddItemClick = () => {
// //     navigate("/add");
// //   };

// //   return (
// //     <div 
// //       className="flex h-screen flex-col md:flex-row bg-cover bg-center"
// //       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
// //     >
// //       {/* Overlay for background image */}
// //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
// //       <ToastContainer position="top-right" autoClose={3000} />

// //       {/* Delete Confirmation Modal */}
// //       {showDeleteModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-lg p-6 w-full max-w-md">
// //             <h3 className="text-xl font-semibold mb-4">Confirm Deletion</h3>
// //             <p className="mb-6">Are you sure you want to delete <span className="font-bold">"{selectedItem?.name}"</span>? This action cannot be undone.</p>
// //             <div className="flex justify-end space-x-3">
// //               <button
// //                 onClick={() => setShowDeleteModal(false)}
// //                 className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
// //                 disabled={loading.delete}
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={deleteItem}
// //                 className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center"
// //                 disabled={loading.delete}
// //               >
// //                 {loading.delete ? (
// //                   <>
// //                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                     </svg>
// //                     Deleting...
// //                   </>
// //                 ) : (
// //                   "Delete"
// //                 )}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Sidebar */}
// //       <div
// //         className={`fixed inset-y-0 left-0 z-40 bg-gray-800 text-white w-64 p-6 transform ${
// //           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
// //         } transition-transform md:relative md:translate-x-0 md:w-64`}
// //       >
// //         {/* Close Button (Visible on Mobile) */}
// //         <div className="md:hidden flex justify-end">
// //           <button
// //             className="text-white text-2xl"
// //             onClick={() => setIsSidebarOpen(false)}
// //           >
// //             <FiX />
// //           </button>
// //         </div>

// //         {/* Profile Section */}
// //         <div className="flex items-center mb-8 p-4 bg-gray-700 rounded-lg">
// //           <div className="relative">
// //             <div 
// //               className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center cursor-pointer"
// //               onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
// //             >
// //               <FiUser className="text-2xl" />
// //             </div>
// //             {isProfileDropdownOpen && (
// //               <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
// //                 <div className="py-1">
// //                   <button
// //                     onClick={() => {
// //                       setActiveSection("items-list");
// //                       setIsProfileDropdownOpen(false);
// //                       setIsSidebarOpen(false);
// //                     }}
// //                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
// //                   >
// //                     <FiList className="inline mr-2" />
// //                     Items List
// //                   </button>
// //                   <button
// //                     onClick={() => {
// //                       handleAddItemClick();
// //                       setIsProfileDropdownOpen(false);
// //                       setIsSidebarOpen(false);
// //                     }}
// //                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
// //                   >
// //                     <FiPlusCircle className="inline mr-2" />
// //                     Add Item
// //                   </button>
// //                   <button
// //                     onClick={handleLogout}
// //                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
// //                   >
// //                     <FiLogOut className="inline mr-2" />
// //                     Logout
// //                   </button>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //           <div className="ml-4">
// //             <p className="font-semibold">Admin User</p>
// //             <p className="text-gray-300 text-sm">Administrator</p>
// //           </div>
// //           <button 
// //             className="ml-auto text-gray-300"
// //             onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
// //           >
// //             {isProfileDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
// //           </button>
// //         </div>

// //         <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
// //         <ul>
// //           <li className="mb-4">
// //             <button
// //               onClick={() => {
// //                 handleAddItemClick();
// //                 setIsSidebarOpen(false);
// //               }}
// //               className={`flex items-center text-gray-200 hover:text-white ${
// //                 activeSection === "add-item" ? "font-bold text-white" : ""
// //               }`}
// //             >
// //               <FiPlusCircle className="mr-2" />
// //               Add Item
// //             </button>
// //           </li>
// //           <li className="mb-4">
// //             <button
// //               onClick={() => {
// //                 setActiveSection("items-list");
// //                 setIsSidebarOpen(false);
// //               }}
// //               className={`flex items-center text-gray-200 hover:text-white ${
// //                 activeSection === "items-list" ? "font-bold text-white" : ""
// //               }`}
// //             >
// //               <FiList className="mr-2" />
// //               Items List
// //             </button>
// //           </li>
// //           <li className="mt-auto">
// //             <button
// //               onClick={handleLogout}
// //               className="flex items-center text-gray-200 hover:text-white"
// //             >
// //               <FiLogOut className="mr-2" />
// //               Logout
// //             </button>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Mobile Sidebar Toggle */}
// //       <button
// //         className="fixed top-4 left-4 md:hidden bg-gray-800 text-white p-2 rounded-md z-40"
// //         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// //       >
// //         <FiMenu />
// //       </button>

// //       {/* Main Content */}
// //       <div
// //         className={`flex-1 p-6 transition-all duration-300 relative z-10 ${
// //           isSidebarOpen ? "mt-20 md:mt-0" : "mt-4 md:mt-0"
// //         }`}
// //       >
// //         <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-6">
// //           <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

// //           {/* Items List Section */}
// //           {activeSection === "items-list" && (
// //             <div>
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-xl font-semibold text-gray-800">Items List</h2>
// //                 <button
// //                   onClick={handleAddItemClick}
// //                   className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center transition-colors"
// //                 >
// //                   <FiPlusCircle className="mr-2" />
// //                   Add New Item
// //                 </button>
// //               </div>
              
// //               {loading.fetch ? (
// //                 <div className="flex justify-center items-center h-64">
// //                   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
// //                 </div>
// //               ) : (
// //                 <div className="overflow-x-auto">
// //                   <table className="w-full border-collapse">
// //                     <thead className="bg-gray-100">
// //                       <tr>
// //                         <th className="p-3 text-left text-gray-700 font-medium">Name</th>
// //                         <th className="p-3 text-left text-gray-700 font-medium">Role</th>
// //                         <th className="p-3 text-left text-gray-700 font-medium">Price</th>
// //                         <th className="p-3 text-left text-gray-700 font-medium">Actions</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className="divide-y divide-gray-200">
// //                       {items.map((item) => (
// //                         <tr key={item._id} className="hover:bg-gray-50 transition-colors">
// //                           <td className="p-3 text-gray-800">{item.name}</td>
// //                           <td className="p-3 text-gray-800">{item.role}</td>
// //                           <td className="p-3 text-gray-800">Rs.{item.Price}</td>
// //                           <td className="p-3 flex space-x-2">
// //                             <button 
// //                               className="p-2 text-indigo-600 hover:text-indigo-800 transition-colors"
// //                               onClick={() => {
// //                                 // Add edit functionality here
// //                                 console.log("Edit item:", item._id);
// //                               }}
// //                             >
// //                               <FiEdit2 />
// //                             </button>
// //                             <button 
// //                               className="p-2 text-red-600 hover:text-red-800 transition-colors"
// //                               onClick={() => openDeleteModal(item)}
// //                             >
// //                               <FiTrash2 />
// //                             </button>
// //                           </td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               )}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminPanel;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   FiPlusCircle, 
//   FiTrash2, 
//   FiLogOut, 
//   FiList, 
//   FiMenu, 
//   FiX,
//   FiUser,
//   FiChevronDown,
//   FiChevronUp,
//   FiEdit2,
//   FiShoppingBag
// } from "react-icons/fi";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AdminPanel = () => {
//   const [items, setItems] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [credentials, setCredentials] = useState({
//     name: "",
//     role: "",
//     intro: "",
//     Price: "",
//     image: null,
//   });
//   const [loading, setLoading] = useState({
//     delete: false,
//     fetch: false,
//     add: false,
//     fetchOrders: false
//   });
//   const [error, setError] = useState(null);
//   const [activeSection, setActiveSection] = useState("items-list");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const navigate = useNavigate();

//   const API_BASE_URL = "http://localhost:5000/api/auth";

//   const fetchItems = async () => {
//     try {
//       setLoading(prev => ({...prev, fetch: true}));
//       const response = await fetch(`${API_BASE_URL}/items`);
//       const json = await response.json();
//       if (json.Success) {
//         setItems(json.items);
//         toast.success("Items loaded successfully");
//       } else {
//         setError(json.message || "Failed to fetch items");
//         toast.error(json.message || "Failed to fetch items");
//       }
//     } catch (err) {
//       setError(err.message || "Error fetching items");
//       toast.error(err.message || "Error fetching items");
//     } finally {
//       setLoading(prev => ({...prev, fetch: false}));
//     }
//   };

//   const fetchOrders = async () => {
//     try {
//       setLoading(prev => ({...prev, fetchOrders: true}));
//       const response = await fetch(`${API_BASE_URL}/orders`);
//       const json = await response.json();
//       if (response.ok) {
//         setOrders(json.orders);
//         toast.success("Orders loaded successfully");
//       } else {
//         setError(json.message || "Failed to fetch orders");
//         toast.error(json.message || "Failed to fetch orders");
//       }
//     } catch (err) {
//       setError(err.message || "Error fetching orders");
//       toast.error(err.message || "Error fetching orders");
//     } finally {
//       setLoading(prev => ({...prev, fetchOrders: false}));
//     }
//   };

//   // ... (keep all your existing functions like handleInputChange, handleAddItem, etc.)

//   useEffect(() => {
//     fetchItems();
//     fetchOrders();
//   }, []);

//   const handleLogout = () => {
//     console.log("Admin logged out");
//     navigate("/login");
//   };

//   const handleAddItemClick = () => {
//     navigate("/add");
//   };

//   return (
//     <div className="flex h-screen flex-col md:flex-row bg-cover bg-center"
//       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
//     >
//       {/* Overlay and ToastContainer remain the same */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Sidebar - Add Orders option */}
//       <div className={`fixed inset-y-0 left-0 z-40 bg-gray-800 text-white w-64 p-6 transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform md:relative md:translate-x-0 md:w-64`}
//       >
//         {/* ... (keep existing sidebar content) */}

//         <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
//         <ul>
//           <li className="mb-4">
//             <button
//               onClick={() => {
//                 setActiveSection("items-list");
//                 setIsSidebarOpen(false);
//               }}
//               className={`flex items-center text-gray-200 hover:text-white ${
//                 activeSection === "items-list" ? "font-bold text-white" : ""
//               }`}
//             >
//               <FiList className="mr-2" />
//               Items List
//             </button>
//           </li>
//           <li className="mb-4">
//             <button
//               onClick={() => {
//                 setActiveSection("orders-list");
//                 setIsSidebarOpen(false);
//               }}
//               className={`flex items-center text-gray-200 hover:text-white ${
//                 activeSection === "orders-list" ? "font-bold text-white" : ""
//               }`}
//             >
//               <FiShoppingBag className="mr-2" />
//               Orders List
//             </button>
//           </li>
//           <li className="mb-4">
//             <button
//               onClick={handleAddItemClick}
//               className={`flex items-center text-gray-200 hover:text-white ${
//                 activeSection === "add-item" ? "font-bold text-white" : ""
//               }`}
//             >
//               <FiPlusCircle className="mr-2" />
//               Add Item
//             </button>
//           </li>
//           <li className="mt-auto">
//             <button
//               onClick={handleLogout}
//               className="flex items-center text-gray-200 hover:text-white"
//             >
//               <FiLogOut className="mr-2" />
//               Logout
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className={`flex-1 p-6 transition-all duration-300 relative z-10 ${
//           isSidebarOpen ? "mt-20 md:mt-0" : "mt-4 md:mt-0"
//         }`}
//       >
//         <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-6">
//           <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

//           {/* Orders List Section */}
//           {activeSection === "orders-list" && (
//             <div>
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-semibold text-gray-800">Orders List</h2>
//               </div>
              
//               {loading.fetchOrders ? (
//                 <div className="flex justify-center items-center h-64">
//                   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="w-full border-collapse">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="p-3 text-left text-gray-700 font-medium">Order ID</th>
//                         <th className="p-3 text-left text-gray-700 font-medium">Customer</th>
//                         <th className="p-3 text-left text-gray-700 font-medium">Items</th>
//                         <th className="p-3 text-left text-gray-700 font-medium">Total</th>
//                         <th className="p-3 text-left text-gray-700 font-medium">Status</th>
//                         <th className="p-3 text-left text-gray-700 font-medium">Date</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {orders.map((order) => (
//                         <tr key={order._id} className="hover:bg-gray-50 transition-colors">
//                           <td className="p-3 text-gray-800">{order._id}</td>
//                           <td className="p-3 text-gray-800">
//                             {order.customerName}<br />
//                             {order.customerEmail}
//                           </td>
//                           <td className="p-3 text-gray-800">
//                             {order.items.map(item => (
//                               <div key={item._id}>
//                                 {item.name} (x{item.quantity})
//                               </div>
//                             ))}
//                           </td>
//                           <td className="p-3 text-gray-800">${order.totalAmount.toFixed(2)}</td>
//                           <td className="p-3 text-gray-800">
//                             <span className={`px-2 py-1 rounded-full text-xs ${
//                               order.status === 'completed' ? 'bg-green-100 text-green-800' :
//                               order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
//                               'bg-red-100 text-red-800'
//                             }`}>
//                               {order.status}
//                             </span>
//                           </td>
//                           <td className="p-3 text-gray-800">
//                             {new Date(order.createdAt).toLocaleDateString()}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Items List Section (keep existing) */}
//           {activeSection === "items-list" && (
//             <div>
//               {/* ... (keep existing items list code) */}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiPlusCircle, 
  FiTrash2, 
  FiLogOut, 
  FiList, 
  FiMenu, 
  FiX,
  FiUser,
  FiChevronDown,
  FiChevronUp,
  FiEdit2,
  FiShoppingBag
} from "react-icons/fi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPanel = () => {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [credentials, setCredentials] = useState({
    name: "",
    role: "",
    intro: "",
    Price: "",
    image: null,
  });
  const [loading, setLoading] = useState({
    delete: false,
    fetch: false,
    add: false,
    fetchOrders: false
  });
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("items-list");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  const API_BASE_URL = "http://localhost:5000/api/auth";

  const fetchItems = async () => {
    try {
      setLoading(prev => ({...prev, fetch: true}));
      const response = await fetch(`${API_BASE_URL}/items`);
      const json = await response.json();
      if (json.Success) {
        setItems(json.items);
        toast.success("Items loaded successfully");
      } else {
        setError(json.message || "Failed to fetch items");
        toast.error(json.message || "Failed to fetch items");
      }
    } catch (err) {
      setError(err.message || "Error fetching items");
      toast.error(err.message || "Error fetching items");
    } finally {
      setLoading(prev => ({...prev, fetch: false}));
    }
  };

  const fetchOrders = async () => {
    try {
      setLoading(prev => ({...prev, fetchOrders: true}));
      const response = await fetch(`${API_BASE_URL}/orders`);
      const json = await response.json();
      
      if (response.ok) {
        setOrders(json.orders || []);
        toast.success("Orders loaded successfully");
      } else {
        setError(json.message || "Failed to fetch orders");
        toast.error(json.message || "Failed to fetch orders");
      }
    } catch (err) {
      setError(err.message || "Error fetching orders");
      toast.error(err.message || "Error fetching orders");
      setOrders([]);
    } finally {
      setLoading(prev => ({...prev, fetchOrders: false}));
    }
  };

  const openDeleteModal = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleDeleteItem = async () => {
    try {
      setLoading(prev => ({...prev, delete: true}));
      const response = await fetch(`${API_BASE_URL}/items/${selectedItem._id}`, {
        method: 'DELETE'
      });
      const json = await response.json();
      
      if (json.Success) {
        toast.success("Item deleted successfully");
        fetchItems(); // Refresh the list
      } else {
        toast.error(json.message || "Failed to delete item");
      }
    } catch (err) {
      toast.error(err.message || "Error deleting item");
    } finally {
      setLoading(prev => ({...prev, delete: false}));
      setShowDeleteModal(false);
    }
  };

  useEffect(() => {
    fetchItems();
    fetchOrders();
  }, []);

  const handleLogout = () => {
    console.log("Admin logged out");
    navigate("/login");
  };

  const handleAddItemClick = () => {
    navigate("/add");
  };

  return (
    <div className="flex h-screen flex-col md:flex-row bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
    >
      {/* Overlay and ToastContainer */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 bg-gray-800 text-white w-64 p-6 transform ${
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

        {/* Profile Section */}
        <div className="flex items-center mb-8 p-4 bg-gray-700 rounded-lg">
          <div className="relative">
            <div 
              className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center cursor-pointer"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <FiUser className="text-2xl" />
            </div>
            {isProfileDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <div className="py-1">
                  <button
                    onClick={() => {
                      setActiveSection("items-list");
                      setIsProfileDropdownOpen(false);
                      setIsSidebarOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <FiList className="inline mr-2" />
                    Items List
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection("orders-list");
                      setIsProfileDropdownOpen(false);
                      setIsSidebarOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <FiShoppingBag className="inline mr-2" />
                    Orders List
                  </button>
                  <button
                    onClick={handleAddItemClick}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <FiPlusCircle className="inline mr-2" />
                    Add Item
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <FiLogOut className="inline mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="ml-4">
            <p className="font-semibold">Admin User</p>
            <p className="text-gray-300 text-sm">Administrator</p>
          </div>
          <button 
            className="ml-auto text-gray-300"
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          >
            {isProfileDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul>
          <li className="mb-4">
            <button
              onClick={() => {
                setActiveSection("items-list");
                setIsSidebarOpen(false);
              }}
              className={`flex items-center text-gray-200 hover:text-white ${
                activeSection === "items-list" ? "font-bold text-white" : ""
              }`}
            >
              <FiList className="mr-2" />
              Items List
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => {
                setActiveSection("orders-list");
                setIsSidebarOpen(false);
              }}
              className={`flex items-center text-gray-200 hover:text-white ${
                activeSection === "orders-list" ? "font-bold text-white" : ""
              }`}
            >
              <FiShoppingBag className="mr-2" />
              Orders List
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={handleAddItemClick}
              className={`flex items-center text-gray-200 hover:text-white ${
                activeSection === "add-item" ? "font-bold text-white" : ""
              }`}
            >
              <FiPlusCircle className="mr-2" />
              Add Item
            </button>
          </li>
          <li className="mt-auto">
            <button
              onClick={handleLogout}
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
        className="fixed top-4 left-4 md:hidden bg-gray-800 text-white p-2 rounded-md z-40"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FiMenu />
      </button>

      {/* Main Content */}
      <div className={`flex-1 p-6 transition-all duration-300 relative z-10 ${
          isSidebarOpen ? "mt-20 md:mt-0" : "mt-4 md:mt-0"
        }`}
      >
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-6">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

          {/* Orders List Section */}
          {activeSection === "orders-list" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Orders List</h2>
              </div>
              
              {loading.fetchOrders ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  {orders && orders.length > 0 ? (
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left text-gray-700 font-medium">User Name</th>
                          <th className="p-3 text-left text-gray-700 font-medium">Item Name</th>
                          <th className="p-3 text-left text-gray-700 font-medium">Department</th>
                          <th className="p-3 text-left text-gray-700 font-medium">Semester</th>
                          <th className="p-3 text-left text-gray-700 font-medium">Room Number</th>
                          <th className="p-3 text-left text-gray-700 font-medium">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {orders.map((order) => (
                          <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                            <td className="p-3 text-gray-800">{order.UserName}</td>
                            <td className="p-3 text-gray-800">{order.ItemName}</td>
                            <td className="p-3 text-gray-800">{order.DepartmentName}</td>
                            <td className="p-3 text-gray-800">{order.CurrentSemester}</td>
                            <td className="p-3 text-gray-800">{order.RoomNumber}</td>
                            <td className="p-3 text-gray-800">
                              {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No orders found</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Items List Section */}
          {activeSection === "items-list" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Items List</h2>
                <button
                  onClick={handleAddItemClick}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center transition-colors"
                >
                  <FiPlusCircle className="mr-2" />
                  Add New Item
                </button>
              </div>
              
              {loading.fetch ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-3 text-left text-gray-700 font-medium">Name</th>
                        <th className="p-3 text-left text-gray-700 font-medium">Role</th>
                        <th className="p-3 text-left text-gray-700 font-medium">Price</th>
                        <th className="p-3 text-left text-gray-700 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {items.map((item) => (
                        <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                          <td className="p-3 text-gray-800">{item.name}</td>
                          <td className="p-3 text-gray-800">{item.role}</td>
                          <td className="p-3 text-gray-800">Rs.{item.Price}</td>
                          <td className="p-3 flex space-x-2">
                            <button 
                              className="p-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                              onClick={() => {
                                // Add edit functionality here
                                console.log("Edit item:", item._id);
                              }}
                            >
                              <FiEdit2 />
                            </button>
                            <button 
                              className="p-2 text-red-600 hover:text-red-800 transition-colors"
                              onClick={() => openDeleteModal(item)}
                            >
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
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p className="mb-6">Are you sure you want to delete {selectedItem?.name}?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteItem}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                disabled={loading.delete}
              >
                {loading.delete ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;