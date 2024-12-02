// import React from "react";

// const AddCart = () => {

//   return (
    
//     <div className="container mx-auto p-4">
//       {/* Title */}
//       <h1 className="text-2xl font-bold text-center mb-6">Shopping Cart</h1>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-3 text-left">Item title</th>
//               <th className="border border-gray-300 p-3 text-left">Price</th>
//               <th className="border border-gray-300 p-3 text-left">Quantity</th>
//               <th className="border border-gray-300 p-3 text-left">Total</th>
//               <th className="border border-gray-300 p-3 text-left">Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Example Row */}
//             <tr>
//               <td className="border border-gray-300 p-3">Example Item</td>
//               <td className="border border-gray-300 p-3">$10</td>
//               <td className="border border-gray-300 p-3">
//                 <input
//                   type="number"
//                   defaultValue="1"
//                   className="w-16 border border-gray-300 rounded text-center"
//                 />
//               </td>
//               <td className="border border-gray-300 p-3">$10</td>
//               <td className="border border-gray-300 p-3">
//                 <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
//                   Remove
//                 </button>
//               </td>
//             </tr>

//             {/* Additional Rows */}
//             <tr>
//               <td className="border border-gray-300 p-3">Another Item</td>
//               <td className="border border-gray-300 p-3">$20</td>
//               <td className="border border-gray-300 p-3">
//                 <input
//                   type="number"
//                   defaultValue="2"
//                   className="w-16 border border-gray-300 rounded text-center"
//                 />
//               </td>
//               <td className="border border-gray-300 p-3">$40</td>
//               <td className="border border-gray-300 p-3">
//                 <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
//                   Remove
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AddCart;
// import React from "react";
// const AddCart = (props) => {
// // const {name} =props;
//   return (
    
//     <div className="container mx-auto p-4">
//       {/* Title */}
//       <h1 className="text-2xl font-bold text-center mb-6">Shopping Cart</h1>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-3 text-left">Item title</th>
//               <th className="border border-gray-300 p-3 text-left">Price</th>
//               <th className="border border-gray-300 p-3 text-left">Quantity</th>
//               <th className="border border-gray-300 p-3 text-left">Total</th>
//               <th className="border border-gray-300 p-3 text-left">Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Example Row */}
//             <tr>
//               <td className="border border-gray-300 p-3">{props.name}</td>
//               <td className="border border-gray-300 p-3">$10</td>
//               <td className="border border-gray-300 p-3">
//                 <input
//                   type="number"
//                   defaultValue="1"
//                   className="w-16 border border-gray-300 rounded text-center"
//                 />
//               </td>
//               <td className="border border-gray-300 p-3">$10</td>
//               <td className="border border-gray-300 p-3">
//                 <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
//                   Remove
//                 </button>
//               </td>
//             </tr>

//             {/* Additional Rows */}
//             <tr>
//               <td className="border border-gray-300 p-3">Another Item</td>
//               <td className="border border-gray-300 p-3">$20</td>
//               <td className="border border-gray-300 p-3">
//                 <input
//                   type="number"
//                   defaultValue="2"
//                   className="w-16 border border-gray-300 rounded text-center"
//                 />
//               </td>
//               <td className="border border-gray-300 p-3">$40</td>
//               <td className="border border-gray-300 p-3">
//                 <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
//                   Remove
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AddCart;
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const AddCart = () => {
//   const location = useLocation();
//   const [cart, setCart] = useState(location.state?.cart || []); // Retrieve cart items from state

//   // Handle quantity change
//   const handleQuantityChange = (index, quantity) => {
//     setCart((prevCart) => {
//       const updatedCart = [...prevCart];
//       updatedCart[index].quantity = quantity > 0 ? quantity : 1; // Ensure quantity is at least 1
//       return updatedCart;
//     });
//   };

//   // Calculate total price for an item
//   const calculateItemTotal = (item) => {
//     const price = parseFloat(item.Price.replace(/[^\d.-]/g, "")); // Convert price to number
//     return price * (item.quantity || 1);
//   };

//   // Remove item from cart
//   const handleRemove = (index) => {
//     setCart((prevCart) => prevCart.filter((_, i) => i !== index));
//   };

//   // Calculate total cart value
//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + calculateItemTotal(item), 0);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* Title */}
//       <h1 className="text-2xl font-bold text-center mb-6">Shopping Cart</h1>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         {cart.length === 0 ? (
//           <p className="text-center text-gray-600">Your cart is empty.</p>
//         ) : (
//           <table className="min-w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 p-3 text-left">Item Title</th>
//                 <th className="border border-gray-300 p-3 text-left">Price</th>
//                 <th className="border border-gray-300 p-3 text-left">Quantity</th>
//                 <th className="border border-gray-300 p-3 text-left">Total</th>
//                 <th className="border border-gray-300 p-3 text-left">Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item, index) => (
//                 <tr key={index}>
//                   <td className="border border-gray-300 p-3">{item.name}</td>
//                   <td className="border border-gray-300 p-3">{item.Price}</td>
//                   <td className="border border-gray-300 p-3">
//                     <input
//                       type="number"
//                       value={item.quantity || 1}
//                       onChange={(e) =>
//                         handleQuantityChange(index, parseInt(e.target.value, 10))
//                       }
//                       className="w-16 border border-gray-300 rounded text-center"
//                       min="1"
//                     />
//                   </td>
//                   <td className="border border-gray-300 p-3">
//                     {`$${calculateItemTotal(item).toFixed(2)}`}
//                   </td>
//                   <td className="border border-gray-300 p-3">
//                     <button
//                       className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
//                       onClick={() => handleRemove(index)}
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* Total Price */}
//       {cart.length > 0 && (
//         <div className="mt-6 text-right">
//           <h2 className="text-xl font-bold">Total: ${calculateTotal().toFixed(2)}</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddCart;
// import React from "react";
// import { useCart } from "./Context/CartContext"; // Import the Cart Context

