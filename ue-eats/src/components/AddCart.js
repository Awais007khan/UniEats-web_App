// // import React from "react";
// // import { useCart } from "./Context/CartContext";

// // const AddCart = () => {
// //   const { cartItems, removeFromCart, updateQuantity } = useCart();

// //   // Handle quantity changes
// //   const handleQuantityChange = (item, delta) => {
// //     const newQuantity = item.quantity + delta;
// //     if (newQuantity > 0) {
// //       updateQuantity(item.name, newQuantity);
// //     }
// //   };

// //   // Calculate Grand Total
// //   const calculateGrandTotal = () =>
// //     cartItems.reduce((sum, item) => sum + item.Price * item.quantity, 0);

// //   return (
// //     <div className="container mx-auto p-6">
// //       <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>
// //       {cartItems.length > 0 ? (
// //         <>
// //           {cartItems.map((item, index) => (
// //             <div
// //               key={index}
// //               className="border p-4 mb-4 rounded-lg shadow-md flex justify-between items-center"
// //             >
// //               <div>
// //                 <h3 className="text-xl font-semibold">{item.name}</h3>
// //                 <p className="text-gray-600">{item.role}</p>
// //                 <p className="text-gray-800">Price per Item: {item.Price} PKR</p>
// //                 <p className="text-gray-800 font-semibold">
// //                   Total: {item.Price * item.quantity} PKR
// //                 </p>
// //                 <div className="flex items-center mt-2">
// //                   <button
// //                     className={`px-2 py-1 rounded ${
// //                       item.quantity === 1
// //                         ? "bg-gray-200 cursor-not-allowed"
// //                         : "bg-gray-300 hover:bg-gray-400"
// //                     }`}
// //                     onClick={() => handleQuantityChange(item, -1)}
// //                     disabled={item.quantity === 1}
// //                   >
// //                     -
// //                   </button>
// //                   <span className="mx-4">{item.quantity}</span>
// //                   <button
// //                     className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
// //                     onClick={() => handleQuantityChange(item, 1)}
// //                   >
// //                     +
// //                   </button>
// //                 </div>
// //               </div>
// //               <button
// //                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
// //                 onClick={() => removeFromCart(item.name)}
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           ))}

// //           {/* Grand Total */}
// //           <div className="mt-6 text-right">
// //             <h3 className="text-xl font-bold">
// //               Grand Total: {calculateGrandTotal()} PKR
// //             </h3>
// //             <button
// //               className="bg-green-500 text-white px-6 py-3 rounded mt-4 hover:bg-green-600"
// //               onClick={() => alert("Proceeding to checkout...")}
// //             >
// //               Checkout
// //             </button>
// //           </div>
// //         </>
// //       ) : (
// //         <div className="text-center mt-20">
// //           <p className="text-gray-600 text-lg font-semibold">Your cart is empty.</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AddCart;
// // import React, { useState } from "react";
// // import { useCart } from "./Context/CartContext";

// // const AddCart = () => {
// //   const { cartItems, removeFromCart, updateQuantity } = useCart();
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   // Handle quantity changes
// //   const handleQuantityChange = (item, delta) => {
// //     const newQuantity = item.quantity + delta;
// //     if (newQuantity > 0) {
// //       updateQuantity(item.name, newQuantity);
// //     }
// //   };

// //   // Calculate Grand Total
// //   const calculateGrandTotal = () => {
// //     console.log("Cart Items:", cartItems); // Debugging: Check the cart items
// //     return cartItems.reduce(
// //       (sum, item) => sum + parseFloat(item.Price) * item.quantity,
// //       0
// //     );
// //   };

// //   return (
// //     <div className="container mx-auto p-6">
// //       <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>
// //       {cartItems.length > 0 ? (
// //         <>
// //           {cartItems.map((item, index) => (
// //             <div
// //               key={index}
// //               className="border p-4 mb-4 rounded-lg shadow-md flex justify-between items-center"
// //             >
// //               <div>
// //                 <h3 className="text-xl font-semibold">{item.name}</h3>
// //                 <p className="text-gray-600">{item.role}</p>
// //                 <p className="text-gray-800">Price per Item: {item.Price} PKR</p>
// //                 <p className="text-gray-800 font-semibold">
// //                   Total: {parseFloat(item.Price) * item.quantity} PKR
// //                 </p>
// //                 <div className="flex items-center mt-2">
// //                   <button
// //                     className={`px-2 py-1 rounded ${
// //                       item.quantity === 1
// //                         ? "bg-gray-200 cursor-not-allowed"
// //                         : "bg-gray-300 hover:bg-gray-400"
// //                     }`}
// //                     onClick={() => handleQuantityChange(item, -1)}
// //                     disabled={item.quantity === 1}
// //                   >
// //                     -
// //                   </button>
// //                   <span className="mx-4">{item.quantity}</span>
// //                   <button
// //                     className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
// //                     onClick={() => handleQuantityChange(item, 1)}
// //                   >
// //                     +
// //                   </button>
// //                 </div>
// //               </div>
// //               <button
// //                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
// //                 onClick={() => removeFromCart(item.name)}
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           ))}

// //           {/* Grand Total */}
// //           <div className="mt-6 text-right">
// //             <h3 className="text-xl font-bold">
// //               Grand Total: {calculateGrandTotal()} PKR
// //             </h3>
// //             <button
// //               className="bg-green-500 text-white px-6 py-3 rounded mt-4 hover:bg-green-600"
// //               onClick={() => setIsModalOpen(true)}
// //             >
// //               Checkout
// //             </button>
// //           </div>

