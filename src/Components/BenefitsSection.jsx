import React from 'react';
import { FaHeadset, FaShippingFast, FaUndoAlt, FaShieldAlt } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaHeadset size={40} />,
    title: '24/7 FRIENDLY SUPPORT',
    description: 'Our support team is always ready for you 7 days a week.',
  },
  {
    icon: <FaShippingFast size={40} />,
    title: 'FREE SHIPPING',
    description: 'Free worldwide shipping on all orders over $100.',
  },
  {
    icon: <FaUndoAlt size={40} />,
    title: '7 DAYS EASY RETURN',
    description: 'Return products within 7 days for a hassle-free exchange.',
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: 'QUALITY GUARANTEED',
    description: "If your product isn't perfect, return it for a full refund.",
  },
];

const BenefitsSection = () => {
  return (
    <div className="bg-gradient-to-br from-lime-100 via-white to-green-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="group bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl p-8 text-center transition-all duration-300 hover:scale-105 hover:border-green-300 hover:shadow-2xl"
          >
            <div className="text-green-700 flex justify-center mb-4 transition-transform duration-300 group-hover:animate-bounce">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-wide transition-colors duration-300 group-hover:text-green-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
