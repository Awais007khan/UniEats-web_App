// import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

// import image from './Images/secondbackground.jpeg';
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
// // import image6 from './mutton nahari.jpeg';
// import image6 from './Images/mutton nahari.jpeg';
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
//     { name: "Burger", role: "The delicious burger here avalible", img: `${image}`, intro: "Its taste awesome" },
//     { name: "Lays", role: "The delicious fries are avalible here", img: `${image1}`, intro: "Its taste awesome" },
//     { name: "Tea", role: "The delicious tea is avalible", img: `${image2}`, intro: "Its taste awesome" },
//     { name: "Baryani", role: "The delicious baryani avalible here", img: `${image3}`, intro: "Its taste awesome" },
//     { name: "Mango juice", role: "The delicious mango juice is avalible here", img: `${image4}`, intro: "Its taste awesome" },
//     { name: "Cold Drinks", role: "Cold Drinks are avalible here", img: `${image7}`, intro: "Its awesome" },
//     { name: "Samosa", role: "The delicious samosa avalible here", img: `${image5}`, intro: "Its taste awesome" },
//     { name: "Mutton Nahari", role: "THe delicious Mutton nahari avalible here", img: `${image6}`, intro: "Its taste awesome" },
//     { name: "Shawarma", role: "The delicious shawarma is avalible here", img: `${image8}`, intro: "Its taste awesome" },
//     { name: "Juices", role: "The quality juices are avalible here", img: `${image9}`, intro: "Its absolutely awesome" },
//     { name: "Sticky Fries", role: "The delicious fries are avalible here", img: `${image10}`, intro: "Its absolutely awesome" },
//     { name: "Simple Burger", role: "The delicious simple burgers are avalible", img: `${image11}`, intro: "Its taste awesome" }
//   ];

//   // Function to navigate to the Contact page (order page)
//   const handleOrderClick = () => {
//     navigate('/loginn');
//   };

//   return (
//     <section id="team" className="py-20 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">Avalible Items</h2>
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
//               />
//               <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
//               <p className="text-gray-600 mb-2">{member.role}</p>
//               <p className="text-gray-700 text-sm mb-4">{member.intro}</p>
//               <button
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                 onClick={handleOrderClick} // Click handler for order
//               >
//                 Order Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;
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
//     { name: "Baryani", role: "Flavorful chicken biryani.", img: image3, intro: "A treat for your taste buds." },
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
//     navigate(`/order/${name.toLowerCase().replace(' ', '-')}`);
  
//   };

//   return (
//     <section id="team" className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200">
//       <div className="container mx-auto px-6 lg:px-20">
//         <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-16">
//           <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//             Available Items
//           </span>
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {members.map((member) => (
//             <div
//               key={member.name}
//               className="relative group bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
//             >
//               <img
//                 className="w-full h-56 object-cover"
//                 src={member.img}
//                 alt={`${member.name} - ${member.role}`}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition duration-500">
//                 <div className="absolute bottom-4 left-4 right-4 text-left">
//                   <h3 className="text-xl font-bold text-white">{member.name}</h3>
//                   <p className="text-sm text-gray-300">{member.role}</p>
//                 </div>
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
//                 <p className="text-sm text-gray-600 mb-4">{member.intro}</p>
//                 <button
//                   className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition"
//                   onClick={() => handleOrderClick(member.name)}
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

  const handleOrderClick = (name) => {
    // Navigate to the specific item's order page
    // navigate(`/order/${name.toLowerCase().replace(' ', '-')}`);
    navigate('/loginn')
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
              {/* Overlay on Hover */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300"></div> */}
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">{member.intro}</p>
                <button

                // brackets ka andar members.name ata ha ya yad rakhna
                  // onClick={() => handleOrderClick()}
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
