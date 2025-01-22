const ProductCard = ({ item, onAddToCart, onRemoveFromCart, cart }) => {
  return (
    <div className="p-2">
      <div className="cursor-pointer rounded-xl border bg-card text-card-foreground shadow p-4 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 object-contain object-center"
        />
        <div className="p-2">
          <h2 className="text-lg font-semibold truncate text-gray-800">
            {item.title}
          </h2>

          <div className="flex justify-between items-center mt-2">
            <p className="text-xl font-bold text-gray-900">${item.price}</p>
            <button
              onClick={() =>
                cart ? onRemoveFromCart(item) : onAddToCart(item)
              }
              className={`${
                cart ? "bg-red-500" : "bg-gray-900"
              } px-4 py-2 text-white text-xs font-medium uppercase rounded-lg`}>
              {cart ? "Remove" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
