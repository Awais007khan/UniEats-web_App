import React from "react";

const AddCart = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-6">Shopping Cart</h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-3 text-left">Item Title</th>
              <th className="border border-gray-300 p-3 text-left">Price</th>
              <th className="border border-gray-300 p-3 text-left">Quantity</th>
              <th className="border border-gray-300 p-3 text-left">Total</th>
              <th className="border border-gray-300 p-3 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr>
              <td className="border border-gray-300 p-3">Example Item</td>
              <td className="border border-gray-300 p-3">$10</td>
              <td className="border border-gray-300 p-3">
                <input
                  type="number"
                  defaultValue="1"
                  className="w-16 border border-gray-300 rounded text-center"
                />
              </td>
              <td className="border border-gray-300 p-3">$10</td>
              <td className="border border-gray-300 p-3">
                <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
                  Remove
                </button>
              </td>
            </tr>

            {/* Additional Rows */}
            <tr>
              <td className="border border-gray-300 p-3">Another Item</td>
              <td className="border border-gray-300 p-3">$20</td>
              <td className="border border-gray-300 p-3">
                <input
                  type="number"
                  defaultValue="2"
                  className="w-16 border border-gray-300 rounded text-center"
                />
              </td>
              <td className="border border-gray-300 p-3">$40</td>
              <td className="border border-gray-300 p-3">
                <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCart;
