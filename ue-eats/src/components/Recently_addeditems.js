// import React, { useEffect, useState } from "react";

// function RecentlyAddedItems() {
//   const [recentItems, setRecentItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Replace with your backend API endpoint
//   const API_BASE_URL = "http://localhost:5000/api/auth/items"; 

//   // Fetch recently added items
//   const fetchRecentItems = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(API_BASE_URL);
//       const data = await response.json();

//       if (data.Success) {
//         // Sort items by most recently added
//         const sortedItems = data.items.sort(
//           (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//         );
//         setRecentItems(sortedItems.slice(0, 5)); // Show top 5 recently added items
//       } else {
//         setError(data.message || "Failed to fetch recent items");
//       }
//     } catch (err) {
//       setError("An error occurred while fetching recent items");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRecentItems();
//   }, []);

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-semibold mb-4">Recently Added Items</h2>
//       {loading ? (
//         <p className="text-gray-500">Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : recentItems.length === 0 ? (
//         <p className="text-gray-500">No items have been added yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {recentItems.map((item) => (
//             <div
//               key={item._id}
//               className="border border-gray-300 rounded-lg p-4 flex flex-col items-center"
//             >
//               {item.image && (
//                 <img
//                   src={`http://localhost:5000/uploads/${item.image}`}
//                   alt={item.name}
//                   className="w-24 h-24 object-cover rounded mb-4"
//                 />
//               )}
//               <h3 className="text-lg font-medium">{item.name}</h3>
//               <p className="text-gray-600">{item.role}</p>
//               <p className="text-gray-700 font-semibold">${item.Price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default RecentlyAddedItems;

// import React, { useEffect, useState } from "react";

// function RecentlyAddedItems() {
//   const [recentItems, setRecentItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Replace with your backend API endpoint
//   const API_BASE_URL = "http://localhost:5000/api/auth/items"; 

//   // Assuming 1 USD = 300 PKR for conversion (you can update it dynamically)
//   const USD_TO_PKR = 300;

//   // Fetch recently added items
//   const fetchRecentItems = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(API_BASE_URL);
//       const data = await response.json();

//       if (data.Success) {
//         // Sort items by most recently added
//         const sortedItems = data.items.sort(
//           (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//         );
//         setRecentItems(sortedItems.slice(0, 5)); // Show top 5 recently added items
//       } else {
//         setError(data.message || "Failed to fetch recent items");
//       }
//     } catch (err) {
//       setError("An error occurred while fetching recent items");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRecentItems();
//   }, []);

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-semibold mb-4">Recently Added Items</h2>
//       {loading ? (
//         <p className="text-gray-500">Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : recentItems.length === 0 ? (
//         <p className="text-gray-500">No items have been added yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {recentItems.map((item) => (
//             <div
//               key={item._id}
//               className="border border-gray-300 rounded-lg p-4 flex flex-col items-center"
//             >
//               {/* Display image if it exists */}
//               {item.image ? (
//                 <img
//                   src={`http://localhost:5000/uploads/${item.image}`}
//                   alt={item.name}
//                   className="w-24 h-24 object-cover rounded mb-4"
//                 />
//               ) : (
//                 <img
//                   src="/path/to/default-image.jpg"  // Replace with your default image path
//                   alt="Default"
//                   className="w-24 h-24 object-cover rounded mb-4"
//                 />
//               )}

//               <h3 className="text-lg font-medium">{item.name}</h3>
//               <p className="text-gray-600">{item.role}</p>
//               <p className="text-gray-700 font-semibold">
//                 ₨{(item.Price * USD_TO_PKR).toFixed(2)} {/* Convert price to PKR */}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default RecentlyAddedItems;
// import React, { useEffect, useState } from "react";

// function RecentlyAddedItems() {
//   const [recentItems, setRecentItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Backend API endpoint
//   const API_BASE_URL = "http://localhost:5000/api/auth/items";

//   // Default image in case no image is available for an item
//   const DEFAULT_IMAGE_PATH = "/path/to/default-image.jpg";

//   const fetchRecentItems = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(API_BASE_URL);
//       if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);

