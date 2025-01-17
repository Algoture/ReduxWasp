import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="p-2">
      <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 object-contain object-center"
        />
        <div className="p-2">
          <h2 className="text-lg font-semibold truncate text-gray-800">{item.title}</h2>
          
          <div className="flex justify-between items-center mt-2">
            <p className="text-xl font-bold text-gray-900">${item.price}</p>
            <button className="px-4 py-2 bg-gray-900 text-white text-xs font-medium uppercase rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-400">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
