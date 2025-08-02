import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const getInitialCart = () => {
  try {
    const stored = localStorage.getItem("cartData");
    return stored ? JSON.parse(stored) : [];
  } catch {
    localStorage.removeItem("cartData");
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialCart);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    return { success: true, message: `"${product.title}" added to cart.` };
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
