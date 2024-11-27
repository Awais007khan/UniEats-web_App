import React from 'react'

function Services() {
  return (
    <>
    <section className="bg-gray-50 py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">Our Services</h2>
      <p className="mt-4 text-lg text-gray-600">
        Explore the wide range of services offered by our canteen to make your dining experience seamless and enjoyable.
      </p>
    </div>


    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-white rounded-full mx-auto mb-4">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 17h-2v-2h2v2zm2.071-7.071l-1.414 1.414C12.898 13.488 12.5 14.05 12.5 14.5v1.5h-2v-1.5c0-.83.394-1.676 1.071-2.071l1.414-1.414C13.526 10.59 14 9.831 14 9c0-1.654-1.346-3-3-3s-3 1.346-3 3H6c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.204-.526 2.282-1.429 3.071z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Diverse Menu</h3>
        <p className="mt-2 text-gray-600">Enjoy a variety of delicious meals and snacks prepared with fresh ingredients.</p>
      </div>

      
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mx-auto mb-4">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 3h-20v18h20V3zM20 19H4V5h16v14zM13 15h-2v-4h2v4zM13 9h-2V7h2v2z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Pre-Order & Pickup</h3>
        <p className="mt-2 text-gray-600">Order your favorite meals in advance and pick them up at your convenience.</p>
      </div>

      
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 8h-2V6c0-2.209-1.791-4-4-4H9C6.791 2 5 3.791 5 6v2H3C1.346 8 0 9.346 0 11v7c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3v-7C24 9.346 22.654 8 21 8zM7 6c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2H7V6zm15 12c0 .552-.449 1-1 1H3c-.551 0-1-.448-1-1v-7c0-.552.449-1 1-1h18c.551 0 1 .448 1 1V18z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Meal Plans</h3>
        <p className="mt-2 text-gray-600">Affordable meal subscription plans for students and staff.</p>
      </div>

      
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full mx-auto mb-4">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4a2 2 0 0 1 2 2v4h3l-4 4-4-4h3V6a2 2 0 0 1 2-2zm8.5 10c-1.12 0-2.15.37-3 .98V12h-2v6.58c-.97-.54-2.09-.88-3.5-.88s-2.53.34-3.5.88V12H7v2.98A6.484 6.484 0 0 0 3.5 14C2.12 14 1 15.12 1 16.5S2.12 19 3.5 19c1.12 0 2.15-.37 3-.98V20h2v-6.58c.97.54 2.09.88 3.5.88s2.53-.34 3.5-.88V20h2v-2.98A6.484 6.484 0 0 0 20.5 19c1.38 0 2.5-1.12 2.5-2.5S21.88 14 20.5 14z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">On-Campus Delivery</h3>
        <p className="mt-2 text-gray-600">Quick and hassle-free food delivery within the campus.</p>
      </div>

    
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-indigo-500 text-white rounded-full mx-auto mb-4">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h-5v-1c0-1.104-.896-2-2-2h-2c-1.104 0-2 .896-2 2v1h-5c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-16c0-1.104-.896-2-2-2zM9 3h6v1h-6v-1zm11 18h-16v-16h16v16z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Catering Services</h3>
        <p className="mt-2 text-gray-600">Catering for campus events, meetings, and parties.</p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Services