import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto flex justify-between lg:flex-row items-center px-4">
          {/* Hero Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Discover the Best Deals Online
            </h1>
            <p className="text-lg mb-6">
              Shop from a wide range of products with unbeatable discounts and fast delivery. Your one-stop e-commerce destination.
            </p>
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>
          {/* Hero Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://via.placeholder.com/600x400"
              alt="E-commerce Hero"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Category 1"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Electronics</h3>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Explore
              </button>
            </div>
            {/* Category 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Category 2"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Fashion</h3>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Explore
              </button>
            </div>
            {/* Category 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Category 3"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Home Appliances</h3>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Product Card */}
            {[1, 2, 3, 4].map((product) => (
              <div
                key={product}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src="https://via.placeholder.com/200x200"
                  alt={`Product ${product}`}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Product {product}</h3>
                <p className="text-lg font-bold text-blue-600 mb-2">$99.99</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Limited Time Offer!</h2>
          <p className="text-lg mb-8">
            Get up to 50% off on select items. Don't miss out on these exclusive
            deals.
          </p>
          <button className="px-8 py-3 bg-blue-600 font-semibold rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Sign Up for Exclusive Offers</h2>
          <p className="text-lg mb-8">
            Join our newsletter to stay updated on the latest deals and offers.
          </p>
          <button className="px-8 py-3 bg-blue-600 font-semibold rounded-lg hover:bg-blue-700 transition">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
