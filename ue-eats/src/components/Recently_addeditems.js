import React, { useEffect, useState } from "react";

function RecentlyAddedItems() {
  const [recentItems, setRecentItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = "http://localhost:5000/api/auth/items"; 
  const UPLOADS_BASE_URL = "http://localhost:5000/api/auth/uploads"; 
  const DEFAULT_IMAGE_PATH = `${UPLOADS_BASE_URL}/default-image.jpg`;

  const fetchRecentItems = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}?limit=5`); 
      if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);

      const data = await response.json();
      setRecentItems(data.items || []);
    } catch (err) {
      setError("An error occurred while fetching recent items.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentItems();
  }, []);

  const getImageUrl = (imageName) => {
    return imageName ? `${UPLOADS_BASE_URL}/${imageName}` : DEFAULT_IMAGE_PATH;
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
            <div key={item._id} className="border border-gray-300 rounded-lg p-4 flex flex-col items-center">
              <img src={getImageUrl(item.image)} alt={item.name} className="w-24 h-24 object-cover rounded mb-4" />
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-600">{item.role}</p>
              <p className="text-gray-700 font-semibold">₨{item.Price?.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentlyAddedItems;

