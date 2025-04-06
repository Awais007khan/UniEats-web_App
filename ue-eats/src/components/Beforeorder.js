// import React from "react";
// import { useNavigate } from "react-router-dom";

// import image from './Images/secondbackground.jpeg';
// import image1 from './Images/lays.jpg';
// import image2 from './Images/tea.jpg';
// import image3 from './Images/baryani.jpeg';
// import image4 from './Images/mango.jpeg';
// import image5 from './Images/samoa.jpeg';
// import image6 from './Images/mutton nahari.jpeg';
// import image7 from './Images/cold drinks.jpeg';
// import image8 from './Images/shawarma.jpeg';
// import image9 from './Images/juices.jpeg';
// import image10 from './Images/stick fries.jpeg';
// import image11 from './Images/Simple burger.jpeg';

// const Team = () => {
//   const navigate = useNavigate();

//   const members = [
//     { name: "Burger", role: "A juicy burger packed with flavors.", img: image, intro: "Perfect for a quick and satisfying meal." },
//     { name: "Lays", role: "Crispy and delicious fries.", img: image1, intro: "A snack everyone loves." },
//     { name: "Tea", role: "Freshly brewed tea available.", img: image2, intro: "A comforting cup for any time of day." },
//     { name: "Biryani", role: "Flavorful chicken biryani.", img: image3, intro: "A treat for your taste buds." },
//     { name: "Mango Juice", role: "Refreshing mango juice.", img: image4, intro: "Made from ripe and juicy mangoes." },
//     { name: "Cold Drinks", role: "Chilled soft drinks available.", img: image7, intro: "Perfect to beat the heat." },
//     { name: "Samosa", role: "Crispy samosas filled with potatoes.", img: image5, intro: "A classic snack for all occasions." },
//     { name: "Mutton Nahari", role: "Rich and spicy mutton nahari.", img: image6, intro: "A traditional delicacy you must try." },
//     { name: "Shawarma", role: "Tasty chicken shawarma wraps.", img: image8, intro: "A perfect on-the-go meal." },
//     { name: "Juices", role: "Freshly squeezed juices available.", img: image9, intro: "Packed with natural goodness." },
//     { name: "Sticky Fries", role: "Sticky, savory fries.", img: image10, intro: "A twist on regular fries." },
//     { name: "Simple Burger", role: "Classic burger with no frills.", img: image11, intro: "Simple yet delicious." }
//   ];

//   const handleOrderClick = (name) => {
//     // Navigate to the specific item's order page
//     // navigate(`/order/${name.toLowerCase().replace(' ', '-')}`);
//     navigate('/loginn')
//   };

//   return (
//     <section id="team" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
//       <div className="container mx-auto px-6 lg:px-16">
//         <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 text-gray-800">
//           <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//             Available Items
//           </span>
//         </h2>
//         {/* Responsive Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {members.map((member) => (
//             <div
//               key={member.name}
//               className="group bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
//             >
//               {/* Image Section */}
//               <img
//                 className="w-full h-48 object-cover"
//                 src={member.img}
//                 alt={`${member.name}`}
//               />
//               {/* Overlay on Hover */}
//               {/* <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300"></div> */}
//               {/* Card Content */}
//               <div className="p-6">
//                 <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
//                 <p className="text-sm text-gray-500">{member.role}</p>
//                 <p className="text-sm text-gray-600 mt-2">{member.intro}</p>
//                 <button

//                 // brackets ka andar members.name ata ha ya yad rakhna
//                   // onClick={() => handleOrderClick()}
//                   onClick={handleOrderClick}
//                   className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-medium text-sm shadow-md hover:from-blue-600 hover:to-purple-600 transition"
//                 >
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;

import React from "react";
import { useNavigate } from "react-router-dom";

import image from './Images/secondbackground.jpeg';
import image1 from './Images/lays.jpg';
import image2 from './Images/tea.jpg';
import image3 from './Images/baryani.jpeg';
import image4 from './Images/mango.jpeg';
import image5 from './Images/samoa.jpeg';
import image6 from './Images/mutton nahari.jpeg';
import image7 from './Images/cold drinks.jpeg';
import image8 from './Images/shawarma.jpeg';
import image9 from './Images/juices.jpeg';
import image10 from './Images/stick fries.jpeg';
import image11 from './Images/Simple burger.jpeg';

const Team = () => {
  const navigate = useNavigate();

  const members = [
    { name: "Burger", role: "A juicy burger packed with flavors.", img: image, intro: "Perfect for a quick and satisfying meal." },
    { name: "Lays", role: "Crispy and delicious fries.", img: image1, intro: "A snack everyone loves." },
    { name: "Tea", role: "Freshly brewed tea available.", img: image2, intro: "A comforting cup for any time of day." },
    { name: "Biryani", role: "Flavorful chicken biryani.", img: image3, intro: "A treat for your taste buds." },
    { name: "Mango Juice", role: "Refreshing mango juice.", img: image4, intro: "Made from ripe and juicy mangoes." },
    { name: "Cold Drinks", role: "Chilled soft drinks available.", img: image7, intro: "Perfect to beat the heat." },
    { name: "Samosa", role: "Crispy samosas filled with potatoes.", img: image5, intro: "A classic snack for all occasions." },
    { name: "Mutton Nahari", role: "Rich and spicy mutton nahari.", img: image6, intro: "A traditional delicacy you must try." },
    { name: "Shawarma", role: "Tasty chicken shawarma wraps.", img: image8, intro: "A perfect on-the-go meal." },
    { name: "Juices", role: "Freshly squeezed juices available.", img: image9, intro: "Packed with natural goodness." },
    { name: "Sticky Fries", role: "Sticky, savory fries.", img: image10, intro: "A twist on regular fries." },
    { name: "Simple Burger", role: "Classic burger with no frills.", img: image11, intro: "Simple yet delicious." }
  ];

  const handleOrderClick = () => {
    // Check if the user is logged in by verifying token in localStorage
    const isLoggedIn = localStorage.getItem("token");

    if (isLoggedIn) {
      navigate("/payment"); // If logged in, navigate to payment page
    } else {
      navigate("/loginn"); // If not logged in, navigate to login page
    }
  };

  return (
    <section id="team" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 text-gray-800">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Available Items
          </span>
        </h2>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
            >
              {/* Image Section */}
              <img
                className="w-full h-48 object-cover"
                src={member.img}
                alt={`${member.name}`}
              />
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">{member.intro}</p>
                <button
                  onClick={handleOrderClick}
                  className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-medium text-sm shadow-md hover:from-blue-600 hover:to-purple-600 transition"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

