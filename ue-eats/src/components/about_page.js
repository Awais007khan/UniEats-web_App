import React from "react";
import image from '../components/Images/aboutimage.jpeg'
const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* About Us Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              About Us
            </h1>
            <p className="mt-4 text-lg leading-7 text-gray-600 max-w-2xl mx-auto">
              Discover who we are, what drives us, and how we aim to make an
              impact.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image Section */}
            <div>
              <img
                // src="https://via.placeholder.com/500x500"
                src={image}
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We strive to empower individuals and businesses by delivering
                high-quality solutions, innovative approaches, and seamless user
                experiences. Our passion is fueled by a deep commitment to
                excellence and the desire to leave a positive mark on the world.
              </p>

              <h3 className="mt-8 text-xl font-medium text-gray-800">
                Why Choose Us?
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Dedicated to quality and customer satisfaction
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Innovative and forward-thinking solutions
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  A team of experienced and passionate professionals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Ready to work with us?
          </h2>
          <p className="mt-4 text-gray-700">
            Let’s collaborate to achieve greatness together.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
