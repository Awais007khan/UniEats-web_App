// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import image1 from './Images/slider3.jpg'; 
// import image2 from './Images/slider1.jpg'; 
// import image3 from './Images/slider4.jpg'; 

// const Team = () => {
//   const members = [
//     {
//       name: "Cold Drinks",
//       role: "The delicious Mango juice here available",
//       img: image1,
//       intro: "This is an awesome product",
//       description: (
//         <div className="text-gray-700 text-lg mb-4">
//           <div className="">
//             <h4 className="text-xl font-semibold text-gray-800 mb-4">Cold-Drinks Compnies:</h4>
//             <ul className="space-y-2">
//               <li className="flex items-center justify-center ">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Coca-Cola
//               </li>
//               <li className="flex items-center justify-center">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Mirinda
//               </li>
//               <li className="flex items-center justify-center">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Pepsi
//               </li>
//               <li className="flex items-center justify-center">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Fanta
//               </li>
//               <li className="flex items-center justify-center">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Sprite
//               </li>
//               <li className="flex items-center justify-center">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Sting
//               </li>
//               <li className="flex items-center justify-center">
//                 <span className="text-orange-500 mr-2">•</span>
//                 Mountain Dew
//               </li>
//               <li className="flex items-center justify-center">
//                 <span className="text-orange-500 mr-2">•</span>
//                Gourment
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
//           Available Item: <span className="text-orange-600">Cold Drinks</span>
//         </h2>

//         {/* Member Card */}
//         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
//           {members.map((member) => (
//             <div
//               key={member.name}
//               className="bg-white p-8  shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
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
//                       className="w-full h-[350px] mx-auto object-cover  border-20 border-gray-200 shadow-lg"
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
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import image1 from './Images/slider3.jpg'; 
import image2 from './Images/slider1.jpg'; 
import image3 from './Images/slider4.jpg'; 

const Team = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const members = [
    {
      name: "Cold Drinks",
      role: "The delicious Mango juice here available",
      img: image1,
      intro: "This is an awesome product",
      description: (
        <div className="text-gray-700 text-lg mb-4">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Cold-Drinks Companies:</h4>
          <ul className="space-y-2">
            {["Coca-Cola", "Mirinda", "Pepsi", "Fanta", "Sprite", "Sting", "Mountain Dew", "Gourmet"].map((item, index) => (
              <li key={index} className="flex items-center justify-center">
                <span className="text-orange-500 mr-2">•</span> {item}
              </li>
            ))}
          </ul>
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
          Available Item: <span className="text-orange-600">Cold Drinks</span>
        </h2>

        {/* Member Card */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="relative bg-white p-8 shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Close Button */}
              <button
                onClick={() => navigate("/team")} // Navigate to /team
                className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md hover:bg-red-600 transition"
              >
                Close
              </button>

              {/* Image Slider */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="w-full mb-6 mt-6"
              >
                {member.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="w-full h-[350px] mx-auto object-cover border-20 border-gray-200 shadow-lg"
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
