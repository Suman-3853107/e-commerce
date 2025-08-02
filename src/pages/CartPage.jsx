// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    addToCart,
    getCartCount,
  } = useCart();

  const handleDecrease = (product) => {
    if (product.quantity === 1) {
      removeFromCart(product.id);
    } else {
      const updatedQuantity = product.quantity - 1;
      removeFromCart(product.id);
      for (let i = 0; i < updatedQuantity; i++) {
        addToCart(product);
      }
    }
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty 🛒</h2>
          <Link
            to="/products"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">
        Shopping Cart
      </h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-contain rounded"
              />
              <div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-sm text-muted capitalize">
                  {item.category}
                </p>
                <p className="text-primary font-medium">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDecrease(item)}
                className="px-2 py-1 bg-gray-200 rounded text-lg"
              >
                -
              </button>
              <span className="min-w-[30px] text-center">{item.quantity}</span>
              <button
                onClick={() => addToCart(item)}
                className="px-2 py-1 bg-gray-200 rounded text-lg"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-10 flex justify-between items-center border-t pt-6">
        <div>
          <p className="text-muted text-sm">
            Total Items: <strong>{getCartCount()}</strong>
          </p>
          <p className="text-muted text-sm">
            Total Price:{" "}
            <strong className="text-xl text-primary">
              ${totalPrice.toFixed(2)}
            </strong>
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-red-100 text-red-500 px-4 py-2 rounded hover:bg-red-200"
          >
            Clear Cart
          </button>
          <Link to={'/checkout'}>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
            Checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
