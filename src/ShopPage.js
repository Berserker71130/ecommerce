import { Products } from "./Products";
import ProductCard from "./ProductCard";

const ShopPage = ({ addToCart }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-2 pb-2">
        Berserker's Gear Shop
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
