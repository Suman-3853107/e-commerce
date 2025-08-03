import React from "react";
import { Link } from "react-router-dom";
import WishlistButton from "../components/WishListButton";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const ProductCard = ({ product, onAddToCart }) => {
  const { isLoggedIn } = useAuth();
  const detailsLink = `/productDetails/${product.id}`;
  
const handleAddToCart = () => {
  if (!isLoggedIn()) {
    toast.error("Please login to add products to your cart.");
    return;
  }

  onAddToCart(product);
};
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative flex flex-col h-full border border-gray-100 hover:border-gray-200">
    
      

 
      <div className="absolute top-3 right-3 z-10">
        <WishlistButton product={product} />
      </div>

      
      <Link to={detailsLink} className="block flex-grow">
        <div className="w-full h-56 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

   
      <div className="p-4 flex flex-col">
        
        <div className="mb-3">
          <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-medium">
            {product.category}
          </p>

          <Link to={detailsLink}>
            <h3 className="text-base font-semibold text-gray-800 hover:text-primary transition-colors duration-200 line-clamp-2 mb-2">
              {product.title}
            </h3>
          </Link>

         
          {product.rating && (
            <div className="flex items-center text-sm mt-1 mb-2">
              <div className="flex mr-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating.rate) ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500">
                ({product.rating.count})
              </span>
            </div>
          )}
        </div>

       
        <div className="mt-auto">
      
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

         
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 