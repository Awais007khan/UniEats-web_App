// import React, { useState, useEffect } from "react";

// // Import images for the slider
// import image1 from './Images/unknown.jpg';
// import image2 from './Images/secondbackground.jpeg';
// import image3 from './Images/slider4.jpg';
// import image4 from './Images/slider2.jpg';
// import image5 from './Images/slider3.jpg';
// import image6 from './Images/app1icon.webp'
// import image7 from './Images/app2icon.webp'

// const AppD = () => {
//   // Define the images for the slider
//   const images = [image1, image2, image3,image4,image5];

//   // State to keep track of the current image index
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to automatically cycle through images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 5 seconds

//     // Cleanup the interval on component unmount
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section
//       id="hero"
//       className="bg-cover bg-center h-[500px] flex items-center justify-center transition-all duration-1000"
//       style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
//     >
//       <div className=" text-center">
//         {/* Hero Heading */}
//         <h3 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
//           For More Information Download our App 
//         </h3>
//         <div className="w-400px h-[200px] d-flex mx-auto object-cover  border-20 border-gray-200 shadow-lg">
//         <img src={image6} alt="Erroe in downloading th image"></img>
//         </div>
//         <div className="w-400px h-[200px] d-flex mx-auto object-cover  border-20 border-gray-200 shadow-lg">
//         <img src={image7} alt="Erroe in downloading th image"></img>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppD;
// import React, { useState, useEffect } from "react";

// // Import images for the slider
// import image6 from './Images/app1icon.webp';
// import image7 from './Images/app2icon.webp';
// import image8 from './Images/appback.jpeg'

// const AppD = () => {
//   return (
//     <section
//       id="hero"
//       className="bg-cover bg-center h-[500px] flex items-center justify-center transition-all duration-1000"
//     //   style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
//     style={{backgroundImage:`url(${image8})`}}
//     >
//       <div className="text-center">
//         {/* Hero Heading */}
//         <h3 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
//           For More Information, Download Our App
//         </h3>

//         {/* App Images in Row */}
//         <div className="flex justify-center gap-6 mt-6">
//           <div className="relative group w-36 h-36 sm:w-48 sm:h-48 bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             <img src={image6} alt="App 1 icon" className="w-full h-full object-cover" />
//             {/* Add a hover overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <span className="text-white font-bold">App 1</span>
//             </div>
//           </div>

//           <div className="relative group w-36 h-36 sm:w-48 sm:h-48 bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             <img src={image7} alt="App 2 icon" className="w-full h-full object-cover" />
//             {/* Add a hover overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <span className="text-white font-bold">App 2</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppD;
// import React, { useState, useEffect } from "react";

// // Import images for the slider
// import image1 from './Images/appback.jpeg';
// import image2 from './Images/app2.jpeg';
// import image3 from './Images/slider4.jpg';
// import image4 from './Images/slider2.jpg';
// // import image5 from './Images/slider3.jpg';
// import image6 from './Images/app1icon.webp';
// import image7 from './Images/app2icon.webp';

// const AppD = () => {
//   // Define the images for the slider
//   const images = [image1, image2, image3, image4];

//   // State to keep track of the current image index
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to automatically cycle through images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     // Cleanup the interval on component unmount
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section
//       id="hero"
//       className="bg-cover bg-center h-[500px] flex items-center justify-center transition-all duration-1000"
//       style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
//     >
//       <div className="text-center">
//         {/* Hero Heading */}
//         <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
//           For More Information, Download Our App
//         </h3>

//         {/* App Images in a Responsive Row */}
//         <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
//           {/* App 1 Card */}
//           <div className="relative group w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             <img
//               src={image6}
//               alt="App 1 icon"
//               className="w-full h-full object-contain p-2"
//             />
//             {/* Hover Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <span className="text-white font-semibold text-sm sm:text-base">
//                 Download App 1
//               </span>
//             </div>
//           </div>

//           {/* App 2 Card */}
//           <div className="relative group w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             <img
//               src={image7}
//               alt="App 2 icon"
//               className="w-full h-full object-contain p-2"
//             />
//             {/* Hover Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <span className="text-white font-semibold text-sm sm:text-base">
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

const AppD = () => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="hero"
      className="relative h-[600px] flex items-center justify-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Hero Heading */}
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 mb-8 drop-shadow-lg">
          Download Our App Today
        </h3>
        <p className="text-lg sm:text-xl text-gray-200 mb-6">
          Stay updated with the latest features and access our services on the go.
        </p>

        {/* App Download Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {/* App 1 Card */}
          <div className="relative group w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-110 transition-transform duration-300">
            <img
              src={image6}
              alt="App 1 icon"
              className="w-full h-full object-contain p-3"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm sm:text-base flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Download App 1
              </span>
            </div>
          </div>

          {/* App 2 Card */}
          <div className="relative group w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-110 transition-transform duration-300">
            <img
              src={image7}
              alt="App 2 icon"
              className="w-full h-full object-contain p-3"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm sm:text-base flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Download App 2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppD;
