import React from "react";
import { useWishlist } from "./../context/WishlistContext";

const WishlistButton = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const liked = isInWishlist(product.id);

  return (
    <button
      onClick={() => toggleWishlist(product)}
      className={`p-2 rounded-full transition hover:bg-secondary/10 ${
        liked ? "text-secondary" : "text-muted"
      }`}
      aria-label="Toggle wishlist"
    >
      {liked ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.656l-6.828-6.828a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      )}
    </button>
  );
};

export default WishlistButton;




