// import React, { useState } from "react";
// import { useCart } from "./Context/CartContext"; // Import Cart Context
// import { useNavigate } from "react-router-dom";
// import Contactt from "./Contactt"; // Import Contactt component
// import image from "./Images/loginback.jpg"; // Import Background Image

// const PaymentPage = () => {
//   const { cartItems } = useCart(); // Get cart items from context
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const navigate = useNavigate();

//   // Calculate Grand Total
//   const calculateGrandTotal = () =>
//     cartItems.reduce((sum, item) => sum + parseFloat(item.Price) * item.quantity, 0);

//   // Handle Payment Process
//   const handlePayment = () => {
//     if (!paymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }
//     alert(`Payment successful via ${paymentMethod}!`);
//     navigate("/success"); // Redirect to success page after payment
//   };

//   return (
//     <div
//       className="flex flex-col min-h-screen"
//       style={{
//         backgroundImage: `url(${image})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container mx-auto p-6">
//         <h2 className="text-2xl font-bold mb-6 text-center text-white">Payment Page</h2>

//         {/* Cart Items List */}
//         <div className="bg-white shadow-md p-4 rounded-lg">
//           <h3 className="text-lg font-semibold mb-2">Your Items</h3>
//           {cartItems.length === 0 ? (
//             <p className="text-gray-600">Your cart is empty.</p>
//           ) : (
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.name} className="border-b py-2 flex justify-between">
//                   <span>{item.name} (x{item.quantity})</span>
//                   <span>{parseFloat(item.Price) * item.quantity} PKR</span>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <p className="font-bold mt-4">Total: {calculateGrandTotal()} PKR</p>
//         </div>

//         {/* Payment Method Selection */}
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2 text-white">Select Payment Method</h3>
//           <label className="block mb-2 text-white">
//             <input
//               type="radio"
//               name="payment"
//               value="Credit Card"
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             />{" "}
//             Credit Card
//           </label>
//           <label className="block mb-2 text-white">
//             <input
//               type="radio"
//               name="payment"
//               value="PayPal"
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             />{" "}
//             PayPal
//           </label>
//           <label className="block text-white">
//             <input
//               type="radio"
//               name="payment"
//               value="Cash on Delivery"
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             />{" "}
//             Cash on Delivery
//           </label>
//         </div>

//         {/* Contactt Form for User Details */}
//         <div className="mt-10">
//           <h3 className="text-lg font-semibold text-center text-white mb-4">Enter Your Details</h3>
//           <Contactt />
//         </div>

//         {/* Pay Now Button */}
//         <button
//           onClick={handlePayment}
//           className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full"
//         >
//           Pay Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;
import React, { useState } from "react";
import { useCart } from "./Context/CartContext"; // Import Cart Context
import { useNavigate } from "react-router-dom";
import Contactt from "./Contactt"; // Import Contactt component
import image from "./Images/loginback.jpg"; // Import Background Image
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Load Stripe.js
const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX"); // Replace with your Stripe Publishable Key

// Stripe Payment Form Component
const StripePaymentForm = ({ handlePaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      // Call your backend to create a Payment Intent
      const response = await fetch("http://localhost:5000/api/auth/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1000 }), // Replace with your total amount
      });

      if (!response.ok) {
        throw new Error("Failed to create payment intent");
      }

      const { clientSecret } = await response.json();

      // Confirm the payment on the client side
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (stripeError) {
        setError(stripeError.message);
      } else if (paymentIntent.status === "succeeded") {
        handlePaymentSuccess();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <CardElement className="p-2 border rounded" />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
      >
        {loading ? "Processing..." : "Pay with Stripe"}
      </button>
    </form>
  );
};

const PaymentPage = () => {
  const { cartItems } = useCart(); // Get cart items from context
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  // Calculate Grand Total
  const calculateGrandTotal = () =>
    cartItems.reduce((sum, item) => sum + parseFloat(item.Price) * item.quantity, 0);

  // Handle Payment Process
  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (paymentMethod === "Cash on Delivery") {
      alert("Order placed successfully! Payment will be collected on delivery.");
      navigate("/success");
    }
  };

  // Handle Stripe Payment Success
  const handleStripePaymentSuccess = () => {
    alert("Payment successful via Stripe!");
    navigate("/success");
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Payment Page</h2>

        {/* Cart Items List */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Your Items</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.name} className="border-b py-2 flex justify-between">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>{parseFloat(item.Price) * item.quantity} PKR</span>
                </li>
              ))}
            </ul>
          )}
          <p className="font-bold mt-4">Total: {calculateGrandTotal()} PKR</p>
        </div>

        {/* Payment Method Selection */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-white">Select Payment Method</h3>
          <label className="block mb-2 text-white">
            <input
              type="radio"
              name="payment"
              value="Stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Stripe
          </label>
          <label className="block text-white">
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Cash on Delivery
          </label>
        </div>

        {/* Stripe Payment Form */}
        {paymentMethod === "Stripe" && (
          <Elements stripe={stripePromise}>
            <StripePaymentForm handlePaymentSuccess={handleStripePaymentSuccess} />
          </Elements>
        )}

        {/* Contactt Form for User Details */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-center text-white mb-4">Enter Your Details</h3>
          <Contactt />
        </div>

        {/* Pay Now Button for Cash on Delivery */}
        {paymentMethod === "Cash on Delivery" && (
          <button
            onClick={handlePayment}
            className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full"
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;