import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import { FaHeartBroken } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify"; // Optional: for feedback

const WishlistPage = () => {
  const { wishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    const { message } = addToCart(product);
    toast.success(message); // Optional: Show toast on add
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <FaHeartBroken className="text-4xl text-muted mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Your Wishlist is Empty 💔</h2>
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
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">My Wishlist</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {wishlist.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)} 
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
