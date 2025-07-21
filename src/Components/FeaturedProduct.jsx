import React from "react"
import coconut from "../assets/featuredimg/product4.jpg"
import shampoo from "../assets/Haircare/shampoo.jpg";
import radiant from "../assets/featuredimg/product1.jpg"
import hairoil from "../assets/featuredimg/hairoil.jpg";
import facewash from '../assets/featuredimg/facewash.jpg';
import drandruff from "../assets/featuredimg/product5.jpg"
import ProductCard from "./ProductCard";

const products = [
  { id:1, name: "Coconut Gel", price: 120, image: coconut, category: "Skincare", rating: 4.8, discount: 15 },
  { id:2, name: "shampoo", price: 80, image: shampoo, category: "haircare", rating: 4.9, discount: 10 },
  { id:3, name: "Radiant Cream", price: 350, image: radiant, category: "Skincare", rating: 4.7, discount: 20 },
  { id:4, name: "hairoil", price: 250, image: hairoil, category: "hairoil", rating: 4.6, discount: 8 },
  { id:5, name: "facewash", price: 350, image: facewash, category: "facewash", rating: 4.8, discount: 12 },
  { id:6, name: "Drandruff", price: 250, image: drandruff, category: "Healthcare", rating: 4.5, discount: 18 },
];

const FeaturedProduct = () => {
  return (
    <>
      <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 overflow-hidden " style={{marginTop: "-100px"}}>
        {/* Advanced Background Design */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-green-400/20 to-lime-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-cyan-400/15 to-emerald-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Geometric Patterns */}
          <div className="absolute top-10 left-10 w-32 h-32 border border-emerald-200/30 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-teal-200/30 rounded-full animate-spin-slow delay-1000"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Premium Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-2xl animate-bounce">
                <span className="text-4xl text-white filter drop-shadow-lg">🌿</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-4xl lg:text-4xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Premium
              </span>
              <span className="block bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
                Organic
              </span>
              <span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Collection
              </span>
            </h1>
            
            <div className="max-w-3xl mx-auto mb-8">
              {/* <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-medium">
                Discover our curated selection of premium organic products, 
                thoughtfully sourced and sustainably crafted for your wellness journey
              </p> */}
            </div>
            
            {/* Decorative Elements */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-emerald-400"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-teal-400 to-transparent"></div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                <div className="text-sm text-slate-600 font-medium">Organic</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                <div className="text-sm text-slate-600 font-medium">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">50k+</div>
                <div className="text-sm text-slate-600 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4.8★</div>
                <div className="text-sm text-slate-600 font-medium">Rating</div>
              </div>
            </div>
          </div>

          {/* Advanced Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="group relative"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: 'slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                }}
              >
                {/* Product Card Container */}
                <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-white/20">
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                      -{product.discount}%
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500/90 to-teal-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {product.category}
                  </div>

                  {/* Product Image */}
                  <div className="relative mb-4 overflow-hidden rounded-2xl">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-slate-600 font-medium">({product.rating})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-slate-800">
                        ₹{product.price}
                      </div>
                      {product.discount && (
                        <div className="text-sm text-slate-500 line-through">
                          ₹{Math.round(product.price * (1 + product.discount / 100))}
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProduct;
