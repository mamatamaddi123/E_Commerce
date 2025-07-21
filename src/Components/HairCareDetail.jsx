import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hairOilImg from "../assets/Haircare/hairoil.png";
import shampooImg from "../assets/Haircare/shampoo.jpg";
import conditionerImg from "../assets/Haircare/conditioner.png";
import gelImg from "../assets/Haircare/Gel.jpg";
import { FaHeart, FaArrowLeft, FaStar, FaRegStar } from "react-icons/fa";

const hairCareItems = [
  {
    id: 1,
    name: "Shower Gel",
    price: 199,
    images: [gelImg, shampooImg, conditionerImg],
    description: "Refreshing and natural shower gel for everyday useExperience the refreshing power of nature with Aqua Refresh Shower Gel, featuring lemon and blueberry extracts. Cleanses and moisturizes skin, boosting circulation and immunity. Leaves skin feeling soft, smooth, revitalized, and wonderfully refreshed every time.",
    benefits: [
      "Cleanses skin gently",
      "Free from parabens and sulfates",
      "Infused with essential oils",
    ],
    rating: 4,
    stock: 12,
    variants: {
      size: ["Small", "Medium", "Large"],
      color: ["Blue", "Green", "Yellow"],
    },
    specs: [
      "Net weight: 250ml",
      "Shelf life: 2 years",
      "Ingredients: Natural extracts",
    ],
    reviews: [
      {
        user: "Alice",
        rating: 5,
        comment: "Great product! Highly recommend.",
      },
      {
        user: "Bob",
        rating: 4,
        comment: "Good quality but a bit pricey.",
      },
    ],
  },
  {
    id: 2,
    name: "Shampoos",
    price: 249,
    images: [shampooImg, conditionerImg, hairOilImg],
    description: "Nourish your skin with Coconut Milk Shower Gel, infused with coconut oil and natural antioxidants. Leaves skin feeling soft, smooth, and nourished. Ideal for all skin types.",
    benefits: [
      "Promotes hair growth",
      "Reduces dandruff and itchiness",
      "No harsh chemicals",
    ],
    rating: 5,
    stock: 0,
    variants: {
      size: ["250ml", "500ml"],
      color: ["Red", "Orange"],
    },
    specs: [
      "Net weight: 500ml",
      "Shelf life: 1.5 years",
      "Ingredients: Herbal extracts",
    ],
    reviews: [
      {
        user: "Charlie",
        rating: 5,
        comment: "My hair feels so much healthier!",
      },
      {
        user: "Dana",
        rating: 3,
        comment: "Average product, expected more.",
      },
    ],
  },
  {
    id: 3,
    name: "Conditioners",
    price: 229,
    images: [conditionerImg, gelImg, hairOilImg],
    description: "Enrich your shower routine with Cream Care Shower Gel, blending rich moisturizers and nourishing ingredients. Gently cleanses and hydrates dry skin, leaving it feeling soft, silky, and rejuvenated. Perfect for daily use, providing long-lasting comfort and protection.",
    benefits: [
      "Deep hydration",
      "Softens and detangles hair",
      "Safe for all hair types",
    ],
    rating: 4,
    stock: 5,
    variants: {
      size: ["100ml", "200ml", "300ml"],
      color: ["Pink", "Purple"],
    },
    specs: [
      "Net weight: 300ml",
      "Shelf life: 2 years",
      "Ingredients: Organic oils",
    ],
    reviews: [
      {
        user: "Eve",
        rating: 4,
        comment: "Leaves my hair soft and shiny.",
      },
      {
        user: "Frank",
        rating: 4,
        comment: "Good conditioner for daily use.",
      },
    ],
  },
  {
    id: 4,
    name: "Hair Oil",
    price: 179,
    images: [hairOilImg, gelImg, shampooImg],
    description: "Cold-pressed organic oil for shiny hair",
    benefits: [
      "Improves scalp health",
      "Adds natural shine",
      "Reduces hair fall",
    ],
    rating: 3,
    stock: 20,
    variants: {
      size: ["50ml", "100ml"],
      color: ["Brown", "Amber"],
    },
    specs: [
      "Net weight: 100ml",
      "Shelf life: 3 years",
      "Ingredients: Cold-pressed oils",
    ],
    reviews: [
      {
        user: "Grace",
        rating: 3,
        comment: "Good oil but a bit greasy.",
      },
      {
        user: "Hank",
        rating: 5,
        comment: "My hair has never been better!",
      },
    ],
  },
  {
    id: 5,
    name: "facewash",
    price: 179,
    images: [hairOilImg, gelImg, shampooImg],
    description: "Cold-pressed organic oil for shiny hair",
    benefits: [
      "Improves scalp health",
      "Adds natural shine",
      "Reduces hair fall",
    ],
    rating: 3,
    stock: 20,
    variants: {
      size: ["50ml", "100ml"],
      color: ["Brown", "Amber"],
    },
    specs: [
      "Net weight: 100ml",
      "Shelf life: 3 years",
      "Ingredients: Cold-pressed oils",
    ],
    reviews: [
      {
        user: "Grace",
        rating: 3,
        comment: "Good oil but a bit greasy.",
      },
      {
        user: "Hank",
        rating: 5,
        comment: "My hair has never been better!",
      },
    ],
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i <= rating ? (
        <FaStar key={i} className="text-yellow-400" />
      ) : (
        <FaRegStar key={i} className="text-yellow-400" />
      )
    );
  }
  return <div className="flex">{stars}</div>;
};

const HairCareDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = hairCareItems.find((item) => item.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(
    product?.variants.size[0] || ""
  );
  const [selectedColor, setSelectedColor] = useState(
    product?.variants.color[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) return <div>Product not found.</div>;

  const relatedProducts = hairCareItems.filter((item) => item.id !== product.id);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => {
      const newQuantity = prev + delta;
      if (newQuantity < 1) return 1;
      if (newQuantity > product.stock) return product.stock;
      return newQuantity;
    });
  };

  return (
    <section className="min-h-screen bg-green-50 py-12 px-4 md:px-20">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-green-700 hover:underline"
      >
        <FaArrowLeft className="mr-2" /> Back to Haircare
      </button>

      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-xl">
        <div>
          <Carousel showThumbs={true} showStatus={false} infiniteLoop>
            {product.images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`${product.name} image ${index + 1}`}
                  className="rounded-xl max-h-[300px] object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            {product.name}
          </h2>

          <div className="flex items-center mb-2">
            <StarRating rating={product.rating} />
            <span className="ml-2 text-green-700 font-semibold">
              {product.rating}.0
            </span>
          </div>

          <p className="text-lg text-green-600 mb-2">{product.price} ₹</p>

          <p
            className={`mb-4 font-semibold ${
              product.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <div className="mb-4">
            <label className="block font-semibold text-green-800 mb-1">
              Size:
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="border border-green-300 rounded px-3 py-2 w-full"
            >
              {product.variants.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-green-800 mb-1">
              Color:
            </label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="border border-green-300 rounded px-3 py-2 w-full"
            >
              {product.variants.color.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 flex items-center gap-4">
            <label className="font-semibold text-green-800">Quantity:</label>
            <div className="flex items-center border border-green-300 rounded">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-1 text-green-700 hover:bg-green-100 rounded-l"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-1 text-green-700 hover:bg-green-100 rounded-r"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <button
              disabled={product.stock === 0}
              className={`bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl transition ${
                product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Add to Cart
            </button>
            <button
              disabled={product.stock === 0}
              className={`bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-xl transition ${
                product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Buy Now
            </button>
            <button className="flex items-center text-green-700 hover:text-green-800">
              <FaHeart className="mr-2" /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-2xl shadow-xl">
        <div className="flex border-b border-green-300 mb-4">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "description"
                ? "border-b-4 border-green-600 text-green-800"
                : "text-green-600"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "specs"
                ? "border-b-4 border-green-600 text-green-800"
                : "text-green-600"
            }`}
          >
            Specs
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "reviews"
                ? "border-b-4 border-green-600 text-green-800"
                : "text-green-600"
            }`}
          >
            Reviews
          </button>
        </div>

        {activeTab === "description" && (
          <p className="text-green-700">{product.description}</p>
        )}
        {activeTab === "specs" && (
          <ul className="list-disc ml-5 text-green-700 space-y-1">
            {product.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        )}
        {activeTab === "reviews" && (
          <div className="space-y-4 text-green-700">
            {product.reviews.map((review, index) => (
              <div key={index} className="border-b border-green-300 pb-2">
                <p className="font-semibold">{review.user}</p>
                <StarRating rating={review.rating} />
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold text-green-800 mb-4">
          Related Products
        </h3>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          centerMode
          centerSlidePercentage={33}
          swipeable
          emulateTouch
        >
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="p-4 cursor-pointer"
              onClick={() => navigate(`/haircare/${item.id}`)}
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="rounded-xl max-h-[200px] object-cover mx-auto"
              />
              <h4 className="text-green-700 font-semibold mt-2 text-center">
                {item.name}
              </h4>
              <p className="text-green-600 text-center">₹{item.price}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HairCareDetail;
