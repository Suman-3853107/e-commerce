import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const WishlistButton = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { isLoggedIn } = useAuth();

  if (!product) return null;

  const liked = isInWishlist(product.id);

  const handleToggle = () => {
    if (!isLoggedIn()) {
      toast.error("Please log in to add to wishlist.");
      return;
    }
    toggleWishlist(product);
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-full transition duration-200 hover:scale-110 focus:outline-none ${
        liked ? "text-danger" : "text-muted hover:text-primary"
      }`}
      aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={liked}
      title={liked ? "Remove from wishlist" : "Add to wishlist"}
    >
      {liked ? (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.656l-6.828-6.828a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      )}
    </button>
  );
};

export default WishlistButton;
