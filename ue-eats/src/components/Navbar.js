// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
// import logo from "./Images/logo.png";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu
//   const navigate = useNavigate(); // React Router's navigation hook

//   const handleShopClick = () => {
//     navigate("/AddCart"); // Navigate to AddCart when shopping icon is clicked
//   };

//   const handleLogout = () => {
//     console.log("User logged out");
//     // Add logout logic here
//   };

//   return (
//     <nav className="bg-gray-800 p-4 fixed w-full z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo and Branding */}
//         <div className="flex items-center space-x-3">
//           <img src={logo} alt="UNI EATS Logo" className="h-10 w-10" />
//           <span className="text-white font-bold text-xl">UNI EATS</span>
//         </div>

//         {/* Hamburger Menu Button (visible on small screens) */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-white md:hidden focus:outline-none"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3 6h18M3 12h18m-9 6h9"
//             />
//           </svg>
//         </button>

//         {/* Navigation Links (responsive) */}
//         <div
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } md:flex space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
//         >
//           <NavLink
//             to="/hero"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 px-3 block"
//                 : "text-white px-3 block hover:text-gray-400"
//             }
//           >
//             Home
//           </NavLink>
//           {/* <NavLink
//             to="/beforeorder"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 px-3 block"
//                 : "text-white px-3 block hover:text-gray-400"
//             }
//           >
//             Items
//           </NavLink> */}
//           {/* <NavLink
//             to="/Comment"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 px-3 block"
//                 : "text-white px-3 block hover:text-gray-400"
//             }
//           >
//             Comments
//           </NavLink> */}
//           <NavLink
//             to="/Loginn"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 px-3 block"
//                 : "text-white px-3 block hover:text-gray-400"
//             }
//           >
//             Login
//           </NavLink>
//           <NavLink
//             to="/Singupp"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 px-3 block"
//                 : "text-white px-3 block hover:text-gray-400"
//             }
//           >
//             Signup
//           </NavLink>
//           {/* <NavLink
//             to="/Contactt"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 px-3 block"
//                 : "text-white px-3 block hover:text-gray-400"
//             }
//           >
//             Order
//           </NavLink> */}
//           <NavLink
//             to="/contactus"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 px-3 block"
//                 : "text-white px-3 block hover:text-gray-400"
//             }
//           >
//             Contact
//           </NavLink>
//           <NavLink
//             to="/Services"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 px-3 block"
//                 : "text-white px-3 block hover:text-gray-400"
//             }
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 px-3 block"
//                 : "text-white px-3 block hover:text-gray-400"
//             }
//           >
//             About
//           </NavLink>

//           {/* Shopping Cart Icon */}
//           <button
//             onClick={handleShopClick}
//             className="text-white relative hover:text-gray-400 focus:outline-none"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 3h2l.4 2M7 13h10l1.4-7H6.6M5 21a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z"
//               />
//             </svg>
//             {/* Cart item count badge */}
//             <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-2">
//               3
//             </span>
//           </button>

//           {/* Logout Button */}
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 text-white px-4 py-2 rounded-md block mt-4 md:mt-0 hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./Images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  // Check login status when component mounts
  useEffect(() => {
    const token = localStorage.getItem('token'); // Or your auth token
    setIsLoggedIn(!!token); // Set to true if token exists
  }, []);

  const handleShopClick = () => {
    navigate("/AddCart");
  };

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('token');
    // Update state
    setIsLoggedIn(false);
    // Navigate to home or login page
    navigate("/hero");
    console.log("User logged out");
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Branding */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="UNI EATS Logo" className="h-10 w-10" />
          <span className="text-white font-bold text-xl">UNI EATS</span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18m-9 6h9"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <NavLink
            to="/hero"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 px-3 block"
                : "text-white px-3 block hover:text-gray-400"
            }
          >
            Home
          </NavLink>

          {/* Conditional rendering based on login state */}
          {!isLoggedIn ? (
            <>
              <NavLink
                to="/Loginn"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 px-3 block"
                    : "text-white px-3 block hover:text-gray-400"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/Singupp"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 px-3 block"
                    : "text-white px-3 block hover:text-gray-400"
                }
              >
                Signup
              </NavLink>
            </>
          ) : null}

          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 px-3 block"
                : "text-white px-3 block hover:text-gray-400"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 px-3 block"
                : "text-white px-3 block hover:text-gray-400"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 px-3 block"
                : "text-white px-3 block hover:text-gray-400"
            }
          >
            About
          </NavLink>

          {/* Shopping Cart Icon - shown only when logged in */}
          {isLoggedIn && (
            <button
              onClick={handleShopClick}
              className="text-white relative hover:text-gray-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l1.4-7H6.6M5 21a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-2">
                3
              </span>
            </button>
          )}

          {/* Logout Button - shown only when logged in */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md block mt-4 md:mt-0 hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;