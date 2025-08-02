import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center"
      style={{ backgroundImage: "url('/images/header.jpg')" }}
    >
      <div className="bg-white/70 w-full h-full absolute inset-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div
          className="ml-auto md:w-1/2 text-right"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-4">
            Discover the Best Deals on Top Products
          </h1>
          <p className="text-muted mb-6 text-lg">
            Shop from our latest collection of electronics, fashion, and more.
            Quality you can trust — prices you'll love.
          </p>

          <div className="flex justify-end gap-4">
            <Link
              to="/products"
              className="bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Shop Now
            </Link>
            <Link
              to="/#categories"
              className="px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
