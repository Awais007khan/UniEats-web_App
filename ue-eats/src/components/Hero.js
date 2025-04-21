// // import React, { useState, useEffect } from "react";

// // // Import images for the slider
// // import image1 from './Images/unknown.jpg';
// // import image2 from './Images/secondbackground.jpeg';
// // import image3 from './Images/slider4.jpg';
// // import image4 from './Images/slider2.jpg';
// // import image5 from './Images/slider3.jpg';

// // const Hero = () => {
// //   // Define the images for the slider
// //   const images = [image1, image2, image3,image4,image5];

// //   // State to keep track of the current image index
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// //   // Function to automatically cycle through images
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, 3000); // Change image every 5 seconds

// //     // Cleanup the interval on component unmount
// //     return () => clearInterval(interval);
// //   }, [images.length]);

// //   return (
// //     <section
// //       id="hero"
// //       className="bg-cover bg-center h-screen flex items-center justify-center transition-all duration-1000"
// //       style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
// //     >
// //       <div className="bg-black bg-opacity-80 p-10 rounded-lg text-center">
// //         {/* Hero Heading */}
// //         <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
// //           Welcome to UE EATS
// //         </h1>
// //         {/* Subtitle */}
// //         <p className="text-lg sm:text-2xl text-gray-200 mb-5">
// //           Explore our delicious available items
// //         </p>
// //         {/* Call-to-action Button */}
// //         <a
// //           href="/loginn"
// //           className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg shadow-lg transform transition hover:scale-105"
// //           aria-label="Navigate to login page"
// //         >
// //           Get in Touch
// //         </a>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // Import images for the slider
// import image1 from './Images/unknown.jpg';
// import image2 from './Images/secondbackground.jpeg';
// import image3 from './Images/slider4.jpg';
// import image4 from './Images/slider2.jpg';
// import image5 from './Images/slider3.jpg';

// const Hero = () => {
//   const images = [image1, image2, image3, image4, image5];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Auto-cycling effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval);
//   }, [images.length]);

//   // Manual navigation
//   const goToSlide = (index) => {
//     setCurrentImageIndex(index);
//   };

//   return (
//     <section
//       id="hero"
//       className="relative bg-cover bg-center h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Background image with fade transition */}
//       <div className="absolute inset-0 overflow-hidden">
//         {images.map((image, index) => (
//           <motion.div
//             key={index}
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${image})` }}
//             initial={{ opacity: 0 }}
//             animate={{ 
//               opacity: index === currentImageIndex ? 1 : 0,
//               scale: index === currentImageIndex ? 1 : 1.05
//             }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//           />
//         ))}
//         {/* Gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="max-w-3xl text-center"
//         >
//           {/* Hero Heading */}
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
//               Welcome to UE EATS
//             </span>
//           </h1>
          
//           {/* Subtitle */}
//           <motion.p 
//             className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.6 }}
//           >
//             Discover culinary excellence with our handcrafted dishes made from the freshest ingredients
//           </motion.p>
          
//           {/* Call-to-action Buttons */}
//           <motion.div 
//             className="flex flex-col sm:flex-row justify-center gap-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.9 }}
//           >
//             <a
//               href="/loginn"
//               className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
//             >
//               Order Now
//             </a>
//             <a
//               href="#menu"
//               className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
//             >
//               View Menu
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Slider indicators */}
//       <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'}`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Scroll indicator */}
//       <motion.div 
//         className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//         </svg>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

// Import images for the slider
import image1 from './Images/unknown.jpg';
import image2 from './Images/secondbackground.jpeg';
import image3 from './Images/slider4.jpg';
import image4 from './Images/slider2.jpg';
import image5 from './Images/slider3.jpg';

const Hero = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-cycling effect with pause on hover
  useEffect(() => {
    let interval;
    if (!isHovering) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [images.length, isHovering]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background images with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundPosition: isHovering ? 'center' : 'center 20%'
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              backgroundPosition: isHovering ? 'center 15%' : 'center 20%'
            }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ 
              opacity: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
              scale: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
              backgroundPosition: { duration: 10, ease: [0.4, 0, 0.2, 1] }
            }}
          />
        </AnimatePresence>
        
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/70" />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 animate-gradient-x">
                UE EATS
              </span>
            </h1>
            <motion.div 
              className="h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ originX: 0, width: '100px' }}
            />
          </motion.div>

          {/* Subtitle with typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light tracking-wide">
              Experience <span className="font-medium text-white">culinary excellence</span> with our{" "}
              <span className="relative inline-block">
                <span className="relative z-10">seasonally-inspired</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </span>{" "}
              dishes crafted from the finest ingredients
            </p>
          </motion.div>

          {/* CTA Buttons with hover effects */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="/loginn"
              className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full font-medium text-lg group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Order Now <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#menu"
              className="relative px-8 py-4 bg-transparent border-2 border-white/50 text-white rounded-full font-medium text-lg group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Menu</span>
              <motion.span 
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          {/* Featured badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full flex items-center"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span className="text-sm text-gray-200 font-medium">Now delivering to your area</span>
          </motion.div>
        </div>
      </div>

      {/* Slider navigation */}
      <div className="absolute bottom-10 left-0 right-0 z-10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Dots indicator */}
          <div className="flex gap-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative p-1"
                whileHover={{ scale: 1.2 }}
              >
                <div className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white' : 'bg-white/30'}`} />
                {index === currentImageIndex && (
                  <motion.div 
                    className="absolute inset-0 border border-white rounded-full"
                    layoutId="activeDot"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Arrows navigation */}
          <div className="flex gap-4">
            <motion.button
              onClick={prevSlide}
              className="p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronDown className="transform rotate-90 w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronDown className="transform -rotate-90 w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center"
        >
          <span className="text-xs text-white/80 mb-1">Scroll</span>
          <div className="w-4 h-6 border-2 border-white/50 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-1 bg-white rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;