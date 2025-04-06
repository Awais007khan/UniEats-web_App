import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import image from './Images/egg burger.jpeg';
import image1 from './Images/lays.jpg';
import image2 from './Images/tea.jpg';
import image3 from './Images/baryani.jpeg';
import image4 from './Images/mango.jpeg';
import image5 from './Images/samoa.jpeg';
import image6 from './Images/banana juice.jpeg';
import image7 from './Images/cold drinks.jpeg';
import image8 from './Images/shawarma.jpeg';
import image9 from './Images/juices.jpeg';
import image10 from './Images/stick fries.jpeg';
import image11 from './Images/Simple burger.jpeg';
import { useCart } from "./Context/CartContext";

const Team = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const members = [
    { name: "Burgerr", role: "The delicious burger here available", img: image, intro: "Its taste awesome", Price: "230 rupees" },
    { name: "Fries", role: "The delicious fries are available here", img: image1, intro: "Its taste awesome", Price: "230 rupees" },
    { name: "Tea", role: "The delicious tea is available", img: image2, intro: "Its taste awesome", Price: "230 rupees" },
    { name: "Baryani", role: "The delicious baryani available here", img: image3, intro: "Its taste awesome", Price: "230 rupees" },
    { name: "Mango juice", role: "The delicious mango juice is available here", img: image4, intro: "Its taste awesome", Price: "230 rupees" },
    { name: "Cold Drinks", role: "Cold Drinks are available here", img: image7, intro: "Its awesome", Price: "230 rupees" },
    { name: "Samosa", role: "The delicious samosa available here", img: image5, intro: "Its taste awesome", Price: "230 rupees" },
    { name: "Banana Juice", role: "The delicious banana juice available here", img: image6, intro: "Its taste awesome", Price: "230 rupees" },
    { name: "Shawarma", role: "The delicious shawarma is available here", img: image8, intro: "Its taste awesome", Price: "230 rupees" },
    { name: "Juices", role: "The quality juices are available here", img: image9, intro: "Its absolutely awesome", Price: "230 rupees" },
    { name: "Sticky Fries", role: "The delicious fries are available here", img: image10, intro: "Its absolutely awesome", Price: "230 rupees" },
    { name: "Simple Burger", role: "The delicious simple burgers are available", img: image11, intro: "Its taste awesome", Price: "230 rupees" }
  ];

  const [ratings, setRatings] = useState({});
  const [status, setStatus] = useState({});
  const [clickedItem, setClickedItem] = useState(null);

  const handleRatingChange = (itemName, rating) => {
    if (rating >= 1 && rating <= 5) {
      setRatings(prevRatings => ({ ...prevRatings, [itemName]: rating }));
    }
  };

  const handleOrderClick = () => {
    navigate('/Contactt');
  };

  const handleDetailsClick = (itemName) => {
    navigate(`/${itemName}`);
  };

  const handleCartClick = (item) => {
    addToCart(item);
    setClickedItem(item.name);
    setTimeout(() => setClickedItem(null), 500);
  };

  const handleRatingSubmit = async (itemName) => {
    const rating = ratings[itemName];

    if (!rating) {
      setStatus(prev => ({
        ...prev,
        [itemName]: { success: false, message: 'Please select a rating before submitting.' }
      }));
      return;
    }

    const ratingData = {
      itemName,
      rating,
    };

    try {
      await axios.post("http://localhost:5000/api/auth/rate", ratingData);
      setStatus(prev => ({
        ...prev,
        [itemName]: { success: true, message: 'Rating submitted successfully!' }
      }));
    } catch (error) {
      console.error('Error submitting rating:', error);
      setStatus(prev => ({
        ...prev,
        [itemName]: { success: false, message: 'Failed to submit rating. Please try again later.' }
      }));
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
                onError={(e) => e.target.src = 'fallback-image.jpg'}
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm mb-4">{member.intro}</p>
              <p>Price: {member.Price}</p>

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

              <div className="bg-gray-100 border border-gray-300 text-gray-800 text-sm font-semibold p-2 rounded-md mb-4 inline-block">
                Price: {member.Price}
              </div>

              <div className="mt-4">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => handleRatingSubmit(member.name)}
                >
                  Submit Rating
                </button>
              </div>

              <button
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                onClick={() => handleDetailsClick(member.name)}
              >
                View Details
              </button>

              <div className="mt-4">
                <button
                  className={`mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform duration-300 ${clickedItem === member.name ? 'scale-110 bg-green-700' : ''}`}
                  onClick={() => handleCartClick(member)}
                >
                  Add to Cart
                </button>
              </div>

              <div className="mt-4">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={handleOrderClick}
                >
                  Order Now
                </button>
              </div>

              {/* Display Status Messages for this specific item only */}
              {status[member.name] && (
                <div className={`mt-4 text-center ${status[member.name].success ? 'text-green-500' : 'text-red-500'}`}>
                  <p>{status[member.name].message}</p>
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


