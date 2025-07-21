<section className="px-6 py-12 bg-green-50 min-h-screen">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-4">
    Organic Hair Care Products
  </h2>
  
  {/* Description section */}
  <p className="max-w-3xl mx-auto text-center text-green-700 text-md md:text-lg mb-10 leading-relaxed">
    Discover the secret to naturally radiant hair with our premium range of organic hair care products. 
    Free from harsh chemicals and packed with nourishing botanical ingredients, each product is crafted 
    to strengthen, hydrate, and revitalize your hair. Embrace the power of nature for soft, shiny, and 
    healthy-looking locks—every day.
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {hairCareItems.map((item) => (
      <div
        key={item.id}
        className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-green-100"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover mb-3 rounded-lg"
        />
        <h3 className="text-lg font-semibold text-green-800 mb-2">{item.name}</h3>
        <p className="text-sm text-green-600 mb-2">{item.description}</p>
        <p className="text-green-700 font-bold text-lg">{item.price}</p>
        <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</section>
