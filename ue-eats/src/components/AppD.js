import React, { useState, useEffect } from "react";

// Import images for the slider
import image1 from './Images/unknown.jpg';
import image2 from './Images/secondbackground.jpeg';
import image3 from './Images/slider4.jpg';
import image4 from './Images/slider2.jpg';
import image5 from './Images/slider3.jpg';

const AppD = () => {
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
      className="bg-cover bg-center h-[500px] flex items-center justify-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className=" text-center">
        {/* Hero Heading */}
        <h3 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          For More Information Download our App 
        </h3>
      </div>
    </section>
  );
};

export default AppD;
