// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import image from './Images/egg burger.jpeg';
// import image1 from './Images/lays.jpg';
// import image2 from './Images/tea.jpg';
// import image3 from './Images/baryani.jpeg';
// import image4 from './Images/mango.jpeg';
// import image5 from './Images/samoa.jpeg';
// import image6 from './Images/banana juice.jpeg';
// import image7 from './Images/cold drinks.jpeg';
// import image8 from './Images/shawarma.jpeg';
// import image9 from './Images/juices.jpeg';
// import image10 from './Images/stick fries.jpeg';
// import image11 from './Images/Simple burger.jpeg';
// import { useCart } from "./Context/CartContext";

// const Team = () => {
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   const members = [
//     { name: "Burgerr", role: "The delicious burger here available", img: image, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Fries", role: "The delicious fries are available here", img: image1, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Tea", role: "The delicious tea is available", img: image2, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Baryani", role: "The delicious baryani available here", img: image3, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Mango juice", role: "The delicious mango juice is available here", img: image4, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Cold Drinks", role: "Cold Drinks are available here", img: image7, intro: "Its awesome", Price: "230 rupees" },
//     { name: "Samosa", role: "The delicious samosa available here", img: image5, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Banana Juice", role: "The delicious banana juice available here", img: image6, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Shawarma", role: "The delicious shawarma is available here", img: image8, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Juices", role: "The quality juices are available here", img: image9, intro: "Its absolutely awesome", Price: "230 rupees" },
//     { name: "Sticky Fries", role: "The delicious fries are available here", img: image10, intro: "Its absolutely awesome", Price: "230 rupees" },
//     { name: "Simple Burger", role: "The delicious simple burgers are available", img: image11, intro: "Its taste awesome", Price: "230 rupees" }
//   ];

//   const [ratings, setRatings] = useState({});
//   const [status, setStatus] = useState({});
//   const [clickedItem, setClickedItem] = useState(null);

//   const handleRatingChange = (itemName, rating) => {
//     if (rating >= 1 && rating <= 5) {
//       setRatings(prevRatings => ({ ...prevRatings, [itemName]: rating }));
//     }
//   };

//   const handleOrderClick = () => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate('/payment'); // User is logged in
//     } else {
//       navigate('/Contactt'); // Redirect to login
//     }
//   };

//   const handleDetailsClick = (itemName) => {
//     navigate(`/${itemName}`);
//   };

//   const handleCartClick = (item) => {
//     addToCart(item);
//     setClickedItem(item.name);
//     setTimeout(() => setClickedItem(null), 500);
//   };

//   const handleRatingSubmit = async (itemName) => {
//     const rating = ratings[itemName];

//     if (!rating) {
//       setStatus(prev => ({
//         ...prev,
//         [itemName]: { success: false, message: 'Please select a rating before submitting.' }
//       }));
//       return;
//     }

//     const ratingData = {
//       itemName,
//       rating,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/auth/rate", ratingData);
//       setStatus(prev => ({
//         ...prev,
//         [itemName]: { success: true, message: 'Rating submitted successfully!' }
//       }));
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       setStatus(prev => ({
//         ...prev,
//         [itemName]: { success: false, message: 'Failed to submit rating. Please try again later.' }
//       }));
//     }
//   };

//   return (
//     <section id="team" className="py-20 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">Available Items</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {members.map((member) => (
//             <div
//               key={member.name}
//               className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105"
//             >
//               <img
//                 className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
//                 src={member.img}
//                 alt={member.name}
//                 onError={(e) => e.target.src = 'fallback-image.jpg'}
//               />
//               <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
//               <p className="text-gray-600 mb-2">{member.role}</p>
//               <p className="text-gray-700 text-sm mb-4">{member.intro}</p>
//               <p>Price: {member.Price}</p>

//               {/* Rating Section */}
//               <div className="mb-4">
//                 <span className="text-yellow-500">Rating:</span>
//                 <div className="flex justify-center mb-2">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <button
//                       key={star}
//                       className={`text-2xl ${ratings[member.name] >= star ? 'text-yellow-500' : 'text-gray-400'}`}
//                       onClick={() => handleRatingChange(member.name, star)}
//                     >
//                       ★
//                     </button>
//                   ))}
//                 </div>
//                 <input
//                   type="number"
//                   min="1"
//                   max="5"
//                   value={ratings[member.name] || ''}
//                   onChange={(e) => handleRatingChange(member.name, parseInt(e.target.value, 10))}
//                   className="w-20 p-2 text-center border rounded"
//                   placeholder="Rate"
//                 />
//               </div>

//               <div className="bg-gray-100 border border-gray-300 text-gray-800 text-sm font-semibold p-2 rounded-md mb-4 inline-block">
//                 Price: {member.Price}
//               </div>

//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={() => handleRatingSubmit(member.name)}
//                 >
//                   Submit Rating
//                 </button>
//               </div>

//               <button
//                 className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                 onClick={() => handleDetailsClick(member.name)}
//               >
//                 View Details
//               </button>

//               <div className="mt-4">
//                 <button
//                   className={`mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform duration-300 ${clickedItem === member.name ? 'scale-110 bg-green-700' : ''}`}
//                   onClick={() => handleCartClick(member)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>

//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={handleOrderClick}
//                 >
//                   Order Now
//                 </button>
//               </div>

//               {/* Display Status Messages for this specific item only */}
//               {status[member.name] && (
//                 <div className={`mt-4 text-center ${status[member.name].success ? 'text-green-500' : 'text-red-500'}`}>
//                   <p>{status[member.name].message}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;
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
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleRatingChange = (itemName, rating) => {
    if (rating >= 1 && rating <= 5) {
      setRatings(prevRatings => ({ ...prevRatings, [itemName]: rating }));
    }
  };

  const handleOrderClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate('/payment');
    } else {
      navigate('/Contactt');
    }
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
    <section id="team" className="pt-24 pb-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-white font-serif">Our Delicious Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className={`relative bg-gray-800 p-6 rounded-xl shadow-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20 border border-gray-700 ${hoveredItem === member.name ? 'ring-2 ring-purple-500' : ''}`}
              onMouseEnter={() => setHoveredItem(member.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Food Image with Glow Effect */}
              <div className="relative mb-6 mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/30">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  src={member.img}
                  alt={member.name}
                  onError={(e) => e.target.src = 'fallback-image.jpg'}
                />
              </div>
              
              {/* Food Details */}
              <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
              <p className="text-gray-300 mb-3 text-sm">{member.role}</p>
              <p className="text-purple-300 text-sm mb-4 italic">"{member.intro}"</p>
              
              {/* Price Tag */}
              <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                {member.Price}
              </div>
              
              {/* Rating Section */}
              <div className="mb-5 bg-gray-700 p-3 rounded-lg">
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className={`text-2xl mx-1 transition-all ${ratings[member.name] >= star ? 'text-yellow-400 transform scale-110' : 'text-gray-500'}`}
                      onClick={() => handleRatingChange(member.name, star)}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <div className="flex justify-center">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={ratings[member.name] || ''}
                    onChange={(e) => handleRatingChange(member.name, parseInt(e.target.value, 10))}
                    className="w-16 p-1 text-center border border-gray-600 rounded bg-gray-800 text-white"
                    placeholder="1-5"
                  />
                  <button
                    className="ml-2 px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
                    onClick={() => handleRatingSubmit(member.name)}
                  >
                    Rate
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <button
                  className="px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center"
                  onClick={() => handleDetailsClick(member.name)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Details
                </button>
                <button
                  className={`px-3 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:from-green-700 hover:to-teal-700 transition-all flex items-center justify-center ${clickedItem === member.name ? 'animate-pulse' : ''}`}
                  onClick={() => handleCartClick(member)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  {clickedItem === member.name ? 'Added!' : 'Add to Cart'}
                </button>
              </div>
              
              {/* Order Now Button */}
              <button
                className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-700 hover:to-pink-700 transition-all flex items-center justify-center"
                onClick={handleOrderClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Order Now
              </button>
              
              {/* Status Messages */}
              {status[member.name] && (
                <div className={`mt-3 p-2 rounded text-center text-sm ${status[member.name].success ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                  {status[member.name].message}
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