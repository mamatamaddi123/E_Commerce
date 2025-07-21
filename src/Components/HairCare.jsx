import React from "react";
import hairOilImg from "../assets/Haircare/hairoil.png";
import shampooImg from "../assets/Haircare/shampoo.jpg";
import conditionerImg from "../assets/Haircare/conditioner.png";
import gelImg from "../assets/Haircare/Gel.jpg";
import { Link } from "react-router-dom";

const hairCareItems = [
  {
    id: 1,
    name: "Shower Gel",
    price: "₹199",
    image: gelImg,
    description: "Refreshing and natural shower gel for everyday use",
  },
  {
    id: 2,
    name: "Shampoos",
    price: "₹249",
    image: shampooImg,
    description: "Organic shampoo that strengthens your hair",
  },
  {
    id: 3,
    name: "Conditioners",
    price: "₹229",
    image: conditionerImg,
    description: "Smooth and nourish your hair naturally",
  },
  {
    id: 4,
    name: "Hair Oil",
    price: "₹179",
    image: hairOilImg,
    description: "Cold-pressed organic oil for shiny hair",
  },

   {
    id: 5,
    name: "facewash",
    price: "₹179",
    image: hairOilImg,
    description: "Cold-pressed organic oil for shiny hair",
  },
];

const HairCare = () => {
  return (
    <section className="px-6 py-12 bg-green-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
        Organic Hair Care Products
        
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {hairCareItems.map((item) => (
  <Link to={`/haircare/${item.id}`} key={item.id}>
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-green-100">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover mb-3 rounded-lg"
      />
      <h3 className="text-lg font-semibold text-green-800 mb-2">
        {item.name}
      </h3>
      <p className="text-sm text-green-600 mb-2">{item.description}</p>
      <p className="text-green-700 font-bold text-lg">{item.price}</p>
      <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition center">
        ShopNow
      </button>
    </div>
  </Link>
))}
      </div>
    </section>
  );
};

export default HairCare;