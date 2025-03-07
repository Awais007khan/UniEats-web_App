import React, { useState } from "react";
import image from "./Images/loginback.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    emailaddress: "",
    sendmessage: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Message sent successfully!");
        setFormData({ fullname: "", emailaddress: "", sendmessage: "" }); // Clear form
      } else {
        setMessage("Failed to send message.");
      }
    } catch (error) {
      setMessage("Something went wrong.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Hero Section */}
      <section className="bg-opacity-50 h-60 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 px-6 py-2 rounded">
          Contact Us
        </h1>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gray p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="fullname" className="block text-white text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-2  border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="emailaddress" className="block text-white text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailaddress"
                  name="emailaddress"
                  value={formData.emailaddress}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label htmlFor="sendmessage" className="block  text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  id="sendmessage"
                  name="sendmessage"
                  value={formData.sendmessage}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your message"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md font-medium"
              >
                Send Message
              </button>
            </form>

            {/* Display success or error message */}
            {message && <p className="mt-4 text-center text-green-600">{message}</p>}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Find Us Here</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509234!2d144.95373531550456!3d-37.81627974202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1e0b77b%3A0x5045675218ce6e0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1602574813914!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