//       const data = await response.json();
//       if (data.Success) {
//         // Sort items by the most recently added
//         const sortedItems = data.items.sort(
//           (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//         );
//         setRecentItems(sortedItems.slice(0, 5)); // Limit to top 5
//       } else {
//         setError(data.message || "Failed to fetch recent items");
//       }
//     } catch (err) {
//       setError(err.message || "An error occurred while fetching recent items");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRecentItems();
//   }, []);

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-semibold mb-4">Recently Added Items</h2>
//       {loading ? (
//         <p className="text-gray-500">Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : recentItems.length === 0 ? (
//         <p className="text-gray-500">No items have been added yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {recentItems.map((item) => (
//             <div
//               key={item._id}
//               className="border border-gray-300 rounded-lg p-4 flex flex-col items-center"
//             >
//               {/* Display image from the server */}
//               <img
//                 src={item.image ? `http://localhost:5000/uploads/${item.image}` : DEFAULT_IMAGE_PATH}
//                 alt={item.name || "Default Image"}
//                 className="w-24 h-24 object-cover rounded mb-4"
//               />
//               <h3 className="text-lg font-medium">{item.name || "Unknown Item"}</h3>
//               <p className="text-gray-600">{item.role || "No role available"}</p>
//               {/* Display price directly from the database */}
//               <p className="text-gray-700 font-semibold">
//                 ₨{item.Price?.toFixed(2) || "0.00"}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default RecentlyAddedItems;
// import React, { useEffect, useState } from "react";

// function RecentlyAddedItems() {
//   const [recentItems, setRecentItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_BASE_URL = "http://localhost:5000/api/auth/items"; // Ensure the correct endpoint
//   const UPLOADS_BASE_URL = "http://localhost:5000/uploads"; // Correct base URL for images
//   // const DEFAULT_IMAGE_PATH = "/default-image.jpg"; // Ensure default image exists
//   // const DEFAULT_IMAGE_PATH = "/default-image.jpg"; // Points to the public folder by default
//   const DEFAULT_IMAGE_PATH = "http://localhost:5000/default-image.jpg"; // if it's hosted on the backend



//   const fetchRecentItems = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(API_BASE_URL);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status} ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log(data); // Log the entire response to check its structure

//       if (data.Success) {
//         // Log image field of items
//         data.items.forEach(item => {
//           console.log(item.image);
//         });

//         const sortedItems = data.items.sort(
//           (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//         );
//         setRecentItems(sortedItems.slice(0, 5));
//       } else {
//         setError(data.message || "Failed to fetch recent items");
//       }
//     } catch (err) {
//       setError(err.message || "An error occurred while fetching recent items");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRecentItems();
//   }, []);

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-semibold mb-4">Recently Added Items</h2>

//       {loading ? (
//         <p className="text-gray-500">Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : recentItems.length === 0 ? (
//         <p className="text-gray-500">No items have been added yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {recentItems.map((item) => (
//             <div
//               key={item._id}
//               className="border border-gray-300 rounded-lg p-4 flex flex-col items-center"
//             >
//               {/* Display the item's image or default image if the image is missing */}
//               <img
//                 src={item.image ? `${UPLOADS_BASE_URL}/${item.image}` : DEFAULT_IMAGE_PATH}
//                 alt={item.name || "Default Image"}
//                 className="w-24 h-24 object-cover rounded mb-4"
//                 onError={(e) => e.target.src = DEFAULT_IMAGE_PATH}  // Fallback to default image if image fails to load
//               />
//               <h3 className="text-lg font-medium">{item.name || "Unknown Item"}</h3>
//               <p className="text-gray-600">{item.role || "No role available"}</p>
//               <p className="text-gray-700 font-semibold">
//                 ₨{item.Price?.toFixed(2) || "0.00"}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default RecentlyAddedItems;

// import React, { useEffect, useState } from "react";

// function RecentlyAddedItems() {
//   const [recentItems, setRecentItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_BASE_URL = "http://localhost:5000/api/auth/items"; // Correct API endpoint
//   const UPLOADS_BASE_URL = "http://localhost:5000/backend/uploads"; // Correct base URL for images
//   const DEFAULT_IMAGE_PATH = "http://localhost:5000/uploads/default-image.jpg"; // Default image

