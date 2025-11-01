import { XMarkIcon, TrashIcon } from "@heroicons/react/24/solid";

const CartDisplay = ({
  cart,
  removeFromCart,
  removeFullItem,
  onClose,
  onCheckout,
}) => {
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckoutClick = () => {
    onCheckout();
    onClose();
  };
  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl p-6 overflow-y-auto z-20">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-900 transition"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500 italic">
          {" "}
          Your cart is empty. Time to gear up
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <p className="fontsemibold text-gray-700">{item.name}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-bold">{item.quantity}</span> x $
                  {item.price.toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-bold text-lg p-2 rounded-full transition"
                title="Decrease quantity or remove item"
              >
                -
              </button>

              <button
                onClick={() => removeFullItem(item.id)}
                className="text-gray-400 hover:text-red-500 transition"
                title="Remove item completely"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          ))}

          <div className="mt-6 pt-4 border-t-2">
            <div className="flex justify-between text-xl font-bold text-gray-800">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            className="w-full mt-6 bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-lg"
            onClick={handleCheckoutClick}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartDisplay;
