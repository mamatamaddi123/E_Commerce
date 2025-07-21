import React from "react";
import aquaImg from "../assets/showergel/aqua.png";
import coconutImg from "../assets/showergel/coconut.jpg";
import creamImg from "../assets/showergel/cream.png";

const showerGelItems = [
  {
    id: 1,
    name: "Aqua Refresh Shower Gel",
    price: "₹199",
    image: aquaImg,
    description: "Gives you a refreshing aqua splash feel with every wash.",
  },
  {
    id: 2,
    name: "Coconut Milk Shower Gel",
    price: "₹229",
    image: coconutImg,
    description: "Infused with coconut milk for deep nourishment and softness.",
  },
  {
    id: 3,
    name: "Cream Care Shower Gel",
    price: "₹249",
    image: creamImg,
    description: "Gentle creamy texture with moisturizing ingredients.",
  },
];

const ShowerGel = () => {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-green-50 to-green-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Shower Gel Products
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-4"></div>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Luxurious shower gels crafted with natural ingredients for your daily care
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showerGelItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-green-100 hover:border-green-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-green-900 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3 group-hover:text-green-600 transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-green-600 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Buy Now Button */}
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Buy Now</span>
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5L17 18" 
                      />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-green-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-green-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Why Choose Our Shower Gels?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-green-700">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-semibold">Natural Ingredients</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="font-semibold">Skin Friendly</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-semibold">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowerGel;