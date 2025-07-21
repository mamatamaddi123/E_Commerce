import React, { useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "Organic Hair Shampoo",
    image: "/images/shampoo.jpg",
    price: 499,
    quantity: 1,
  },
  {
    id: 2,
    name: "Natural Hair Conditioner",
    image: "/images/conditioner.jpg",
    price: 449,
    quantity: 2,
  },
  {
    id: 3,
    name: "Herbal Face Wash",
    image: "/images/facewash.jpg",
    price: 299,
    quantity: 1,
  },
  {
    id: 4,
    name: "Botanical Face Serum",
    image: "/images/serum.jpg",
    price: 699,
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = +(subtotal * 0.05).toFixed(2);

  // Coupon state and discount calculation
  const [couponCode, setCouponCode] = React.useState("");
  const [discount, setDiscount] = React.useState(0);
  const [couponMessage, setCouponMessage] = React.useState("");

  const applyCoupon = () => {
    // Example: valid coupon "ORGANIC10" gives 10% discount
    if (couponCode.trim().toUpperCase() === "ORGANIC10") {
      const discountAmount = +(subtotal * 0.1).toFixed(2);
      setDiscount(discountAmount);
      setCouponMessage("Coupon applied! 10% discount.");
    } else {
      setDiscount(0);
      setCouponMessage("Invalid coupon code.");
    }
  };

  const total = subtotal + tax - discount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
            Your Cart
          </h1>
          <p className="text-gray-600 text-lg">Complete your organic beauty routine</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Cart Items */}
          <div className="xl:col-span-3 space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-green-100 p-6 hover:shadow-xl hover:border-green-200 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28 object-cover rounded-2xl shadow-md bg-gradient-to-br from-green-100 to-emerald-100 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                      <span className="text-green-600 font-semibold text-lg">₹{item.price}</span>
                      <span className="text-gray-500 text-sm">per item</span>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      <div className="flex items-center bg-green-100 rounded-full p-2 border border-green-200">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                          className="w-10 h-10 flex items-center justify-center text-green-700 hover:text-green-900 hover:bg-green-200 rounded-full transition-all duration-200 font-bold text-lg"
                        >
                          −
                        </button>
                        <span className="w-16 text-center font-bold text-green-800 text-lg">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                          className="w-10 h-10 flex items-center justify-center text-green-700 hover:text-green-900 hover:bg-green-200 rounded-full transition-all duration-200 font-bold text-lg"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="px-4 py-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-200 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-700">
                      ₹{item.price * item.quantity}
                    </p>
                    <p className="text-gray-500 text-sm">Total</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="xl:col-span-1 space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-green-100 p-8 sticky top-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-green-800 mb-2">Order Summary</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-green-100">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-800">₹{subtotal}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-green-100">
                  <span className="text-gray-600">Tax (5%)</span>
                  <span className="font-semibold text-gray-800">₹{tax}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between items-center py-2 border-b border-green-100">
                    <span className="text-green-600 font-semibold">Discount</span>
                    <span className="font-semibold text-green-600">-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3 bg-green-50 rounded-2xl px-4">
                  <span className="text-lg font-bold text-green-800">Total</span>
                  <span className="text-2xl font-bold text-green-700">₹{total}</span>
                </div>
              </div>

              {/* Coupon Section */}
              <div className="mb-6">
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-4">
                  <h3 className="font-semibold text-green-800 mb-3">Have a coupon?</h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                    <button
                      onClick={applyCoupon}
                      className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Apply Coupon
                    </button>
                    {couponMessage && (
                      <p className={`text-sm font-medium ${discount > 0 ? "text-green-600" : "text-red-500"}`}>
                        {couponMessage}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Fast Delivery</p>
                    <p className="text-green-700 text-sm">3-5 business days</p>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-4 rounded-2xl hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;