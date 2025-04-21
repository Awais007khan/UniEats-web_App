// import React, { useState, useEffect } from "react";

// // Import images for the slider
// import image1 from './Images/appback.jpeg';
// import image2 from './Images/app2.jpeg';
// import image3 from './Images/slider4.jpg';
// import image4 from './Images/slider2.jpg';
// import image6 from './Images/app1icon.webp';
// import image7 from './Images/app2icon.webp';

// const AppD = () => {
//   const images = [image1, image2, image3, image4];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section
//       id="hero"
//       className="relative h-[600px] flex items-center justify-center transition-all duration-1000"
//       style={{
//         backgroundImage: `url(${images[currentImageIndex]})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         transition: "background-image 1s ease-in-out",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4">
//         {/* Hero Heading */}
//         <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 mb-8 drop-shadow-lg">
//           Download Our App Today
//         </h3>
//         <p className="text-lg sm:text-xl text-gray-200 mb-6">
//           Stay updated with the latest features and access our services on the go.
//         </p>

//         {/* App Download Cards */}
//         <div className="flex flex-wrap justify-center gap-8 mt-8">
//           {/* App 1 Card */}
//           <div className="relative group w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-110 transition-transform duration-300">
//             <img
//               src={image6}
//               alt="App 1 icon"
//               className="w-full h-full object-contain p-3"
//             />
//             {/* Hover Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <span className="text-white font-semibold text-sm sm:text-base flex items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 4v16m8-8H4"
//                   />
//                 </svg>
//                 Download App 1
//               </span>
//             </div>
//           </div>

//           {/* App 2 Card */}
//           <div className="relative group w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-110 transition-transform duration-300">
//             <img
//               src={image7}
//               alt="App 2 icon"
//               className="w-full h-full object-contain p-3"
//             />
//             {/* Hover Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <span className="text-white font-semibold text-sm sm:text-base flex items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 4v16m8-8H4"
//                   />
//                 </svg>
//                 Download App 2
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppD;
import React, { useState, useEffect } from "react";

// Import images for the slider
import image1 from './Images/appback.jpeg';
import image2 from './Images/app2.jpeg';
import image3 from './Images/slider4.jpg';
import image4 from './Images/slider2.jpg';
import image6 from './Images/app1icon.webp';
import image7 from './Images/app2icon.webp';

// Import icons
import { FaDownload, FaApple, FaGooglePlay } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const AppD = () => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Animation for text
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center transition-all duration-1000 overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/50 to-black/90"></div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
        {/* Hero Heading with animation */}
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate Your Experience <br className="hidden sm:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              With Our Mobile App
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Access premium features, real-time updates, and exclusive content right at your fingertips. 
            Available on both iOS and Android platforms.
          </p>
        </div>

        {/* App Download Cards with enhanced design */}
        <div className={`flex flex-wrap justify-center gap-6 mt-12 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* App Store Card */}
          <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl w-full max-w-xs transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
            <div className="p-6 flex flex-col items-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl mb-4">
                <FaApple className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Download on the</h3>
              <h4 className="text-2xl font-bold text-white mb-4">App Store</h4>
              <div className="flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg font-medium group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                <FaDownload className="mr-2" />
                Download Now
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl pointer-events-none transition-all duration-500"></div>
          </div>

          {/* Google Play Card */}
          <div className="group relative bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl w-full max-w-xs transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
            <div className="p-6 flex flex-col items-center">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 p-4 rounded-xl mb-4">
                <FaGooglePlay className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Get it on</h3>
              <h4 className="text-2xl font-bold text-white mb-4">Google Play</h4>
              <div className="flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg font-medium group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <FaDownload className="mr-2" />
                Download Now
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl pointer-events-none transition-all duration-500"></div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className={`mt-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="#features" className="inline-flex items-center text-white/80 hover:text-white group">
            <span className="mr-2">Learn more about app features</span>
            <FiArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-100px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AppD;