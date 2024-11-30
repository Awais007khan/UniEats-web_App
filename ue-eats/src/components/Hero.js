// import React from "react";
// // import image from './unknown.jpg'
// import image from './Images/unknown.jpg'
// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="bg-cover bg-center h-screen flex items-center justify-center"
//     //   style={{ backgroundImage: "url('./')" }}
//     style={{ backgroundImage: `url(${image})`}}
//     >
//       <div className="bg-black bg-opacity-80 p-10 rounded-lg text-center">
//         <h1 className="text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
//           Welcome to UE EATS
//         </h1>
//         <p className="text-2xl text-gray-200 mb-5">
//          Here are the our avalible items
//         </p>
//         <a
//           href="/loginn"
//           className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg shadow-lg transform transition hover:scale-105"
//         >
//           Get in Touch
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from "react";

// Import images for the slider
import image1 from './Images/unknown.jpg';
import image2 from './Images/secondbackground.jpeg';
import image3 from './Images/slider4.jpg';
import image4 from './Images/slider2.jpg';
import image5 from './Images/slider3.jpg';

const Hero = () => {
  // Define the images for the slider
  const images = [image1, image2, image3,image4,image5];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to automatically cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="hero"
      className="bg-cover bg-center h-screen flex items-center justify-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="bg-black bg-opacity-80 p-10 rounded-lg text-center">
        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Welcome to UE EATS
        </h1>
        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-gray-200 mb-5">
          Explore our delicious available items
        </p>
        {/* Call-to-action Button */}
        <a
          href="/loginn"
          className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg shadow-lg transform transition hover:scale-105"
          aria-label="Navigate to login page"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
