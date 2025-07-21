import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from '../assets/categories/product3.jpg';
import img2 from '../assets/categories/shower gel.jpg';
import img3 from '../assets/categories/conditoner.jpg';
import img4 from '../assets/categories/facewash.jpg';


// Mock images for demonstration
// const img1 = '../assets/categories/product3.jpg';
// const img2 = "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=400&fit=crop";
// const img3 = "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=400&fit=crop";

const categories = [
  {
    id: 1,
    title: "Shampoo",
    image: img1,
    route: "organic-products",
    description: "Pure & Natural",
  },
  {
    id: 2,
    title: " Aqua Refresh Shower Gel",
    image: img2,
    route: "Organic Products",
    description: "Pure & Natural",
  },
  // {
  //   id: 3,
  //   title: "Vitamin c Fairness Cream",
  //   image: img1,
  //   route: "Organic Products",
  //   description: "Pure & Natural",
  // },
  {
    id: 4,
    title: "Shampoo & Conditioner",
    image: img3,
    route: "Organic Products",
    description: "Pure & Natural",
  },

  {
    id: 5,
    title: "Alovera Face Wash",
    image: img4,
    route: "Organic Products",
    description: "Pure & Natural",
  },
  

];

const Categories = () => {
  const navigate = useNavigate();


  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
          Explore Organic Categories
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-4 rounded-full"></div>
        {/* <p className="text-green-700 text-lg sm:text-xl max-w-2xl mx-auto">
          Discover our premium collection of organic products, carefully curated for your healthy lifestyle
        </p> */}
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => navigate(`/category/${category.route}`)}
              
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInUp 0.8s ease-out forwards"
              }}
            >
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                {/* Image Container */}
                <div className="relative overflow-hidden p-5">
                  <img
                    src={category.image}
                    alt={category.title}
              onClick={() => navigate(`/category/${category.route}`)}

                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transform transition-transform duration-700 group-hover:scale-110 "
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {category.description}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  {/* Action Button */}
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-green-600 font-medium">Explore Now</span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-2 text-green-700">
          <span className="text-lg font-medium">Want to see more?</span>
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center animate-pulse">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Categories;