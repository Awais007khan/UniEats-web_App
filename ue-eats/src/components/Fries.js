// import React from "react";
// // import image from './lays.jpg'; 
// import image from './Images/lays.jpg'; 

// const Team = () => {
//   const members = [
//     {
//       name: "Fries", 
//       role: "The delicious Mango juice here available", 
//       img: image, 
//       intro: "This is an awesome product",
//       description: (
//         <div>
//           <p className="font-bold text-2xl text-gray-800 mt-4 mb-2">The following ingredients are used in fries:</p>
//           <div className="text-gray-900 text-xl space-y-4 text center">
//             <p>Potatoes</p>
//             <p>Vegetable Oil</p>
//             <p>Flavorings</p>
//             <p>Sour cream</p>
//             <p>Mayonnaise</p>
//             <p>Ketchup</p>
//             <p>Chatni</p>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <section id="team" className="py-20 bg-gray-100">
//       <div className="container mx-auto">
//         {/* Main Title */}
//         <h2 className="text-6xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
//           Available Item: <span className="text-orange-600">Mango juice</span>
//         </h2>

//         {/* Member Card */}
//         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
//           {members.map((member) => (
//             <div
//               key={member.name}
//               className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
//             >
//               {/* Member Image */}
//               <img
//                 className="w-56 h-56 rounded-full mx-auto mb-6 object-cover border-4 border-gray-200 shadow-lg"
//                 src={member.img}
//                 alt={member.name}
//                 onError={(e) => e.target.src = 'fallback-image.jpg'} // Fallback image
//               />
              
//               {/* Member Name & Role */}
//               <h3 className="text-4xl font-bold mb-2 text-gray-800">{member.name}</h3>
//               <p className="text-gray-600 mb-4 text-xl">{member.role}</p>
              
//               {/* Intro Text */}
//               <p className="text-gray-700 text-lg mb-4">{member.intro}</p>
              
//               {/* Burger Ingredients List */}
//               <div className="text-gray-700 text-lg mb-4">
//                 {member.description}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react"; // Core modules for Swiper
// import "swiper/css"; // Swiper styles
// import "swiper/css/navigation"; // Optional navigation styles
// import "swiper/css/pagination"; // Optional pagination styles

// // Import additional Swiper modules
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import image1 from './Images/lays.jpg'; 
// import image2 from './Images/slider1.jpg'; 
// import image3 from './Images/slider4.jpg'; 

// const Team = () => {
//   const members = [
//     {
//       name: "Fries",
//       role: "The delicious Mango juice here available",
//       img: image1,
//       intro: "This is an awesome product",
//       description: (
//         <div>
//           <p className="font-bold text-2xl text-gray-800 mt-4 mb-2">The following ingredients are used in fries:</p>
//           <div className="text-gray-900 text-xl space-y-4 text-center">
//             <p>Potatoes</p>
//             <p>Vegetable Oil</p>
//             <p>Flavorings</p>
//             <p>Sour cream</p>
//             <p>Mayonnaise</p>
//             <p>Ketchup</p>
//             <p>Chatni</p>
//           </div>
//         </div>
//       ),
//       images: [image1, image2, image3], // Images for the slider
//     },
//   ];

//   return (
//     <section id="team" className="py-20 bg-gray-100">
//       <div className="container mx-auto">
//         {/* Main Title */}
//         <h2 className="text-6xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
//           Available Item: <span className="text-orange-600">Mango juice</span>
//         </h2>

//         {/* Member Card */}
//         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
//           {members.map((member) => (
//             <div
//               key={member.name}
//               className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
//             >
//               {/* Image Slider */}
//               <Swiper
//                 modules={[Navigation, Pagination, Autoplay]}
//                 navigation
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 3000 }}
//                 loop={true}
//                 className="w-full mb-6"
//               >
//                 {member.images.map((image, index) => (
//                   <SwiperSlide key={index}>
//                     <img
//                       className="w-56 h-56 rounded-full mx-auto object-cover border-4 border-gray-200 shadow-lg"
//                       src={image}
//                       alt={`${member.name} ${index}`}
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               {/* Member Name & Role */}
//               <h3 className="text-4xl font-bold mb-2 text-gray-800">{member.name}</h3>
//               <p className="text-gray-600 mb-4 text-xl">{member.role}</p>

//               {/* Intro Text */}
//               <p className="text-gray-700 text-lg mb-4">{member.intro}</p>

//               {/* Burger Ingredients List */}
//               <div className="text-gray-700 text-lg mb-4">
//                 {member.description}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import image1 from './Images/lays.jpg'; 
// import image2 from './Images/slider1.jpg'; 
// import image3 from './Images/slider4.jpg'; 

