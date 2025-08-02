// src/context/WishlistContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // 🔁 Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("wishlistData");
    if (stored) {
      try {
        setWishlist(JSON.parse(stored));
      } catch {
        console.error("Invalid wishlist data");
        localStorage.removeItem("wishlistData");
      }
    }
  }, []);

  // 💾 Save to localStorage when wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlistData", JSON.stringify(wishlist));
  }, [wishlist]);

  // ✅ Add or remove item from wishlist
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id); // remove
      } else {
        return [...prev, product]; // add
      }
    });
  };

  // ✅ Check if a product is in the wishlist
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // ✅ Clear wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };

  // ✅ Get wishlist items
  const getWishlist = () => {
    return wishlist;
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
        getWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// 🔁 Custom hook
export const useWishlist = () => useContext(WishlistContext);
