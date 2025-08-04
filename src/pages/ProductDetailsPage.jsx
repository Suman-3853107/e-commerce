import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import WishlistButton from "../components/WishListButton";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";


const ProductDetails = () => {
  const { isLoggedIn } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);
        setSelectedImg(found?.images?.[0]);
      })
      .catch((err) => console.error("Failed to load product:", err));
  }, [id]);

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  const relatedProducts = allProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleAddToCart = () => {
    if (!isLoggedIn()) {
    toast.error("Please login to add products to your cart.");
    return;
  }
    const { message } = addToCart(product);
    toast.success(message);
  };

  

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div>
          <div className="relative mb-4 rounded-lg overflow-hidden border bg-white">
            <div className="w-full h-[350px] md:h-[500px] flex items-center justify-center">
              <img
                src={selectedImg}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-3 right-3 z-10">
              <WishlistButton product={product} />
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                onClick={() => setSelectedImg(img)}
                className={`h-16 w-16 object-cover rounded border-2 cursor-pointer transition ${
                  selectedImg === img ? "border-primary scale-105" : "border-lightGray"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-3">{product.title}</h1>
            <p className="text-gray-700 text-sm mb-4">{product.description}</p>
            <p className="text-xl font-bold text-accent mb-2">₹{product.price}</p>
            <p className="text-sm text-muted mb-2 capitalize">
              Category: {product.category}
            </p>
            <div className="text-yellow-500 text-sm mb-4">
              ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
            </div>
          </div>

    
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate(`/checkout/${product.id}`)}
              className="w-full sm:w-auto bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

   
      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-primary mb-4">Customer Reviews</h2>
          <div className="space-y-6">
            {product.reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white border border-lightGray p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-black">{review.username}</span>
                  <span className="text-sm text-muted">{review.date}</span>
                </div>
                <div className="text-yellow-500 text-sm mb-1">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="text-gray-700 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Related Products</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={() => {
                  const { message } = addToCart(item);
                  toast.success(message);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
