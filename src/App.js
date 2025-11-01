import { useState } from "react";
import ShopPage from "./ShopPage";
import Header from "./Header";
import CartDisplay from "./CartDisplay";
import Checkout from "./Checkout";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showShop, setShowShop] = useState(true);

  const removeFullItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (productToAdd) => {
    const existingItem = cart.find((item) => item.id === productToAdd.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart(
      cart.reduce((newCart, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            newCart.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          newCart.push(item);
        }
        return newCart;
      }, [])
    );
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleGotToCheckout = () => {
    setIsCartOpen(false);
    setShowShop(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cart={cart} onCartClick={handleCartClick} />

      <main>
        {showShop ? (
          <ShopPage addToCart={addToCart} />
        ) : (
          <Checkout
            cart={cart}
            calculateTotal={calculateTotal}
            clearCart={clearCart}
            setShowShop={setShowShop}
          />
        )}
      </main>

      {isCartOpen && (
        <CartDisplay
          cart={cart}
          removeFromCart={removeFromCart}
          removeFullItem={removeFullItem}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleGotToCheckout}
        />
      )}
    </div>
  );
}

export default App;
