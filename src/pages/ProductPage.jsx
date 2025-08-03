import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { toast } from "react-toastify";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const { category } = useParams();

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);

        const uniqueCategories = Array.from(new Set(data.map((p) => p.category)));
        setCategories(uniqueCategories);

        const decodedCategory = category?.replace("category:", "");
        const initialCategory = decodedCategory || "all";
        setActiveCategory(initialCategory);

        const filtered =
          initialCategory === "all"
            ? data
            : data.filter((p) => p.category === decodedCategory);
        setProducts(filtered);
      })
      .catch((err) => console.error("Failed to load products", err));
  }, [category]);

  const filterByCategory = (cat) => {
    if (cat === "all") {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter((p) => p.category === cat));
    }
    setActiveCategory(cat);
  };

  const handleAddToCart = (product) => {
    const { message } = addToCart(product);
    toast.success(message);
  };

  const handleWishlistToggle = (product) => {
    toggleWishlist(product);
    toast.info(
      isInWishlist(product.id)
        ? `"${product.title}" removed from wishlist`
        : `"${product.title}" added to wishlist`
    );
  };

  return (
    <div className="bg-background min-h-screen px-4 py-10">
      <div className="max-w-7xl mx-auto">
       
        <h1 className="text-4xl font-bold text-primary mb-8 text-center" data-aos="fade-down">
          Explore Our Products
        </h1>

        
        <div
          className="flex overflow-x-auto sm:justify-center gap-3 mb-10 px-2 scrollbar-hide"
          data-aos="fade-up"
        >
          <button
            onClick={() => filterByCategory("all")}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition shadow-sm ${
              activeCategory === "all"
                ? "bg-primary text-white"
                : "bg-white text-primary border border-primary hover:bg-primary/10"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => filterByCategory(cat)}
              className={`capitalize whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition shadow-sm ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

       
        <div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          data-aos="fade-up"
        >
          {products.length === 0 ? (
            <p className="text-center col-span-full text-muted text-lg">
              No products found in this category.
            </p>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