// const AddCart = () => {
//   const { cartItems } = useCart(); // Access the cart items

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {cartItems.length > 0 ? (
//         cartItems.map((item, index) => (
//           <div key={index}>
//             <h3>{item.name}</h3>
//             <p>{item.role}</p>
//             <p>Price: {item.Price}</p>
//           </div>
//         ))
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default AddCart;
// import React from "react";
// import { useCart } from "./Context/CartContext";

// const AddCart = () => {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();

//   // Handle quantity changes
//   const handleQuantityChange = (item, delta) => {
//     const newQuantity = item.quantity + delta;
//     if (newQuantity > 0) {
//       updateQuantity(item.name, newQuantity);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//       {cartItems.length > 0 ? (
//         cartItems.map((item, index) => (
//           <div
//             key={index}
//             className="border p-4 mb-4 rounded-lg shadow-md flex justify-between items-center"
//           >
//             <div>
//               <h3 className="text-xl font-semibold">{item.name}</h3>
//               <p className="text-gray-600">{item.role}</p>
//               <p className="text-gray-800">Price per Item: {item.Price} PKR</p>
//               <p className="text-gray-800 font-semibold">
//                 Total: {item.Price * item.quantity} PKR
//               </p>
//               <div className="flex items-center mt-2">
//                 <button
//                   className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
//                   onClick={() => handleQuantityChange(item, -1)}
//                 >
//                   -
//                 </button>
//                 <span className="mx-4">{item.quantity}</span>
//                 <button
//                   className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
//                   onClick={() => handleQuantityChange(item, 1)}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <button
//               className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               onClick={() => removeFromCart(item.name)}
//             >
//               Delete
//             </button>
//           </div>
//         ))
//       ) : (
//         <p className="text-gray-600">Your cart is empty.</p>
//       )}
//       {cartItems.length > 0 && (
//         <div className="mt-4 text-right">
//           <button
//             className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
//             onClick={() => alert("Proceeding to checkout...")}
//           >
//             Checkout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddCart;
// import React from "react";
// import { useCart } from "./Context/CartContext";

// const AddCart = () => {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();

//   // Handle quantity changes
//   const handleQuantityChange = (item, delta) => {
//     const newQuantity = item.quantity + delta;
//     if (newQuantity > 0) {
//       updateQuantity(item.name, newQuantity);
//     }
//   };

//   // Calculate Grand Total
//   const calculateGrandTotal = () =>
//     cartItems.reduce((sum, item) => sum + item.Price * item.quantity, 0);

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
//                   Total: {item.Price * item.quantity} PKR
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
//               onClick={() => alert("Proceeding to checkout...")}
//             >
//               Checkout
//             </button>
//           </div>
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

const AddCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Handle quantity changes
  const handleQuantityChange = (item, delta) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity > 0) {
      updateQuantity(item.name, newQuantity);
    }
  };

  // Calculate Grand Total
  const calculateGrandTotal = () =>
    cartItems.reduce((sum, item) => sum + item.Price * item.quantity, 0);

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
                  Total: {item.Price * item.quantity} PKR
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
              onClick={() => alert("Proceeding to checkout...")}
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
