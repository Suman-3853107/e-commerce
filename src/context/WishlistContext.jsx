
import React, { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  
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


  useEffect(() => {
    localStorage.setItem("wishlistData", JSON.stringify(wishlist));
  }, [wishlist]);

  
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id); 
      } else {
        return [...prev, product]; 
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  
  const clearWishlist = () => {
    setWishlist([]);
  };


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


export const useWishlist = () => useContext(WishlistContext);
