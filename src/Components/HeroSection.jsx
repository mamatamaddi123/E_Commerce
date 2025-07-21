import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Logo from '../assets/Img/carosual.jpg';
import Logo1 from '../assets/Img/carosual1.jpg';
import Logo2 from '../assets/Img/hair3.jpg'
import Logo3 from '../assets/Img/organicimage1.jpg';

const HeroSection = () => {
  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        className="h-full"
      >
        {/* Slide 1 */}
        <div className="relative">
          <img
            src={Logo}
            alt="Slide 1"
            className="h-[300px] md:h-[500px] object-cover w-full"
          />
          {/* <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-4 md:p-10 text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
              Fresh Organic Fruits
            </h2>
            <p className="text-sm md:text-base mb-2 md:mb-4">
              Get the best hand-picked fruits from local farms.
            </p>
            <button className="bg-green-600 px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-green-700 transition text-sm md:text-base">
              Buy Now
            </button>
          </div> */}
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src={Logo1}
            alt="Slide 2"
            className="h-[300px] md:h-[500px] object-cover w-full"
          />
          {/* <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-4 md:p-10 text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
              100% Natural Vegetables
            </h2>
            <p className="text-sm md:text-base mb-2 md:mb-4">
              Healthy, fresh, and pesticide-free.
            </p>
            <button className="bg-green-600 px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-green-700 transition text-sm md:text-base">
              Buy Now
            </button>
          </div> */}
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src={Logo2}
            alt="Slide 3"
            className="h-[300px] md:h-[500px] object-cover w-full"
          />
          {/* <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-4 md:p-10 text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
              Grains & Superfoods
            </h2>
            <p className="text-sm md:text-base mb-2 md:mb-4">
              Power-packed goodness in every bite.
            </p>
            <button className="bg-green-600 px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-green-700 transition text-sm md:text-base">
              Buy Now
            </button>
          </div> */}
        </div>
           <div className="relative">
          <img
            src={Logo3}
            alt="Slide 4"
            className="h-[300px] md:h-[500px] object-cover w-full"
          />
          {/* <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-4 md:p-10 text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
              Grains & Superfoods
            </h2>
            <p className="text-sm md:text-base mb-2 md:mb-4">
              Power-packed goodness in every bite.
            </p>
            <button className="bg-green-600 px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-green-700 transition text-sm md:text-base">
              Buy Now
            </button>
          </div> */}
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
