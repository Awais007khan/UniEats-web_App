// import React from "react";
// import image from '../components/Images/aboutimage.jpeg'
// const AboutPage = () => {
//   return (
//     <div className="bg-gray-50 text-gray-800">
//       {/* About Us Section */}
//       <section className="relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="text-center">
//             <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
//               About Us
//             </h1>
//             <p className="mt-4 text-lg leading-7 text-gray-600 max-w-2xl mx-auto">
//               Discover who we are, what drives us, and how we aim to make an
//               impact.
//             </p>
//           </div>

//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//             {/* Image Section */}
//             <div>
//               <img
//                 // src="https://via.placeholder.com/500x500"
//                 src={image}
//                 alt="About Us"
//                 className="rounded-lg shadow-lg"
//               />
//             </div>

//             {/* Text Content */}
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
//                 Our Mission
//               </h2>
//               <p className="mt-4 text-gray-700 leading-relaxed">
//                 We strive to empower individuals and businesses by delivering
//                 high-quality solutions, innovative approaches, and seamless user
//                 experiences. Our passion is fueled by a deep commitment to
//                 excellence and the desire to leave a positive mark on the world.
//               </p>

//               <h3 className="mt-8 text-xl font-medium text-gray-800">
//                 Why Choose Us?
//               </h3>
//               <ul className="mt-4 space-y-3">
//                 <li className="flex items-center">
//                   <svg
//                     className="w-6 h-6 text-green-500 mr-3"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M5 13l4 4L19 7"
//                     ></path>
//                   </svg>
//                   Dedicated to quality and customer satisfaction
//                 </li>
//                 <li className="flex items-center">
//                   <svg
//                     className="w-6 h-6 text-green-500 mr-3"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M5 13l4 4L19 7"
//                     ></path>
//                   </svg>
//                   Innovative and forward-thinking solutions
//                 </li>
//                 <li className="flex items-center">
//                   <svg
//                     className="w-6 h-6 text-green-500 mr-3"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M5 13l4 4L19 7"
//                     ></path>
//                   </svg>
//                   A team of experienced and passionate professionals
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call-to-Action */}
//       <div className="bg-gray-100 py-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900">
//             Ready to work with us?
//           </h2>
//           <p className="mt-4 text-gray-700">
//             Let’s collaborate to achieve greatness together.
//           </p>
//           <a
//             href="/contact"
//             className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from '../components/Images/aboutimage.jpeg';

const AboutPage = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-75"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl mb-6"
            >
              About <span className="text-blue-400">Our Vision</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-xl leading-8 text-gray-300 max-w-3xl mx-auto"
            >
              Pioneering innovation with purpose, we bridge the gap between technology and human potential.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20" ref={ref}>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Image Section with elegant frame */}
            <motion.div 
              variants={fadeInVariants}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-75 group-hover:opacity-100 transition duration-500 blur-lg group-hover:blur-sm"></div>
              <img
                src={image}
                alt="Our Team"
                className="relative rounded-lg shadow-2xl transform group-hover:scale-101 transition duration-500"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div variants={containerVariants}>
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold text-white sm:text-4xl mb-8"
              >
                Redefining <span className="text-blue-400">Excellence</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed mb-8"
              >
                We are a collective of visionaries, engineers, and creatives dedicated to building solutions that matter. Our approach combines technical mastery with human-centered design to create products that resonate.
              </motion.p>

              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Our <span className="text-blue-400">Core Values</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">Integrity First</h4>
                      <p className="mt-1 text-gray-400">
                        We build trust through transparency and ethical practices in all we do.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">Relentless Innovation</h4>
                      <p className="mt-1 text-gray-400">
                        We challenge conventions and push boundaries to deliver breakthrough solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">People-Centric</h4>
                      <p className="mt-1 text-gray-400">
                        Our solutions begin and end with the human experience at the forefront.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500 transition"
            >
              <div className="text-5xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-xl font-medium text-gray-300">Successful Projects</div>
              <div className="mt-2 text-gray-400">Delivered with excellence</div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-purple-500 transition"
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-xl font-medium text-gray-300">Client Satisfaction</div>
              <div className="mt-2 text-gray-400">Our highest priority</div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-indigo-500 transition"
            >
              <div className="text-5xl font-bold text-indigo-400 mb-2">10+</div>
              <div className="text-xl font-medium text-gray-300">Years of Experience</div>
              <div className="mt-2 text-gray-400">Industry leadership</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 -skew-y-3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-center text-white sm:text-4xl mb-16"
            >
              Our <span className="text-blue-400">Philosophy</span>
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-gray-700/50"
            >
              <blockquote className="text-xl md:text-2xl italic text-gray-300 text-center leading-relaxed">
                "We believe technology should serve humanity, not the other way around. Every line of code we write, every design we create, and every solution we build is guided by this principle. Our mission is to craft digital experiences that feel as natural as they are innovative."
              </blockquote>
              <div className="mt-8 text-center">
                <div className="text-blue-400 font-medium">— Leadership Team</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-extrabold text-white sm:text-4xl"
            >
              Ready to Transform Your Vision into Reality?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Let's collaborate to create something extraordinary together.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
                <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;