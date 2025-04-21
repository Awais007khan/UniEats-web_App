// import React, { useState } from "react";
// import image from "./Images/loginback.jpg";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     emailaddress: "",
//     sendmessage: "",
//   });

//   const [message, setMessage] = useState("");

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("Message sent successfully!");
//         setFormData({ fullname: "", emailaddress: "", sendmessage: "" }); // Clear form
//       } else {
//         setMessage("Failed to send message.");
//       }
//     } catch (error) {
//       setMessage("Something went wrong.");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       {/* Hero Section */}
//       <section className="bg-opacity-50 h-60 flex items-center justify-center">
//         <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 px-6 py-2 rounded">
//           Contact Us
//         </h1>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-12 flex-grow">
//         <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Form */}
//           <div className="bg-gray p-8 rounded-lg shadow-md">
//             <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
//             <form onSubmit={handleSubmit}>
//               {/* Name */}
//               <div className="mb-4">
//                 <label htmlFor="fullname" className="block text-white text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="fullname"
//                   name="fullname"
//                   value={formData.fullname}
//                   onChange={handleChange}
//                   placeholder="Your full name"
//                   required
//                   className="w-full px-4 py-2  border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
//                 />
//               </div>

//               {/* Email */}
//               <div className="mb-4">
//                 <label htmlFor="emailaddress" className="block text-white text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="emailaddress"
//                   name="emailaddress"
//                   value={formData.emailaddress}
//                   onChange={handleChange}
//                   placeholder="Your email address"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
//                 />
//               </div>

//               {/* Message */}
//               <div className="mb-4">
//                 <label htmlFor="sendmessage" className="block  text-sm font-medium text-white">
//                   Message
//                 </label>
//                 <textarea
//                   id="sendmessage"
//                   name="sendmessage"
//                   value={formData.sendmessage}
//                   onChange={handleChange}
//                   rows="4"
//                   placeholder="Your message"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md font-medium"
//               >
//                 Send Message
//               </button>
//             </form>

//             {/* Display success or error message */}
//             {message && <p className="mt-4 text-center text-green-600">{message}</p>}
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-12">
//         <div className="container mx-auto px-6 lg:px-20">
//           <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Find Us Here</h2>
//           <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
//             <iframe
//               title="Google Map"
//               className="w-full h-full"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509234!2d144.95373531550456!3d-37.81627974202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1e0b77b%3A0x5045675218ce6e0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1602574813914!5m2!1sen!2sus"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactUs;
import React, { useState } from "react";
import image from "./Images/loginback.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    emailaddress: "",
    sendmessage: "",
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

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
        setMessage("Message sent successfully! We'll get back to you soon.");
        setFormData({ fullname: "", emailaddress: "", sendmessage: "" });
      } else {
        setMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section with Gradient Overlay */}
      <section className="relative h-96 flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
            Have questions or need assistance? We're here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form Card */}
          <div className="bg-gray-800 rounded-xl shadow-2xl p-8 transform hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-2 text-yellow-400">Send us a message</h2>
            <p className="text-gray-400 mb-8">We typically respond within 24 hours</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name <span className="text-yellow-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="emailaddress" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address <span className="text-yellow-500">*</span>
                </label>
                <input
                  type="email"
                  id="emailaddress"
                  name="emailaddress"
                  value={formData.emailaddress}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="sendmessage" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message <span className="text-yellow-500">*</span>
                </label>
                <textarea
                  id="sendmessage"
                  name="sendmessage"
                  value={formData.sendmessage}
                  onChange={handleChange}
                  rows="5"
                  placeholder="How can we help you?"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-200"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium text-gray-900 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>

            {message && (
              <div className={`mt-6 p-4 rounded-lg ${message.includes("successfully") ? "bg-green-900 text-green-100" : "bg-red-900 text-red-100"}`}>
                {message}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-300">Phone</h4>
                    <p className="mt-1 text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-300">Email</h4>
                    <p className="mt-1 text-gray-400">support@yourcompany.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-300">Headquarters</h4>
                    <p className="mt-1 text-gray-400">123 Business Avenue, Suite 500</p>
                    <p className="text-gray-400">Melbourne, Australia 3000</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-300 mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-400">
                  <p className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span></p>
                  <p className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></p>
                  <p className="flex justify-between"><span>Sunday</span> <span>Closed</span></p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-gray-300 hover:text-yellow-400 transition duration-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-gray-300 hover:text-yellow-400 transition duration-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-gray-300 hover:text-yellow-400 transition duration-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-gray-300 hover:text-yellow-400 transition duration-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <h2 className="text-3xl font-bold text-yellow-400 px-8 pt-8">Our Location</h2>
          <p className="text-gray-400 px-8 pb-6">Visit our headquarters or drop us a message</p>
          <div className="w-full h-96">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509234!2d144.95373531550456!3d-37.81627974202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1e0b77b%3A0x5045675218ce6e0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1602574813914!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;