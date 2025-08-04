import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const HomePage = () => {
  const [bestSellers, setBestSellers] = useState([]);
  
    const { addToCart } = useCart();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setBestSellers(data.slice(0, 8))); 
  }, []);

   const handleAddToCart = (product) => {
      const { message } = addToCart(product);
      toast.success(message);}

  return (
    <div className="bg-background">
      <section
  className="relative w-full h-[60vh] md:h-[90vh] bg-cover bg-center bg-no-repeat l"
  style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}

>
        
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm md:backdrop-blur-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center justify-start">
          <div className="max-w-xl text-white " data-aos="fade-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Discover Deals at <span className="text-accent">ShopyVia</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              Shop electronics, fashion, and more — quality and affordability,
              always.
            </p>
            <Link
              to="/products"
              className="inline-block bg-accent text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-accent/90 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
 
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-primary mb-2">Best Sellers</h2>
          <p className="text-muted text-lg">
            Discover our top trending products loved by customers.
          </p>
          <div className="mx-auto mt-4 w-16 h-1 bg-primary rounded"></div>
        </div>

       
        <div
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-1 scrollbar-hide"
          data-aos="fade-up"
        >
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="snap-start min-w-[80%] sm:min-w-[300px] lg:min-w-[25%] flex-shrink-0 transition-transform hover:scale-[1.02]"
            >
             <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
              />
            </div>
          ))}
        </div>

    
        <div className="text-center mt-10" data-aos="fade-up">
          <button className="bg-primary hover:bg-blue-700 text-white py-3 px-6 rounded-full shadow-md transition duration-300">
            View All Best Sellers
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-[#f9f9f9] py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
   
          <div data-aos="fade-right">
            <img
              src="/images/home-about.jpg"
              alt="About ShopyVia"
              className="w-full h-[500px] object-cover rounded-xl shadow-xl"
              loading="lazy"
            />
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <span className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Who We Are
            </span>
            <h3 className="text-4xl font-bold text-gray-900 leading-tight">
              Built for Shoppers, By Shoppers
            </h3>
            <p className="text-muted text-lg">
              At <strong>ShopyVia</strong>, we believe shopping should be
              seamless, secure, and satisfying. We bring together handpicked
              products, unbeatable prices, and exceptional customer service.
            </p>

            <ul className="grid gap-3 text-muted text-base">
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg mt-1">✔</span>
                Curated collection of top-rated electronics, fashion, and
                lifestyle items
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg mt-1">✔</span>
                Trusted by over <strong>50,000+</strong> customers nationwide
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg mt-1">✔</span>
                Fast shipping, responsive support & easy returns
              </li>
            </ul>

           
            <div className="flex gap-6 mt-6">
              <div>
                <h4 className="text-3xl font-bold text-primary">50K+</h4>
                <p className="text-sm text-muted">Happy Customers</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary">1M+</h4>
                <p className="text-sm text-muted">Orders Delivered</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary">500+</h4>
                <p className="text-sm text-muted">Brands Partnered</p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            What Our Customers Say
          </h2>

        
          <div className="relative group">
            <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]">
              {[
                {
                  id: 1,
                  name: "Priya R.",
                  role: "Verified Buyer",
                  review:
                    "ShopyVia has changed how I shop. Quality, fast delivery, and great prices keep me coming back.",
                  image: "/images/avatar.png",
                  stars: 5,
                },
                {
                  id: 2,
                  name: "Arjun M.",
                  role: "Frequent Shopper",
                  review:
                    "The electronics I bought came with a warranty and quick support. Great experience overall!",
                  image: "/images/avatar.png",
                  stars: 5,
                },
                {
                  id: 3,
                  name: "Sneha K.",
                  role: "Fashion Lover",
                  review:
                    "Absolutely love the fashion picks. Affordable, trendy, and super fast delivery.",
                  image: "/images/avatar.png",
                  stars: 5,
                },
                {
                  id: 4,
                  name: "Ravi P.",
                  role: "Loyal Customer",
                  review:
                    "The return policy is smooth and the support team is responsive. I highly recommend them.",
                  image: "/images/avatar.png",
                  stars: 5,
                },
                {
                  id: 5,
                  name: "Meera T.",
                  role: "Gadget Enthusiast",
                  review:
                    "I got my order in 2 days. Fast and reliable service. Love the experience!",
                  image: "/images/avatar.png",
                  stars: 5,
                },
              ].map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-[300px] max-w-[320px] bg-gray-50 p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={testimonial.image}
                      className="w-10 h-10 rounded-full object-cover"
                      alt={testimonial.name}
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted italic text-sm mb-3">
                    “{testimonial.review}”
                  </p>
                  <div className="text-yellow-400 text-sm">
                    {"★".repeat(testimonial.stars)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
