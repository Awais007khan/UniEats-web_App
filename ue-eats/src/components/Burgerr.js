import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import image1 from './Images/slider3.jpg'; 
import image2 from './Images/slider1.jpg'; 
import image3 from './Images/slider4.jpg'; 

const Team = () => {
  const navigate = useNavigate();

  const members = [
    {
      name: "Gourmet Burger",
      role: "Premium Handcrafted Delight",
      img: image1,
      intro: "Experience culinary perfection with our signature gourmet burger, crafted with the finest ingredients for an unforgettable taste sensation.",
      description: (
        <div className="text-gray-300 text-lg mb-6">
          <h4 className="text-2xl font-semibold text-orange-400 mb-4 border-b border-orange-400 pb-2">Artisanal Ingredients:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Shammi Kabab", desc: "Premium spiced patty" },
              { name: "Aged Cheddar", desc: "12-month matured cheese" },
              { name: "Heirloom Tomatoes", desc: "Vine-ripened slices" },
              { name: "Caramelized Onions", desc: "Slow-cooked to perfection" },
              { name: "House-made Pickles", desc: "Crunchy with a tang" },
              { name: "Truffle Aioli", desc: "Gourmet sauce blend" },
              { name: "Mango Chutney", desc: "Sweet and spicy accent" },
              { name: "Organic Fried Egg", desc: "Free-range (optional)" }
            ].map((item, index) => (
              <li key={index} className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
                <span className="text-orange-400 font-medium">{item.name}</span>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      ),
      images: [image1, image2, image3],
    },
  ];

  return (
    <section id="team" className="py-16 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Main Title with Gradient */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
            Signature Creation
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our masterpiece - crafted with passion, served with perfection
          </p>
        </div>

        {/* Premium Member Card */}
        <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto">
          {members.map((member) => (
            <div
              key={member.name}
              className="relative bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700 transform transition duration-500 hover:scale-[1.02]"
            >
              {/* Premium Close Button */}
              <button
                onClick={() => navigate("/team")}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-red-500 to-red-700 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:from-red-600 hover:to-red-800 transition-all z-10 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Luxury Image Slider */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ 
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet bg-gray-500 opacity-70',
                  bulletActiveClass: 'swiper-pagination-bullet-active bg-orange-500'
                }}
                autoplay={{ 
                  delay: 4000,
                  disableOnInteraction: false
                }}
                loop={true}
                className="w-full mb-8 rounded-xl overflow-hidden shadow-xl"
              >
                {member.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-96 w-full">
                      <img
                        className="w-full h-full object-cover"
                        src={image}
                        alt={`${member.name} ${index}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Premium Content */}
              <div className="px-4">
                <div className="text-center mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-orange-400 text-xl font-medium">{member.role}</p>
                </div>

                {/* Elegant Divider */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                </div>

                {/* Premium Intro */}
                <p className="text-gray-300 text-lg text-center mb-8 italic max-w-3xl mx-auto">
                  {member.intro}
                </p>

                {/* Gourmet Ingredients Section */}
                {member.description}
                
                {/* CTA Button */}
                <div className="text-center mt-8">
                  <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105">
                    Order Now - $12.99
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;