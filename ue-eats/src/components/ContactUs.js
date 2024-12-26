import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[url('https://source.unsplash.com/1600x900/?city,building')] bg-cover bg-center h-60 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 px-6 py-2 rounded">
          Contact Us
        </h1>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
            <form>
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your message"
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
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
            <p className="text-gray-600">
              Have questions or want to discuss your advertising needs? Reach out to us!
            </p>
            <div>
              <p className="font-medium text-gray-800">Address:</p>
              <p className="text-gray-600">123 Billboard Avenue, New York, NY 10001</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Phone:</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Email:</p>
              <p className="text-gray-600">info@billboardagency.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-200">
        <div className="container mx-auto px-6 lg:px-20 py-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Find Us Here</h2>
          <iframe
            className="w-full h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609990784!2d-74.25987568762267!3d40.69767006770815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b62d42d87d%3A0x9b7dcdaedc706d35!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1697296046272!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
