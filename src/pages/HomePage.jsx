import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setBestSellers(data.slice(0, 6))); // Top 4 as best sellers
  }, []);



  return (
    <div className="bg-white">
      {/* Hero Section */}
<section
  className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/header.jpg')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center justify-end">
    <div className="max-w-xl text-white text-right" data-aos="fade-left">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Discover Deals at <span className="text-accent">ShopyVia</span>
      </h1>
      <p className="text-md md:text-lg mb-6 text-white/90">
        Shop electronics, fashion, accessories & more – quality and affordability combined.
      </p>
      <Link
        to="/products"
        className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-accent/90 transition"
      >
        Shop Now
      </Link>
    </div>
  </div>
</section>


      

      {/* Best Sellers Section */}
<section className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center text-primary mb-10">
    Best Sellers
  </h2>

  {/* Horizontally scrollable always, shows 4 cards max side by side */}
  <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide">
    {bestSellers.map((product) => (
      <div
        key={product.id}
        className="min-w-[80%] sm:min-w-[300px] lg:min-w-[25%] flex-shrink-0"
      >
        <ProductCard product={product} />
      </div>
    ))}
  </div>
</section>



     {/* About Us Section */}
<section className="bg-[#f9f9f9] py-20 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Image */}
    <div data-aos="fade-right">
      <img
        src="/images/home-about.jpg"
        alt="About ShopyVia"
        className="w-full h-[600px] object-cover rounded-xl shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="space-y-6" data-aos="fade-left">
      <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
        Who We Are
      </span>
      <h3 className="text-4xl font-bold text-gray-900 leading-tight">
        Built for Shoppers, By Shoppers
      </h3>
      <p className="text-muted text-lg">
        At <strong>ShopyVia</strong>, we’re on a mission to simplify your online shopping journey.
        We curate the best deals, hand-pick top-rated products, and ensure fast delivery to your doorstep.
      </p>
      <ul className="grid gap-3 text-muted text-sm sm:text-base">
        <li className="flex items-start gap-3">
          <span className="text-primary text-lg mt-1">✔</span>
          Vast collection of top-rated gadgets, fashion, and accessories
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary text-lg mt-1">✔</span>
          Trusted by thousands of happy shoppers across the country
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary text-lg mt-1">✔</span>
          Responsive support, flexible returns, and genuine service
        </li>
      </ul>
      <Link
        to="/contact"
        className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition"
      >
        Contact Us
      </Link>
    </div>
  </div>
</section>

    </div>
  );
};

export default HomePage;
