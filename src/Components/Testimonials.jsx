import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ananya Sharma",
    image: "/images/user1.jpg",
    feedback:
      "I’ve struggled with frizzy hair for years, but after using the herbal shampoo and oil, my hair feels softer, healthier, and shinier!",
  },
  {
    name: "Ravi Verma",
    image: "/images/user2.jpg",
    feedback:
      "The hair serum worked like magic! No more split ends. Totally in love with this organic brand.",
  },
  {
    name: "Meena Joshi",
    image: "/images/user3.jpg",
    feedback:
      "What I love most is that there are no harsh chemicals. Just pure nature — and my hair thanks me for it!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-green-50 py-16 px-4 md:px-20" id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
        What Our Customers Say
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 text-center flex flex-col items-center"
          >
            <FaQuoteLeft className="text-green-500 text-3xl mb-4" />
            <p className="text-gray-700 mb-4 italic">"{t.feedback}"</p>
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-green-400 mb-2"
            />
            <h4 className="text-lg font-semibold text-green-700">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