//   const fetchRecentItems = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(API_BASE_URL);

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status} ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log(data); // Log the entire response for debugging

//       if (data.Success && Array.isArray(data.items)) {
//         // Sort items by createdAt (most recent first)
//         const sortedItems = data.items.sort(
//           (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//         );
//         setRecentItems(sortedItems.slice(0, 5)); // Only show 5 most recent items
//       } else {
//         setError(data.message || "Failed to fetch recent items.");
//       }
//     } catch (err) {
//       console.error("Fetch error:", err); // Log the actual error for debugging
//       setError("An error occurred while fetching recent items. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRecentItems();
//   }, []);

//   // Function to handle image URL fallback in case of invalid or missing image
//   const getImageUrl = (imageName) => {
//     const imageUrl = imageName ? `${UPLOADS_BASE_URL}/${imageName}` : DEFAULT_IMAGE_PATH;
//     console.log("Image URL:", imageUrl); // Log image URL for debugging
//     return imageUrl;
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-semibold mb-4">Recently Added Items</h2>

//       {loading ? (
//         <p className="text-gray-500">Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : recentItems.length === 0 ? (
//         <p className="text-gray-500">No items have been added yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {recentItems.map((item) => (
//             <div
//               key={item._id}
//               className="border border-gray-300 rounded-lg p-4 flex flex-col items-center"
//             >
//               <img
//                 src={getImageUrl(item.image)}  // Image URL with fallback
//                 alt={item.name || "Default Image"}
//                 className="w-24 h-24 object-cover rounded mb-4"
//                 onError={(e) => {
//                   console.error("Image load error:", e.target.src); // Log image load error
//                   e.target.src = DEFAULT_IMAGE_PATH;  // Fallback to default image
//                 }} 
//               />
//               <h3 className="text-lg font-medium">{item.name || "Unknown Item"}</h3>
//               <p className="text-gray-600">{item.role || "Role not available"}</p>
//               <p className="text-gray-700 font-semibold">
//                 ₨{item.Price?.toFixed(2) || "0.00"}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default RecentlyAddedItems;
import React, { useEffect, useState } from "react";

function RecentlyAddedItems() {
  const [recentItems, setRecentItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = "http://localhost:5000/api/auth/items"; // Correct API endpoint
  const UPLOADS_BASE_URL = "http://localhost:5000/backend/uploads"; // Base URL for images
  const DEFAULT_IMAGE_PATH = "http://localhost:5000/uploads/default-image.jpg"; // Default image

  // Fetch recent items from the API
  const fetchRecentItems = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}?limit=5`); // Limit results to 5 if supported by API

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (data.Success && Array.isArray(data.items)) {
        setRecentItems(data.items);
      } else {
        setError(data.message || "Failed to fetch recent items.");
      }
    } catch (err) {
      console.error("Fetch error:", err); // Log only in development
      setError("An error occurred while fetching recent items. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentItems();
  }, []);

  // Function to get image URL or fallback
  const getImageUrl = (imageName) => {
    const imageUrl = imageName ? `${UPLOADS_BASE_URL}/${imageName}` : DEFAULT_IMAGE_PATH;
    console.log("Generated Image URL:", imageUrl); // Debugging log to track the generated URL
    return imageUrl;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Recently Added Items</h2>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : recentItems.length === 0 ? (
        <p className="text-gray-500">No items have been added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recentItems.map((item) => (
            <div
              key={item._id}
              className="border border-gray-300 rounded-lg p-4 flex flex-col items-center"
            >
              {/* Image element */}
              <img
                src={getImageUrl(item.image)} // Dynamically generated image URL
                alt={item.name || "Default Image"}
                className="w-24 h-24 object-cover rounded mb-4"
                onError={(e) => {
                  console.error("Image load error:", e.target.src); // Log image load error
                  e.target.src = DEFAULT_IMAGE_PATH; // Fallback to default image
                }}
              />
              <h3 className="text-lg font-medium">{item.name || "Unknown Item"}</h3>
              <p className="text-gray-600">{item.role || "Role not available"}</p>
              <p className="text-gray-700 font-semibold">
                ₨{item.Price?.toFixed(2) || "0.00"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentlyAddedItems;
