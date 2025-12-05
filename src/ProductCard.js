const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-[1.03]">
      <img
        className="w-full h-56 object-cover"
        src={product.image}
        alt={product.name}
        loading="lazy"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between  items-center mb-4">
          <span className="text-2xl font-extrabold text-indigo-700">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