// const Team = () => {
//   const members = [
//     {
//       name: "Fries",
//       role: "The delicious Mango juice here available",
//       img: image1,
//       intro: "This is an awesome product",
//       description: (
//         <div className="text-gray-700 text-lg mb-4">
//           <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
//             <h4 className="text-xl font-semibold text-gray-800 mb-4">Ingredients:</h4>
//             <ul className="space-y-2">
//               <li className="flex items-center justify-center ">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Potatoes
//               </li>
//               <li className="flex items-center justify-center">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Vegetable Oil
//               </li>
//               <li className="flex items-center justify-center">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Flavorings
//               </li>
//               <li className="flex items-center justify-center">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Sour cream
//               </li>
//               <li className="flex items-center justify-center">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Mayonnaise
//               </li>
//               <li className="flex items-center justify-center">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Ketchup
//               </li>
//               <li className="flex items-center justify-center">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Chatni
//               </li>
//             </ul>
//           </div>
//         </div>
//       ),
//       images: [image1, image2, image3],
//     },
//   ];

//   return (
//     <section id="team" className="py-20 bg-gray-100">
//       <div className="container mx-auto">
//         {/* Main Title */}
//         <h2 className="text-6xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
//           Available Item: <span className="text-orange-600">Mango juice</span>
//         </h2>

//         {/* Member Card */}
//         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
//           {members.map((member) => (
//             <div
//               key={member.name}
//               className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
//             >
//               {/* Image Slider */}
//               <Swiper
//                 modules={[Navigation, Pagination, Autoplay]}
//                 navigation
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 4000 }}
//                 loop={true}
//                 className="w-full mb-6"
//               >
//                 {member.images.map((image, index) => (
//                   <SwiperSlide key={index}>
//                     <img
//                       className="w-56 h-56 rounded-full mx-auto object-cover border-4 border-gray-200 shadow-lg"
//                       src={image}
//                       alt={`${member.name} ${index}`}
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               {/* Member Name & Role */}
//               <h3 className="text-4xl font-bold mb-2 text-gray-800">{member.name}</h3>
//               <p className="text-gray-600 mb-4 text-xl">{member.role}</p>

//               {/* Intro Text */}
//               <p className="text-gray-700 text-lg mb-4">{member.intro}</p>

//               {/* Ingredients Box */}
//               {member.description}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import image1 from './Images/slider3.jpg'; 
import image2 from './Images/slider1.jpg'; 
import image3 from './Images/slider4.jpg'; 

const Team = () => {
  const members = [
    {
      name: "Fries",
      role: "The delicious Mango juice here available",
      img: image1,
      intro: "This is an awesome product",
      description: (
        <div className="text-gray-700 text-lg mb-4">
          <div className="">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Ingredients:</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-center ">
                <span className="text-orange-500 mr-2">•</span>
                Potatoes
              </li>
              <li className="flex items-center justify-center">
                <span className="text-orange-500 mr-2">•</span>
                Vegetable Oil
              </li>
              <li className="flex items-center justify-center">
                <span className="text-orange-500 mr-2">•</span>
                Flavorings
              </li>
              <li className="flex items-center justify-center">
                <span className="text-orange-500 mr-2">•</span>
                Sour cream
              </li>
              <li className="flex items-center justify-center">
                <span className="text-orange-500 mr-2">•</span>
                Mayonnaise
              </li>
              <li className="flex items-center justify-center">
                <span className="text-orange-500 mr-2">•</span>
                Ketchup
              </li>
              <li className="flex items-center justify-center">
                <span className="text-orange-500 mr-2">•</span>
                Chatni
              </li>
            </ul>
          </div>
        </div>
      ),
      images: [image1, image2, image3],
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        {/* Main Title */}
        <h2 className="text-6xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
          Available Item: <span className="text-orange-600">Delicious Fries</span>
        </h2>

        {/* Member Card */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white p-8  shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Image Slider */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="w-full mb-6"
              >
                {member.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="w-full h-[350px] mx-auto object-cover  border-20 border-gray-200 shadow-lg"
                      src={image}
                      alt={`${member.name} ${index}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Member Name & Role */}
              <h3 className="text-4xl font-bold mb-2 text-gray-800">{member.name}</h3>
              <p className="text-gray-600 mb-4 text-xl">{member.role}</p>

              {/* Intro Text */}
              <p className="text-gray-700 text-lg mb-4">{member.intro}</p>

              {/* Ingredients Box */}
              {member.description}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
