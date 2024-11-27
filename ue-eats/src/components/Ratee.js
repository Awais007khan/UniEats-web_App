import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for making API calls

// import image from './egg burger.jpeg';
import image from './Images/egg burger.jpeg';
// import image1 from './lays.jpg';
import image1 from './Images/lays.jpg';
// import image2 from './tea.jpg';
import image2 from './Images/tea.jpg';
// import image3 from './baryani.jpeg';
import image3 from './Images/baryani.jpeg';
// import image4 from './mango.jpeg';
import image4 from './Images/mango.jpeg';
// import image5 from './samoa.jpeg';
import image5 from './Images/samoa.jpeg';
// import image6 from './banana juice.jpeg';
import image6 from './Images/banana juice.jpeg';
// import image7 from './cold drinks.jpeg';
import image7 from './Images/cold drinks.jpeg';
// import image8 from './shawarma.jpeg';
import image8 from './Images/shawarma.jpeg';
// import image9 from './juices.jpeg';
import image9 from './Images/juices.jpeg';
// import image10 from './stick fries.jpeg';
import image10 from './Images/stick fries.jpeg';
// import image11 from './Simple burger.jpeg';
import image11 from './Images/Simple burger.jpeg';

const Team = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const members = [
    { name: "Burgerr", role: "The delicious burger here available", img: image, intro: "Its taste awesome" },
    { name: "Fries", role: "The delicious fries are available here", img: image1, intro: "Its taste awesome" },
    { name: "Tea", role: "The delicious tea is available", img: image2, intro: "Its taste awesome" },
    { name: "Baryani", role: "The delicious baryani available here", img: image3, intro: "Its taste awesome" },
    { name: "Mango juice", role: "The delicious mango juice is available here", img: image4, intro: "Its taste awesome" },
    { name: "Cold Drinks", role: "Cold Drinks are available here", img: image7, intro: "Its awesome" },
    { name: "Samosa", role: "The delicious samosa available here", img: image5, intro: "Its taste awesome" },
    { name: "Banana Juice", role: "The delicious Mutton Nahari available here", img: image6, intro: "Its taste awesome" },
    { name: "Shawarma", role: "The delicious shawarma is available here", img: image8, intro: "Its taste awesome" },
    { name: "Juices", role: "The quality juices are available here", img: image9, intro: "Its absolutely awesome" },
    { name: "Sticky Fries", role: "The delicious fries are available here", img: image10, intro: "Its absolutely awesome" },
    { name: "Simple Burger", role: "The delicious simple burgers are available", img: image11, intro: "Its taste awesome" }
  ];

  // State to hold ratings and comments for each item
  const [ratings, setRatings] = useState({});
  const [orderStatus, setOrderStatus] = useState(null); // For tracking order status (success/error)
  const [status, setStatus] = useState(null);

  // Function to handle rating input change
  const handleRatingChange = (itemName, rating) => {
    if (rating >= 1 && rating <= 5) {
      setRatings(prevRatings => ({ ...prevRatings, [itemName]: rating }));
    }
  };

  // Function to handle order submission (both rating and comment)
  const handleOrderClick = async () => {
    navigate('/Contactt');
  };

  const handleDetailsClick = (itemName) => {
    navigate(`/${itemName}`);
  };

  const handleRatingSubmit = async (itemName) => {
    const rating = ratings[itemName];  // Get the rating for this item

    if (!rating) {
      setStatus({ success: false, message: 'Please select a rating before submitting.' });
      return;  // Ensure the user has selected a rating
    }

    const ratingData = {
      itemName,
      rating,
    };

    try {
      // Send POST request to backend with rating data
      const response = await axios.post("http://localhost:5000/api/auth/rate", ratingData);
      setStatus({ success: true, message: 'Rating submitted successfully!' });
    } catch (error) {
      console.error('Error submitting rating:', error);
      setStatus({ success: false, message: 'Failed to submit rating. Please try again later.' });
    }
  };

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Available Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105"
            >
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                src={member.img}
                alt={member.name}
                onError={(e) => e.target.src = 'fallback-image.jpg'} // Fallback image
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm mb-4">{member.intro}</p>

              {/* Rating Section */}
              <div className="mb-4">
                <span className="text-yellow-500">Rating:</span>
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className={`text-2xl ${ratings[member.name] >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                      onClick={() => handleRatingChange(member.name, star)}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={ratings[member.name] || ''}
                  onChange={(e) => handleRatingChange(member.name, parseInt(e.target.value, 10))}
                  className="w-20 p-2 text-center border rounded"
                  placeholder="Rate"
                />
              </div>
              <div className="mt-4">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => handleRatingSubmit(member.name)} // Submit the rating
                >
                  Submit Rating
                </button>
              </div>

              <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  onClick={() => handleDetailsClick(member.name)}>
                  View Details
              </button>

              <div className="mt-4">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => handleOrderClick(member.name)} // Submit the order
                >
                  Order Now
                </button>
              </div>

              {/* Display Status Messages */}
              {status && (
                <div className={`mt-4 text-center ${status.success ? 'text-green-500' : 'text-red-500'}`}>
                  <p>{status.message}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;