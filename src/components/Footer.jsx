import React from 'react';
import { FaShoppingCart, FaHeart, FaUser, FaSearch, FaHome, FaThLarge, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const categories = ["mobiles", "laptops", "watches", "earbuds", "shoes"];
  
  const quickLinks = [
    { icon: <FaHome size={16} />, label: "Home", href: "/" },
    { icon: <FaSearch size={16} />, label: "Search", href: "/search" },
    { icon: <FaHeart size={16} />, label: "Wishlist", href: "/wishlist" },
    { icon: <FaShoppingCart size={16} />, label: "Cart", href: "/cart" },
    { icon: <FaUser size={16} />, label: "Profile", href: "/profile" }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
              Shopy<span className="text-yellow-400">Via</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted e-commerce destination for quality products and exceptional service.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-300">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="flex items-center space-x-3 text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center space-x-2">
              <FaThLarge size={18} />
              <span>Categories</span>
            </h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={`/category/${category}`} 
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 capitalize block"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>📧 support@shopyvia.com</p>
              <p>📞 +91 98765 43210</p>
              <p>🏢 123 Business Street<br />Madurai, Tamil Nadu 625001</p>
              <p>🕒 Mon - Sat: 9AM - 9PM<br />Sunday: 10AM - 6PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 ShopyVia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="/support" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;