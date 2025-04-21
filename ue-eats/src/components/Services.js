// import React from 'react'

// function Services() {
//   return (
//     <>
//     <section className="bg-gray-50 py-16">
//   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center">
//       <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">Our Services</h2>
//       <p className="mt-4 text-lg text-gray-600">
//         Explore the wide range of services offered by our canteen to make your dining experience seamless and enjoyable.
//       </p>
//     </div>


//     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
//       <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//         <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-white rounded-full mx-auto mb-4">
//           <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 17h-2v-2h2v2zm2.071-7.071l-1.414 1.414C12.898 13.488 12.5 14.05 12.5 14.5v1.5h-2v-1.5c0-.83.394-1.676 1.071-2.071l1.414-1.414C13.526 10.59 14 9.831 14 9c0-1.654-1.346-3-3-3s-3 1.346-3 3H6c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.204-.526 2.282-1.429 3.071z"/>
//           </svg>
//         </div>
//         <h3 className="text-lg font-semibold text-gray-800">Diverse Menu</h3>
//         <p className="mt-2 text-gray-600">Enjoy a variety of delicious meals and snacks prepared with fresh ingredients.</p>
//       </div>

      
//       <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//         <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mx-auto mb-4">
//           <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M22 3h-20v18h20V3zM20 19H4V5h16v14zM13 15h-2v-4h2v4zM13 9h-2V7h2v2z"/>
//           </svg>
//         </div>
//         <h3 className="text-lg font-semibold text-gray-800">Pre-Order & Pickup</h3>
//         <p className="mt-2 text-gray-600">Order your favorite meals in advance and pick them up at your convenience.</p>
//       </div>

      
//       <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//         <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4">
//           <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M21 8h-2V6c0-2.209-1.791-4-4-4H9C6.791 2 5 3.791 5 6v2H3C1.346 8 0 9.346 0 11v7c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3v-7C24 9.346 22.654 8 21 8zM7 6c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2H7V6zm15 12c0 .552-.449 1-1 1H3c-.551 0-1-.448-1-1v-7c0-.552.449-1 1-1h18c.551 0 1 .448 1 1V18z"/>
//           </svg>
//         </div>
//         <h3 className="text-lg font-semibold text-gray-800">Meal Plans</h3>
//         <p className="mt-2 text-gray-600">Affordable meal subscription plans for students and staff.</p>
//       </div>

      
//       <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//         <div className="flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full mx-auto mb-4">
//           <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 4a2 2 0 0 1 2 2v4h3l-4 4-4-4h3V6a2 2 0 0 1 2-2zm8.5 10c-1.12 0-2.15.37-3 .98V12h-2v6.58c-.97-.54-2.09-.88-3.5-.88s-2.53.34-3.5.88V12H7v2.98A6.484 6.484 0 0 0 3.5 14C2.12 14 1 15.12 1 16.5S2.12 19 3.5 19c1.12 0 2.15-.37 3-.98V20h2v-6.58c.97.54 2.09.88 3.5.88s2.53-.34 3.5-.88V20h2v-2.98A6.484 6.484 0 0 0 20.5 19c1.38 0 2.5-1.12 2.5-2.5S21.88 14 20.5 14z"/>
//           </svg>
//         </div>
//         <h3 className="text-lg font-semibold text-gray-800">On-Campus Delivery</h3>
//         <p className="mt-2 text-gray-600">Quick and hassle-free food delivery within the campus.</p>
//       </div>

    
//       <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//         <div className="flex items-center justify-center w-16 h-16 bg-indigo-500 text-white rounded-full mx-auto mb-4">
//           <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M20 4h-5v-1c0-1.104-.896-2-2-2h-2c-1.104 0-2 .896-2 2v1h-5c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-16c0-1.104-.896-2-2-2zM9 3h6v1h-6v-1zm11 18h-16v-16h16v16z"/>
//           </svg>
//         </div>
//         <h3 className="text-lg font-semibold text-gray-800">Catering Services</h3>
//         <p className="mt-2 text-gray-600">Catering for campus events, meetings, and parties.</p>
//       </div>
//     </div>
//   </div>
// </section>

//     </>
//   )
// }

// export default Services
import React from 'react';

function Services() {
  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Animated floating food icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-yellow-400 opacity-20"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {['🍔', '🍟', '🍕', '🥗', '🍣', '🍩', '🍦', '🍜', '🍛', '🍹', '☕', '🍪'][i % 12]}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
              Our Premium Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Enhancing your dining experience with exceptional services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-yellow-500/10">
            <div className="absolute inset-0 bg-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-xl mx-auto mb-6">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">Diverse Menu</h3>
              <p className="text-gray-300 text-center">
                Over 100+ dishes from various cuisines, with daily specials and seasonal offerings to satisfy every palate.
              </p>
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400">
                  Most Popular
                </span>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-green-500/10">
            <div className="absolute inset-0 bg-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-xl mx-auto mb-6">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">Pre-Order & Pickup</h3>
              <p className="text-gray-300 text-center">
                Skip the lines with our mobile app. Order ahead and pick up at your scheduled time with zero waiting.
              </p>
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                  Time Saver
                </span>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-blue-500/10">
            <div className="absolute inset-0 bg-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-xl mx-auto mb-6">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">Meal Plans</h3>
              <p className="text-gray-300 text-center">
                Customizable weekly/monthly plans with 10-25% savings. Perfect for students, faculty, and regular visitors.
              </p>
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">
                  Save 25%
                </span>
              </div>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-red-400/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-red-500/10">
            <div className="absolute inset-0 bg-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-xl mx-auto mb-6">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">On-Campus Delivery</h3>
              <p className="text-gray-300 text-center">
                Food delivered to your dorm, office, or anywhere on campus within 30 minutes or it's free.
              </p>
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400">
                  Fast Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-xl mx-auto mb-6">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">Catering Services</h3>
              <p className="text-gray-300 text-center">
                Professional catering for events from 10 to 500 people. Menus tailored to your event's theme and budget.
              </p>
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400">
                  Book Now
                </span>
              </div>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-orange-500/10">
            <div className="absolute inset-0 bg-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-xl mx-auto mb-6">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">VIP Membership</h3>
              <p className="text-gray-300 text-center">
                Exclusive perks including priority service, member-only dishes, and 15% discount on all purchases.
              </p>
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400">
                  Premium
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to experience our services?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-500/20">
              Download Our App
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-400 font-bold rounded-lg hover:bg-yellow-500/10 transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>
    </section>
  );
}

export default Services;