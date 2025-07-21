import React from "react";
import { FaLeaf, FaHeart, FaShieldAlt, FaSeedling } from "react-icons/fa";

const Choose = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-20 px-6 md:px-20 overflow-hidden" style={{ marginTop: "-100px" }}>

      {/* Floating Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-green-400/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-16 right-10 w-52 h-52 bg-emerald-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-teal-400/20 rounded-full blur-2xl"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 bg-green-100 px-5 py-2 rounded-full shadow-sm mb-5">
          <FaLeaf className="text-green-600 text-base" />
          <span className="text-green-800 font-semibold text-sm tracking-wide">100% Natural & Organic</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
          WHY CHOOSE US
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-light">
          Experience the power of nature with our premium organic hair and skincare collection — lovingly crafted using only the finest botanicals.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Product Grid Box */}
        <div className="relative w-full mx-auto">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-green-100 hover:scale-[1.02] transition-transform duration-500 ease-in-out">
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <FaLeaf />, title: "Organic Shampoo", desc: "Gentle cleansing", colors: "from-green-400 to-emerald-500", iconColor: "text-green-500" },
                { icon: <FaHeart />, title: "Hair Conditioner", desc: "Deep nourishment", colors: "from-teal-400 to-cyan-500", iconColor: "text-teal-500" },
                { icon: <FaSeedling />, title: "Face Wash", desc: "Pure cleansing", colors: "from-emerald-400 to-green-500", iconColor: "text-emerald-500" },
                { icon: <FaShieldAlt />, title: "Face Serum", desc: "Anti-aging care", colors: "from-lime-400 to-green-500", iconColor: "text-lime-500" },
              ].map(({ icon, title, desc, colors, iconColor }, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${colors} rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-md`}
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                    <div className={`text-xl ${iconColor}`}>{icon}</div>
                  </div>
                  <h4 className="font-semibold text-base mb-1">{title}</h4>
                  <p className="text-xs opacity-90">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="space-y-8">
          {[
            {
              icon: <FaLeaf />,
              title: "100% NATURAL INGREDIENTS",
              text: "Crafted with certified organic botanicals. No chemicals — just nature’s care.",
              colors: "from-green-400 to-emerald-500",
            },
            {
              icon: <FaShieldAlt />,
              title: "DERMATOLOGICALLY TESTED",
              text: "Safe for all skin types. Clinically tested for purity and performance.",
              colors: "from-teal-400 to-cyan-500",
            },
            {
              icon: <FaSeedling />,
              title: "SUSTAINABLE & ECO-FRIENDLY",
              text: "Biodegradable, cruelty-free, and mindful of our planet.",
              colors: "from-emerald-400 to-green-500",
            },
            {
              icon: <FaHeart />,
              title: "VISIBLE RESULTS",
              text: "Glowing skin and stronger hair in just weeks. Loved by thousands!",
              colors: "from-lime-400 to-green-500",
            },
          ].map(({ icon, title, text, colors }, i) => (
            <div
              key={i}
              className="group flex items-start gap-5 p-6 bg-white/90 border border-green-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${colors} rounded-2xl p-4 transition-transform duration-300 group-hover:scale-110`}>
                <div className="text-white text-2xl">{icon}</div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      {/* <div className="text-center mt-20 z-10 relative">
        <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300 hover:brightness-105">
          <FaLeaf className="text-sm" />
          Discover Our Collection
        </button>
      </div> */}
    </section>
  );
};

export default Choose;
