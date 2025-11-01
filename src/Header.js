import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Header = ({ cart, onCartClick }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="sticky top-0 z-10 bg-gray-900 shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-white">Berserker's Gear</h1>

        <div className="relative cursor-pointer" onClick={onCartClick}>
          <ShoppingCartIcon className="h-8 w-8 text-white hover:text-indigo-400 transition" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ring-2 ring-gray-900">
              {totalItems}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
