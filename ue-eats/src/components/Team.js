// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";  // Import Axios for making API calls

// import image from './egg burger.jpeg';
// import image1 from './lays.jpg';
// import image2 from './tea.jpg';
// import image3 from './baryani.jpeg';
// import image4 from './mango.jpeg';
// import image5 from './samoa.jpeg';
// import image6 from './banana juice.jpeg';
// import image7 from './cold drinks.jpeg';
// import image8 from './shawarma.jpeg';
// import image9 from './juices.jpeg';
// import image10 from './stick fries.jpeg';
// import image11 from './Simple burger.jpeg';

// const Team = () => {
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const members = [
//     { name: "Burgerr", role: "The delicious burger here available", img: image, intro: "Its taste awesome" },
//     { name: "Fries", role: "The delicious fries are available here", img: image1, intro: "Its taste awesome" },
//     { name: "Tea", role: "The delicious tea is available", img: image2, intro: "Its taste awesome" },
//     { name: "Baryani", role: "The delicious baryani available here", img: image3, intro: "Its taste awesome" },
//     { name: "Mango juice", role: "The delicious mango juice is available here", img: image4, intro: "Its taste awesome" },
//     { name: "Cold Drinks", role: "Cold Drinks are available here", img: image7, intro: "Its awesome" },
//     { name: "Samosa", role: "The delicious samosa available here", img: image5, intro: "Its taste awesome" },
//     { name: "Banana Juice", role: "The delicious Mutton Nahari available here", img: image6, intro: "Its taste awesome" },
//     { name: "Shawarma", role: "The delicious shawarma is available here", img: image8, intro: "Its taste awesome" },
//     { name: "Juices", role: "The quality juices are available here", img: image9, intro: "Its absolutely awesome" },
//     { name: "Sticky Fries", role: "The delicious fries are available here", img: image10, intro: "Its absolutely awesome" },
//     { name: "Simple Burger", role: "The delicious simple burgers are available", img: image11, intro: "Its taste awesome" }
//   ];

//   // State to hold ratings and comments for each item
//   const [ratings, setRatings] = useState({});
//   const [comments, setComments] = useState({});
//   const [orderStatus, setOrderStatus] = useState(null); // For tracking order status (success/error)
//   const [commentStatus, setCommentStatus] = useState(null); // For comment submission status

//   // Function to handle rating change
//   const handleRatingChange = (itemName, rating) => {
//     setRatings(prevRatings => ({ ...prevRatings, [itemName]: rating }));
//   };

//   // Function to handle comment change
//   const handleCommentChange = (itemName, comment) => {
//     setComments(prevComments => ({ ...prevComments, [itemName]: comment }));
//   };

//   // Function to handle order submission (both rating and comment)
//   const handleOrderClick = async () => {
//     navigate('/Contactt')
//   };
//   const handleCommentClick = async () => {
//     navigate('/Comment')
//   };
//   const handleDetailsClick = (itemName) => {
//     navigate(`/${itemName}`);
//   };
//   // Function to handle comment submission
//   // const handleCommentSubmit = async () => {
//   //   const commentData = {
//   //     itemname: memberName,
//   //     comment: comments[memberName] || "", // Ensure the comment is not empty
//   //   };

//   //   try {
//   //     // Make the POST request to submit the comment
//   //     const response = await axios.post("http://localhost:5000/api/auth/commet", commentData);
//   //     setCommentStatus({ success: true, message: 'Comment submitted successfully!' });
//   //   } catch (error) {
//   //     console.error('Error submitting comment:', error);
//   //     setCommentStatus({ success: false, message: 'Error submitting comment. Please try again!' });
//   //   }
//   // };

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
//                 onError={(e) => e.target.src = 'fallback-image.jpg'} // Fallback image
//               />
//               <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
//               <p className="text-gray-600 mb-2">{member.role}</p>
//               <p className="text-gray-700 text-sm mb-4">{member.intro}</p>

//               {/* Rating Section */}
//               <div className="mb-4">
//                 <span className="text-yellow-500">Rating:</span>
//                 <div className="flex justify-center">
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
//               </div>

//               {/* Comment Section */}
//               {/* <textarea
//                 className="w-full p-2 border rounded-lg"
//                 placeholder="Leave a comment"
//                 value={comments[member.name] || ''}
//                 onChange={(e) => handleCommentChange(member.name, e.target.value)}
//               ></textarea> */}
//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={() => handleCommentClick(member.name)} // Submit the order (rating + comment)
//                 >
//                   Comment
//                 </button>
//               </div>
//               <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                   onClick={() => handleDetailsClick(member.name)}>
//                   View Details
//                 </button>

//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={() => handleOrderClick(member.name)} // Submit the order (rating + comment)
//                 >
//                   Order Now
//                 </button>
//               </div>

//               {/* Display Status Messages */}
//               {orderStatus && (
//                 <div className={`mt-4 text-center ${orderStatus.success ? 'text-green-500' : 'text-red-500'}`}>
//                   <p>{orderStatus.message}</p>
//                 </div>
//               )}

//               {commentStatus && (
//                 <div className={`mt-4 text-center ${commentStatus.success ? 'text-green-500' : 'text-red-500'}`}>
//                   <p>{commentStatus.message}</p>
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
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";  // Import Axios for making API calls

// import image from './egg burger.jpeg';
// import image1 from './lays.jpg';
// import image2 from './tea.jpg';
// import image3 from './baryani.jpeg';
// import image4 from './mango.jpeg';
// import image5 from './samoa.jpeg';
// import image6 from './banana juice.jpeg';
// import image7 from './cold drinks.jpeg';
// import image8 from './shawarma.jpeg';
// import image9 from './juices.jpeg';
// import image10 from './stick fries.jpeg';
// import image11 from './Simple burger.jpeg';

// const Team = () => {
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const members = [
//     { name: "Burgerr", role: "The delicious burger here available", img: image, intro: "Its taste awesome" },
//     { name: "Fries", role: "The delicious fries are available here", img: image1, intro: "Its taste awesome" },
//     { name: "Tea", role: "The delicious tea is available", img: image2, intro: "Its taste awesome" },
//     { name: "Baryani", role: "The delicious baryani available here", img: image3, intro: "Its taste awesome" },
//     { name: "Mango juice", role: "The delicious mango juice is available here", img: image4, intro: "Its taste awesome" },
//     { name: "Cold Drinks", role: "Cold Drinks are available here", img: image7, intro: "Its awesome" },
//     { name: "Samosa", role: "The delicious samosa available here", img: image5, intro: "Its taste awesome" },
//     { name: "Banana Juice", role: "The delicious Mutton Nahari available here", img: image6, intro: "Its taste awesome" },
//     { name: "Shawarma", role: "The delicious shawarma is available here", img: image8, intro: "Its taste awesome" },
//     { name: "Juices", role: "The quality juices are available here", img: image9, intro: "Its absolutely awesome" },
//     { name: "Sticky Fries", role: "The delicious fries are available here", img: image10, intro: "Its absolutely awesome" },
//     { name: "Simple Burger", role: "The delicious simple burgers are available", img: image11, intro: "Its taste awesome" }
//   ];

//   // State to hold ratings and comments for each item
//   const [ratings, setRatings] = useState({});
//   const [comments, setComments] = useState({});
//   const [orderStatus, setOrderStatus] = useState(null); // For tracking order status (success/error)
//   const [commentStatus, setCommentStatus] = useState(null); // For comment submission status
//   const [status, setStatus] = useState(null);

//   // Function to handle rating change
//   const handleRatingChange = (itemName, rating) => {
//     setRatings(prevRatings => ({ ...prevRatings, [itemName]: rating }));
//   };

//   // Function to handle comment change
//   const handleCommentChange = (itemName, comment) => {
//     setComments(prevComments => ({ ...prevComments, [itemName]: comment }));
//   };

//   // Function to handle order submission (both rating and comment)
//   const handleOrderClick = async () => {
//     navigate('/Contactt')
//   };
//   const handleCommentClick = async () => {
//     navigate('/Comment')
//   };
//   const handleDetailsClick = (itemName) => {
//     navigate(`/${itemName}`);
//   };
//   const handleRatingSubmit = async (itemName) => {
//     const rating = ratings[itemName];  // Get the rating for this item

//     if (!rating) {
//       setStatus({ success: false, message: 'Please select a rating before submitting.' });
//       return;  // Ensure the user has selected a rating
//     }

//     const ratingData = {
//       itemName,
//       rating,
//     };

//     try {
//       // Send POST request to backend with rating data
//       const response = await axios.post("http://localhost:5000/api/auth/rate", ratingData);
//       setStatus({ success: true, message: 'Rating submitted successfully!' });
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       setStatus({ success: false, message: 'Failed to submit rating. Please try again later.' });
//     }}
//   // Function to handle comment submission
//   const handleCommentSubmit = async () => {
//     const commentData = {
//       itemname: memberName,
//       comment: comments[memberName] || "", // Ensure the comment is not empty
//     };

//     try {
//       // Make the POST request to submit the comment
//       const response = await axios.post("http://localhost:5000/api/auth/commet", commentData);
//       setCommentStatus({ success: true, message: 'Comment submitted successfully!' });
//     } catch (error) {
//       console.error('Error submitting comment:', error);
//       setCommentStatus({ success: false, message: 'Error submitting comment. Please try again!' });
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
//                 onError={(e) => e.target.src = 'fallback-image.jpg'} // Fallback image
//               />
//               <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
//               <p className="text-gray-600 mb-2">{member.role}</p>
//               <p className="text-gray-700 text-sm mb-4">{member.intro}</p>

//               {/* Rating Section */}
//               <div className="mb-4">
//                 <span className="text-yellow-500">Rating:</span>
//                 <div className="flex justify-center">
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
//               </div>
//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={() => handleRatingSubmit(member.name)} // Submit the rating
//                 >
//                   Submit Rating
//                 </button>
//               </div>

//               {/* Comment Section */}
//               <textarea
//                 className="w-full p-2 border rounded-lg"
//                 placeholder="Leave a comment"
//                 value={comments[member.name] || ''}
//                 onChange={(e) => handleCommentChange(member.name, e.target.value)}
//               ></textarea>
//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={() => handleCommentClick(member.name)} // Submit the order (rating + comment)
//                 >
//                   Comment
//                 </button>
//               </div>
//               <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                   onClick={() => handleDetailsClick(member.name)}>
//                   View Details
//                 </button>

//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={() => handleOrderClick(member.name)} // Submit the order (rating + comment)
//                 >
//                   Order Now
//                 </button>
//               </div>

//               {/* Display Status Messages */}
//               {orderStatus && (
//                 <div className={`mt-4 text-center ${orderStatus.success ? 'text-green-500' : 'text-red-500'}`}>
//                   <p>{orderStatus.message}</p>
//                 </div>
//               )}

//               {commentStatus && (
//                 <div className={`mt-4 text-center ${commentStatus.success ? 'text-green-500' : 'text-red-500'}`}>
//                   <p>{commentStatus.message}</p>
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

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import Axios for making API calls

// // import image from './egg burger.jpeg';
// import image from './Images/egg burger.jpeg';
// // import image1 from './lays.jpg';
// import image1 from './Images/lays.jpg';
// // import image2 from './tea.jpg';
// import image2 from './Images/tea.jpg';
// // import image3 from './baryani.jpeg';
// import image3 from './Images/baryani.jpeg';
// // import image4 from './mango.jpeg';
// import image4 from './Images/mango.jpeg';
// // import image5 from './samoa.jpeg';
// import image5 from './Images/samoa.jpeg';
// // import image6 from './banana juice.jpeg';
// import image6 from './Images/banana juice.jpeg';
// // import image7 from './cold drinks.jpeg';
// import image7 from './Images/cold drinks.jpeg';
// // import image8 from './shawarma.jpeg';
// import image8 from './Images/shawarma.jpeg';
// // import image9 from './juices.jpeg';
// import image9 from './Images/juices.jpeg';
// // import image10 from './stick fries.jpeg';
// import image10 from './Images/stick fries.jpeg';
// // import image11 from './Simple burger.jpeg';
// import image11 from './Images/Simple burger.jpeg';

// const Team = () => {
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const members = [
//     { name: "Burgerr", role: "The delicious burger here available", img: image, intro: "Its taste awesome",Price:"230 rupees" },
//     { name: "Fries", role: "The delicious fries are available here", img: image1, intro: "Its taste awesome",Price:"230 rupees" },
//     { name: "Tea", role: "The delicious tea is available", img: image2, intro: "Its taste awesome",Price:"230 rupees" },
//     { name: "Baryani", role: "The delicious baryani available here", img: image3, intro: "Its taste awesome" ,Price:"230 rupees"},
//     { name: "Mango juice", role: "The delicious mango juice is available here", img: image4, intro: "Its taste awesome" ,Price:"230 rupees"},
//     { name: "Cold Drinks", role: "Cold Drinks are available here", img: image7, intro: "Its awesome" ,Price:"230 rupees"},
//     { name: "Samosa", role: "The delicious samosa available here", img: image5, intro: "Its taste awesome" ,Price:"230 rupees"},
//     { name: "Banana Juice", role: "The delicious Mutton Nahari available here", img: image6, intro: "Its taste awesome",Price:"230 rupees" },
//     { name: "Shawarma", role: "The delicious shawarma is available here", img: image8, intro: "Its taste awesome" ,Price:"230 rupees"},
//     { name: "Juices", role: "The quality juices are available here", img: image9, intro: "Its absolutely awesome",Price:"230 rupeees" },
//     { name: "Sticky Fries", role: "The delicious fries are available here", img: image10, intro: "Its absolutely awesome",Price:"230 rupees" },
//     { name: "Simple Burger", role: "The delicious simple burgers are available", img: image11, intro: "Its taste awesome" ,Price:"230 rupees"}
//   ];

//   // State to hold ratings and comments for each item
//   const [ratings, setRatings] = useState({});
//   const [orderStatus, setOrderStatus] = useState(null); // For tracking order status (success/error)
//   const [status, setStatus] = useState(null);

//   // Function to handle rating input change
//   const handleRatingChange = (itemName, rating) => {
//     if (rating >= 1 && rating <= 5) {
//       setRatings(prevRatings => ({ ...prevRatings, [itemName]: rating }));
//     }
//   };

//   // Function to handle order submission (both rating and comment)
//   const handleOrderClick = async () => {
//     navigate('/Contactt');
//   };

//   const handleDetailsClick = (itemName) => {
//     navigate(`/${itemName}`);
//   };

//   const handleRatingSubmit = async (itemName) => {
//     const rating = ratings[itemName];  // Get the rating for this item

//     if (!rating) {
//       setStatus({ success: false, message: 'Please select a rating before submitting.' });
//       return;  // Ensure the user has selected a rating
//     }

//     const ratingData = {
//       itemName,
//       rating,
//     };

//     try {
//       // Send POST request to backend with rating data
//       const response = await axios.post("http://localhost:5000/api/auth/rate", ratingData);
//       setStatus({ success: true, message: 'Rating submitted successfully!' });
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       setStatus({ success: false, message: 'Failed to submit rating. Please try again later.' });
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
//                 onError={(e) => e.target.src = 'fallback-image.jpg'} // Fallback image
//               />
//               <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
//               <p className="text-gray-600 mb-2">{member.role}</p>
//               <p className="text-gray-700 text-sm mb-4">{member.intro}</p>
//               <p className="text-gray-700 text-sm mb-4">{member.Price}</p>

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
//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={() => handleRatingSubmit(member.name)} // Submit the rating
//                 >
//                   Submit Rating
//                 </button>
//               </div>

//               <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                   onClick={() => handleDetailsClick(member.name)}>
//                   View Details
//               </button>

//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={() => handleOrderClick(member.name)} // Submit the order
//                 >
//                   Order Now
//                 </button>
//               </div>

//               {/* Display Status Messages */}
//               {status && (
//                 <div className={`mt-4 text-center ${status.success ? 'text-green-500' : 'text-red-500'}`}>
//                   <p>{status.message}</p>
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
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import Axios for making API calls

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

// const Team = () => {
//   const navigate = useNavigate(); // Hook to navigate programmatically

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

//   // State to hold ratings and comments for each item
//   const [ratings, setRatings] = useState({});
//   const [status, setStatus] = useState(null);

//   // Function to handle rating input change
//   const handleRatingChange = (itemName, rating) => {
//     if (rating >= 1 && rating <= 5) {
//       setRatings(prevRatings => ({ ...prevRatings, [itemName]: rating }));
//     }
//   };

//   const handleOrderClick = () => {
//     navigate('/Contactt');
//   };

//   const handleDetailsClick = (itemName) => {
//     navigate(`/${itemName}`);
//   };

//   const handleRatingSubmit = async (itemName) => {
//     const rating = ratings[itemName];

//     if (!rating) {
//       setStatus({ success: false, message: 'Please select a rating before submitting.' });
//       return;
//     }

//     const ratingData = {
//       itemName,
//       rating,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/auth/rate", ratingData);
//       setStatus({ success: true, message: 'Rating submitted successfully!' });
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       setStatus({ success: false, message: 'Failed to submit rating. Please try again later.' });
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
//                 onError={(e) => e.target.src = 'fallback-image.jpg'} // Fallback image
//               />
//               <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
//               <p className="text-gray-600 mb-2">{member.role}</p>
//               <p className="text-gray-700 text-sm mb-4">{member.intro}</p>

//               {/* Price Box */}
//               <div className="bg-green-100 border border-green-400 text-green-700 text-lg font-bold p-4 rounded-lg mb-4">
//                 Price: {member.Price}
//               </div>

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

//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={() => handleRatingSubmit(member.name)} // Submit the rating
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
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={handleOrderClick} // Submit the order
//                 >
//                   Order Now
//                 </button>
//               </div>

//               {/* Display Status Messages */}
//               {status && (
//                 <div className={`mt-4 text-center ${status.success ? 'text-green-500' : 'text-red-500'}`}>
//                   <p>{status.message}</p>
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

// const Team = () => {
//   const navigate = useNavigate(); // Hook to navigate programmatically

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

//   // State to hold ratings and comments for each item
//   const [ratings, setRatings] = useState({});
//   const [status, setStatus] = useState(null);

//   // Function to handle rating input change
//   const handleRatingChange = (itemName, rating) => {
//     if (rating >= 1 && rating <= 5) {
//       setRatings(prevRatings => ({ ...prevRatings, [itemName]: rating }));
//     }
//   };

//   const handleOrderClick = () => {
//     navigate('/Contactt');
//   };

//   const handleDetailsClick = (itemName) => {
//     navigate(`/${itemName}`);
//   };
//  const handleCartClick=()=>{
//   navigate('/AddCart')
//  }
//   const handleRatingSubmit = async (itemName) => {
//     const rating = ratings[itemName];

//     if (!rating) {
//       setStatus({ success: false, message: 'Please select a rating before submitting.' });
//       return;
//     }

//     const ratingData = {
//       itemName,
//       rating,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/auth/rate", ratingData);
//       setStatus({ success: true, message: 'Rating submitted successfully!' });
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       setStatus({ success: false, message: 'Failed to submit rating. Please try again later.' });
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
//                 onError={(e) => e.target.src = 'fallback-image.jpg'} // Fallback image
//               />
//               <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
//               <p className="text-gray-600 mb-2">{member.role}</p>
//               <p className="text-gray-700 text-sm mb-4">{member.intro}</p>

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

//               {/* Small Price Box */}
//               <div className="bg-gray-100 border border-gray-300 text-gray-800 text-sm font-semibold p-2 rounded-md mb-4 inline-block">
//                 Price: {member.Price}
//               </div>

//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={() => handleRatingSubmit(member.name)} // Submit the rating
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
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={()=>handleCartClick()}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={handleOrderClick} // Submit the order
//                 >
//                   Order Now
//                 </button>
//               </div>

//               {/* Display Status Messages */}
//               {status && (
//                 <div className={`mt-4 text-center ${status.success ? 'text-green-500' : 'text-red-500'}`}>
//                   <p>{status.message}</p>
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

// const Team = () => {
//   const navigate = useNavigate(); // Hook to navigate programmatically

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

//   // State to hold ratings and comments for each item
//   const [ratings, setRatings] = useState({});
//   const [status, setStatus] = useState(null);

//   // Function to handle rating input change
//   const handleRatingChange = (itemName, rating) => {
//     if (rating >= 1 && rating <= 5) {
//       setRatings(prevRatings => ({ ...prevRatings, [itemName]: rating }));
//     }
//   };

//   const handleOrderClick = () => {
//     navigate('/Contactt');
//   };

//   const handleDetailsClick = (itemName) => {
//     navigate(`/${itemName}`);
//   };
//  const handleCartClick=()=>{
//   // navigate(`/AddCart,${itemname,Price}`)
//   navigate('/Addcart')
//   // <AddCart  name="Anas" />
//  }
//   const handleRatingSubmit = async (itemName) => {
//     const rating = ratings[itemName];

//     if (!rating) {
//       setStatus({ success: false, message: 'Please select a rating before submitting.' });
//       return;
//     }

//     const ratingData = {
//       itemName,
//       rating,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/auth/rate", ratingData);
//       setStatus({ success: true, message: 'Rating submitted successfully!' });
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       setStatus({ success: false, message: 'Failed to submit rating. Please try again later.' });
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
//                 onError={(e) => e.target.src = 'fallback-image.jpg'} // Fallback image
//               />
//               <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
//               <p className="text-gray-600 mb-2">{member.role}</p>
//               <p className="text-gray-700 text-sm mb-4">{member.intro}</p>

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

//               {/* Small Price Box */}
//               <div className="bg-gray-100 border border-gray-300 text-gray-800 text-sm font-semibold p-2 rounded-md mb-4 inline-block">
//                 Price: {member.Price}
//               </div>

//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={() => handleRatingSubmit(member.name)} // Submit the rating
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
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={()=>handleCartClick()}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={handleOrderClick} // Submit the order
//                 >
//                   Order Now
//                 </button>
//               </div>

//               {/* Display Status Messages */}
//               {status && (
//                 <div className={`mt-4 text-center ${status.success ? 'text-green-500' : 'text-red-500'}`}>
//                   <p>{status.message}</p>
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

// const Team = () => {
//   const navigate = useNavigate(); // Hook to navigate programmatically

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

//   // State to hold ratings and comments for each item
//   const [ratings, setRatings] = useState({});
//   const [status, setStatus] = useState(null);

//   // Function to handle rating input change
//   const handleRatingChange = (itemName, rating) => {
//     if (rating >= 1 && rating <= 5) {
//       setRatings(prevRatings => ({ ...prevRatings, [itemName]: rating }));
//     }
//   };

//   const handleOrderClick = () => {
//     navigate('/Contactt');
//   };

//   const handleDetailsClick = (itemName) => {
//     navigate(`/${itemName}`);
//   };
//  const handleCartClick=()=>{
//   navigate('/AddCart')
//  }
//   const handleRatingSubmit = async (itemName) => {
//     const rating = ratings[itemName];

//     if (!rating) {
//       setStatus({ success: false, message: 'Please select a rating before submitting.' });
//       return;
//     }

//     const ratingData = {
//       itemName,
//       rating,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/auth/rate", ratingData);
//       setStatus({ success: true, message: 'Rating submitted successfully!' });
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       setStatus({ success: false, message: 'Failed to submit rating. Please try again later.' });
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
//                 onError={(e) => e.target.src = 'fallback-image.jpg'} // Fallback image
//               />
//               <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
//               <p className="text-gray-600 mb-2">{member.role}</p>
//               <p className="text-gray-700 text-sm mb-4">{member.intro}</p>

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

//               {/* Small Price Box */}
//               <div className="bg-gray-100 border border-gray-300 text-gray-800 text-sm font-semibold p-2 rounded-md mb-4 inline-block">
//                 Price: {member.Price}
//               </div>

//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={() => handleRatingSubmit(member.name)} // Submit the rating
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
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={()=>handleCartClick()}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={handleOrderClick} // Submit the order
//                 >
//                   Order Now
//                 </button>
//               </div>

//               {/* Display Status Messages */}
//               {status && (
//                 <div className={`mt-4 text-center ${status.success ? 'text-green-500' : 'text-red-500'}`}>
//                   <p>{status.message}</p>
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

// const Team = () => {
//   const navigate = useNavigate(); // Hook to navigate programmatically

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

//   // State to hold ratings and comments for each item
//   const [ratings, setRatings] = useState({});
//   const [status, setStatus] = useState(null);

//   // Function to handle rating input change
//   const handleRatingChange = (itemName, rating) => {
//     if (rating >= 1 && rating <= 5) {
//       setRatings(prevRatings => ({ ...prevRatings, [itemName]: rating }));
//     }
//   };

//   const handleOrderClick = () => {
//     navigate('/Contactt');
//   };

//   const handleDetailsClick = (itemName) => {
//     navigate(`/${itemName}`);
//   };
//  const handleCartClick=()=>{
//   // navigate(`/AddCart,${itemname,Price}`)
//   navigate('/Addcart')
//   // <AddCart  name="Anas" />
//  }
//   const handleRatingSubmit = async (itemName) => {
//     const rating = ratings[itemName];

//     if (!rating) {
//       setStatus({ success: false, message: 'Please select a rating before submitting.' });
//       return;
//     }

//     const ratingData = {
//       itemName,
//       rating,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/auth/rate", ratingData);
//       setStatus({ success: true, message: 'Rating submitted successfully!' });
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       setStatus({ success: false, message: 'Failed to submit rating. Please try again later.' });
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
//                 onError={(e) => e.target.src = 'fallback-image.jpg'} // Fallback image
//               />
//               <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
//               <p className="text-gray-600 mb-2">{member.role}</p>
//               <p className="text-gray-700 text-sm mb-4">{member.intro}</p>

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

//               {/* Small Price Box */}
//               <div className="bg-gray-100 border border-gray-300 text-gray-800 text-sm font-semibold p-2 rounded-md mb-4 inline-block">
//                 Price: {member.Price}
//               </div>

//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={() => handleRatingSubmit(member.name)} // Submit the rating
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
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={()=>handleCartClick()}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                   onClick={handleOrderClick} // Submit the order
//                 >
//                   Order Now
//                 </button>
//               </div>

//               {/* Display Status Messages */}
//               {status && (
//                 <div className={`mt-4 text-center ${status.success ? 'text-green-500' : 'text-red-500'}`}>
//                   <p>{status.message}</p>
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
// import React, { useState } from 'react';
// import axios from 'axios';

// const Team = () => {
//   const [members, setMembers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     role: '',
//     intro: '',
//     price: '',
//     image: null,
//   });

//   const [showModal, setShowModal] = useState(false);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle file upload
//   const handleFileChange = (e) => {
//     setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
//   };

//   // Submit the form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append('name', formData.name);
//     data.append('role', formData.role);
//     data.append('intro', formData.intro);
//     data.append('price', formData.price);
//     data.append('image', formData.image);

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/api/auth/item', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.data.success) {
//         // Update the member list with the new member
//         setMembers((prev) => [...prev, response.data.item]);
//         setShowModal(false); // Close the modal
//       }
//     } catch (error) {
//       console.error('Error uploading item:', error);
//     }
//   };

//   return (
//     <div className="py-12">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-6">Available Items</h2>

//         {/* Render Existing Members */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {members.map((member) => (
//             <div key={member.name} className="bg-white shadow-lg rounded-lg p-6">
//               <img
//                 src={`http://localhost:5000/${member.imagePath}`}
//                 alt={member.name}
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-bold">{member.name}</h3>
//               <p>{member.role}</p>
//               <p>{member.intro}</p>
//               <p className="font-semibold">Price: {member.price}</p>
//             </div>
//           ))}
//         </div>

//         {/* Add Item Button */}
//         <button
//           className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           onClick={() => setShowModal(true)}
//         >
//           Add New Item
//         </button>

//         {/* Modal for Adding Items */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white rounded-lg p-6 w-96">
//               <h3 className="text-2xl font-bold mb-4">Add New Item</h3>
//               <form onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded mb-2"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="role"
//                   placeholder="Role"
//                   value={formData.role}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded mb-2"
//                   required
//                 />
//                 <textarea
//                   name="intro"
//                   placeholder="Introduction"
//                   value={formData.intro}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded mb-2"
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Price"
//                   value={formData.price}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded mb-2"
//                   required
//                 />
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={handleFileChange}
//                   className="w-full p-2 border rounded mb-4"
//                   accept="image/*"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//                 >
//                   Submit
//                 </button>
//               </form>
//               <button
//                 className="mt-2 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
//                 onClick={() => setShowModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Team;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// // Images
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

// const Team = () => {
//   const navigate = useNavigate();

//   // Sample items data
//   const members = [
//     { name: "Burger", role: "The delicious burger here available", img: image, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Fries", role: "The delicious fries are available here", img: image1, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Tea", role: "The delicious tea is available", img: image2, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Baryani", role: "The delicious baryani available here", img: image3, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Mango Juice", role: "The delicious mango juice is available here", img: image4, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Cold Drinks", role: "Cold drinks are available here", img: image7, intro: "Its awesome", Price: "230 rupees" },
//     { name: "Samosa", role: "The delicious samosa available here", img: image5, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Banana Juice", role: "The delicious banana juice available here", img: image6, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Shawarma", role: "The delicious shawarma is available here", img: image8, intro: "Its taste awesome", Price: "230 rupees" },
//     { name: "Juices", role: "Quality juices are available here", img: image9, intro: "Its absolutely awesome", Price: "230 rupees" },
//     { name: "Sticky Fries", role: "The delicious fries are available here", img: image10, intro: "Its absolutely awesome", Price: "230 rupees" },
//     { name: "Simple Burger", role: "The delicious simple burgers are available", img: image11, intro: "Its taste awesome", Price: "230 rupees" }
//   ];

//   // States
//   const [cart, setCart] = useState([]);
//   const [ratings, setRatings] = useState({});
//   const [status, setStatus] = useState(null);

//   // Add item to the cart
//   const handleAddToCart = (item) => {
//     setCart((prevCart) => {
//       // Avoid duplicates
//       if (prevCart.some((cartItem) => cartItem.name === item.name)) {
//         alert("Item is already in the cart!");
//         return prevCart;
//       }
//       return [...prevCart, item];
//     });
//   };

//   // Navigate to the cart form
//   const handleCartClick = () => {
//     navigate('/AddCart', { state: { cart } }); // Pass cart state
//   };

//   // Handle rating submission
//   const handleRatingSubmit = async (itemName) => {
//     const rating = ratings[itemName];

//     if (!rating) {
//       setStatus({ success: false, message: 'Please select a rating before submitting.' });
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/auth/rate", { itemName, rating });
//       setStatus({ success: true, message: 'Rating submitted successfully!' });
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       setStatus({ success: false, message: 'Failed to submit rating. Please try again later.' });
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
//               {/* Image */}
//               <img
//                 className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
//                 src={member.img}
//                 alt={member.name}
//                 onError={(e) => e.target.src = 'fallback-image.jpg'}
//               />
//               {/* Item Details */}
//               <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
//               <p className="text-gray-600 mb-2">{member.role}</p>
//               <p className="text-gray-700 text-sm mb-4">{member.intro}</p>

//               {/* Price */}
//               <div className="bg-gray-100 border border-gray-300 text-gray-800 text-sm font-semibold p-2 rounded-md mb-4 inline-block">
//                 Price: {member.Price}
//               </div>

//               {/* Add to Cart Button */}
//               <button
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                 onClick={() => handleAddToCart(member)}
//               >
//                 Add to Cart
//               </button>

//               {/* View Cart Button */}
//               <div className="mt-4">
//                 <button
//                   className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                   onClick={handleCartClick}
//                 >
//                   View Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Display Status Messages */}
//         {status && (
//           <div className={`mt-4 text-center ${status.success ? 'text-green-500' : 'text-red-500'}`}>
//             <p>{status.message}</p>
//           </div>
//         )}
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
import { useCart } from "./Context/CartContext"; // Import the Cart Context
const Team = () => {
  const { addToCart } = useCart(); // Use the addToCart function

  const navigate = useNavigate(); // Hook to navigate programmatically

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

  // State to hold ratings and comments for each item
  const [ratings, setRatings] = useState({});
  const [status, setStatus] = useState(null);

  // Function to handle rating input change
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
    addToCart(item); // Add the clicked item to the cart
  };
  const handleRatingSubmit = async (itemName) => {
    const rating = ratings[itemName];

    if (!rating) {
      setStatus({ success: false, message: 'Please select a rating before submitting.' });
      return;
    }

    const ratingData = {
      itemName,
      rating,
    };

    try {
      await axios.post("http://localhost:5000/api/auth/rate", ratingData);
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

              {/* Small Price Box */}
              <div className="bg-gray-100 border border-gray-300 text-gray-800 text-sm font-semibold p-2 rounded-md mb-4 inline-block">
                Price: {member.Price}
              </div>

              <div className="mt-4">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => handleRatingSubmit(member.name)} // Submit the rating
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
              <button onClick={() => handleCartClick(member)}>Add to Cart</button>
              <div className="mt-4">
                {/* <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={()=>handleCartClick()}
                >
                  Add to Cart
                </button> */}
              </div>
              <div className="mt-4">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={handleOrderClick} // Submit the order
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
