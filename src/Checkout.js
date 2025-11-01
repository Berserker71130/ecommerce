const Checkout = ({ cart, calculateTotal, clearCart, setShowShop }) => {
  const subTotal = calculateTotal();
  const shipping = 15.0;
  const taxRate = 0.05;
  const tax = subTotal * taxRate;
  const grandTotal = subTotal + shipping + tax;
  const handlePayment = (e) => {
    e.preventDefault();

    alert(`Payment of $${grandTotal.toFixed(2)}stimulated successfully!
    Order placed! Thank you for shopping at Berserker's Gear.`);
    clearCart();
    setShowShop(true);
  };
  if (cart.length === 0) {
    return (
      <div className="text-center p-20">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p className="text-gray-500">Please add items before checking out.</p>
        <button
          onClick={() => setShowShop(true)}
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Return to Shop
        </button>
      </div>
    );
  }
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Checkout</h2>

      <form
        onSubmit={handlePayment}
        className="flex flex-col lg:flex-row gap-8"
      >
        <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 border-b pb-2">
            Shipping Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name"
              required
              className="p-3 border rounded"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              classname="p-3 border rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Street Address"
            required
            className="mt-4 p-3 border rounded w-full"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <input
              type="text"
              placeholder="City"
              required
              className="p-3 border rounded"
            />

            <input
              type="text"
              placeholder="State/province"
              required
              className="p-3 border rounded"
            />

            <input
              type="text"
              placeholder="Zip code"
              required
              className="p-3 border rounded"
            />
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8 border-b pb-2">
            Payment Details(Simulation)
          </h3>

          <input
            type="text"
            placeholder="Card Number (simulation)"
            required
            className="p-3 border rounded w-full"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <input
              type="text"
              placeholder="Card Holder Name"
              required
              className="p-3 border rounded col-span-2"
            />

            <input
              type="text"
              placeholder="Expiry (MM/YY)"
              required
              className="p-3 border rounded"
            />
          </div>
          <input
            type="text"
            placeholder="CVV"
            required
            className="mt-4 p-3 border rounded w-1/3"
            maxLength="3"
          />
        </div>

        <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg h-fit">
          <h3 className="text-2xl font-bold mb-4 border-b pb-2">
            Order Summary
          </h3>

          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Taxes (5%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-bold text-gray-800 border-t pt-2 mt-2">
              <span>Grand Total:</span>
              <span className="text-2xl">${grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow-md"
          >
            Simulate Payment & Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
