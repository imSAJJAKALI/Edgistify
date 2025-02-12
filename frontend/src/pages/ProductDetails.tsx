import React, { useState } from "react";


const ProductDetails: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="w-full">
          <img
            src={"imageUrl"}
            alt={"name"}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{"name"}</h1>
          <p className="text-lg text-gray-600">{"description"}</p>
          <p className="text-2xl font-semibold text-blue-600">
            {/* ${"price".toFixed(2)} */}20
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 bg-gray-200 rounded-lg text-lg font-semibold hover:bg-gray-300 transition"
            >
              -
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 bg-gray-200 rounded-lg text-lg font-semibold hover:bg-gray-300 transition"
            >
              +
            </button>
          </div>

          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