// //           {/* Checkout Modal */}
// //           {isModalOpen && (
// //             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// //               <div className="bg-white p-6 rounded-lg shadow-lg w-96">
// //                 <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
// //                 <ul className="mb-4">
// //                   {cartItems.map((item, index) => (
// //                     <li key={index} className="border-b py-2">
// //                       {item.name} - {item.quantity} x {item.Price} PKR
// //                     </li>
// //                   ))}
// //                 </ul>
// //                 <p className="text-lg font-bold">
// //                   Grand Total: {calculateGrandTotal()} PKR
// //                 </p>
// //                 <div className="mt-4 flex justify-between">
// //                   <button
// //                     className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
// //                     onClick={() => setIsModalOpen(false)}
// //                   >
// //                     Close
// //                   </button>
// //                   <button
// //                     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// //                     onClick={() => alert("Order Placed!")}
// //                   >
// //                     Confirm Order
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </>
// //       ) : (
// //         <div className="text-center mt-20">
// //           <p className="text-gray-600 text-lg font-semibold">Your cart is empty.</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AddCart;
// import React, { useState } from "react";
// import { useCart } from "./Context/CartContext";
// import Contactt from './Contactt' // Import the Contactt component

// const AddCart = () => {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Handle quantity changes
//   const handleQuantityChange = (item, delta) => {
//     const newQuantity = item.quantity + delta;
//     if (newQuantity > 0) {
//       updateQuantity(item.name, newQuantity);
//     }
//   };

//   // Calculate Grand Total
//   const calculateGrandTotal = () =>
//     cartItems.reduce((sum, item) => sum + parseFloat(item.Price) * item.quantity, 0);

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>
//       {cartItems.length > 0 ? (
//         <>
//           {cartItems.map((item, index) => (
//             <div
//               key={index}
//               className="border p-4 mb-4 rounded-lg shadow-md flex justify-between items-center"
//             >
//               <div>
//                 <h3 className="text-xl font-semibold">{item.name}</h3>
//                 <p className="text-gray-600">{item.role}</p>
//                 <p className="text-gray-800">Price per Item: {item.Price} PKR</p>
//                 <p className="text-gray-800 font-semibold">
//                   Total: {parseFloat(item.Price) * item.quantity} PKR
//                 </p>
//                 <div className="flex items-center mt-2">
//                   <button
//                     className={`px-2 py-1 rounded ${
//                       item.quantity === 1
//                         ? "bg-gray-200 cursor-not-allowed"
//                         : "bg-gray-300 hover:bg-gray-400"
//                     }`}
//                     onClick={() => handleQuantityChange(item, -1)}
//                     disabled={item.quantity === 1}
//                   >
//                     -
//                   </button>
//                   <span className="mx-4">{item.quantity}</span>
//                   <button
//                     className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
//                     onClick={() => handleQuantityChange(item, 1)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                 onClick={() => removeFromCart(item.name)}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}

//           {/* Grand Total */}
//           <div className="mt-6 text-right">
//             <h3 className="text-xl font-bold">
//               Grand Total: {calculateGrandTotal()} PKR
//             </h3>
//             <button
//               className="bg-green-500 text-white px-6 py-3 rounded mt-4 hover:bg-green-600"
//               onClick={() => setIsModalOpen(true)}
//             >
//               Checkout
//             </button>
//           </div>

//           {/* Checkout Modal with Order Form */}
//           {isModalOpen && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//               <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//                 <button
//                   className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
//                   onClick={() => setIsModalOpen(false)}
//                 >
//                   ✖
//                 </button>
//                 <Contactt cartItems={cartItems} closeModal={() => setIsModalOpen(false)} />
//               </div>
//             </div>
//           )}
//         </>
//       ) : (
//         <div className="text-center mt-20">
//           <p className="text-gray-600 text-lg font-semibold">Your cart is empty.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddCart;
import React from "react";
import { useCart } from "./Context/CartContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle quantity changes
  const handleQuantityChange = (item, delta) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity > 0) {
      updateQuantity(item.name, newQuantity);
    }
  };

  // Calculate Grand Total
  const calculateGrandTotal = () =>
    cartItems.reduce((sum, item) => sum + parseFloat(item.Price) * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="border p-4 mb-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.role}</p>
                <p className="text-gray-800">Price per Item: {item.Price} PKR</p>
                <p className="text-gray-800 font-semibold">
                  Total: {parseFloat(item.Price) * item.quantity} PKR
                </p>
                <div className="flex items-center mt-2">
                  <button
                    className={`px-2 py-1 rounded ${
                      item.quantity === 1
                        ? "bg-gray-200 cursor-not-allowed"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => handleQuantityChange(item, -1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="mx-4">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                    onClick={() => handleQuantityChange(item, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => removeFromCart(item.name)}
              >
                Delete
              </button>
            </div>
          ))}

          {/* Grand Total */}
          <div className="mt-6 text-right">
            <h3 className="text-xl font-bold">
              Grand Total: {calculateGrandTotal()} PKR
            </h3>
            <button
              className="bg-green-500 text-white px-6 py-3 rounded mt-4 hover:bg-green-600"
              onClick={() => navigate("/payment")} // Navigate to /payment on click
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="text-center mt-20">
          <p className="text-gray-600 text-lg font-semibold">Your cart is empty.</p>
        </div>
      )}
    </div>
  );
};

export default AddCart;
