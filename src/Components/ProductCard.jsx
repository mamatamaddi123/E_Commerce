import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white  rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300">
      <img src={product.image} alt={product.name} className="w-full h-[220px] mb-4" />
      <h3 className="text-lg font-semibold text-center">{product.name}</h3>
      <p className="text-green-700 font-bold text-center">₹{product.price}</p>
      <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition center">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
