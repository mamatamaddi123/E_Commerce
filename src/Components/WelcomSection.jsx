import React from "react";

const WelcomeSection = () => {
  return (
    <section className="px-4 py-16 bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column (Top & Bottom stacked banners) */}
        <div className="flex flex-col gap-8">
          {/* Top Banner with Background Image */}
          <div className="group relative h-72 md:h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800')] bg-cover bg-center opacity-30"></div>
            <div className="relative z-10 h-full flex flex-col justify-center px-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <span className="inline-block px-3 py-1 bg-emerald-400 text-white text-xs font-bold rounded-full mb-3 animate-pulse">
                  LIMITED TIME
                </span>
                <h3 className="text-white text-lg md:text-xl font-light mb-1 tracking-wide">
                  Big Organic Sale
                </h3>
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                  Up to 50% Off
                </h2>
                <button className="group/btn bg-white text-emerald-600 px-6 py-3 rounded-full font-bold text-sm hover:bg-emerald-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  SHOP NOW 
                  <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Banner with Background Image */}
          <div className="group relative h-72 md:h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-600"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800')] bg-cover bg-center opacity-25"></div>
            <div className="relative z-10 h-full flex flex-col justify-center px-8">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <span className="inline-block px-3 py-1 bg-green-400 text-white text-xs font-bold rounded-full mb-3">
                  ✓ CERTIFIED
                </span>
                <h3 className="text-white text-lg italic mb-2 font-light tracking-wide">
                  100% Natural
                </h3>
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                  Humectants for Skin
                </h2>
                <button className="group/btn bg-white text-green-700 px-6 py-3 rounded-full font-bold text-sm hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  DISCOVER MORE 
                  <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Banner with Face */}
        <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/30 z-10"></div>
          <div className="h-full min-h-[32rem] bg-[url('https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800')] bg-cover bg-center"></div>
          
          <div className="absolute top-1/3 left-8 z-20 max-w-sm">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wider">
                  Premium Care
                </span>
              </div>
              
              <h3 className="text-emerald-800 text-xl font-light mb-1">
                Beautiful, Fresh
              </h3>
              <h2 className="text-emerald-900 text-3xl md:text-4xl font-bold mb-3 leading-tight">
                Skin Forever
              </h2>
              <p className="text-emerald-700 text-sm mb-6 leading-relaxed">
                Advanced moisturizing & anti-aging formulas with natural botanicals
              </p>
              
              <button className="group/btn w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                EXPLORE COLLECTION
                <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
          
          {/* Floating elements for visual interest */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-400/30 rounded-full backdrop-blur-sm animate-bounce delay-100"></div>
          <div className="absolute bottom-8 right-12 w-8 h-8 bg-green-300/40 rounded-full backdrop-blur-sm animate-bounce delay-300"></div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-300/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default WelcomeSection;