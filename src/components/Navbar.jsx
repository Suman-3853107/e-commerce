import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSearch
} from "react-icons/fa";

const categories = ["all", "mobiles", "laptops", "watches", "earbuds", "shoes"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 shadow-2xl sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left section: Logo and Search (on mobile) */}
        <div className="flex items-center space-x-3 md:space-x-6">
          {/* Logo */}
          <Link to="/" className="group">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide hover:scale-105 transition-transform duration-300">
              Shopy<span className="text-yellow-400">Via</span>
            </div>
          </Link>

          {/* Search input */}
          <div className="relative flex md:hidden">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-xs text-white pl-3 pr-7 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FaSearch className="absolute right-2 top-2 text-white pointer-events-none text-xs" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-gray-300">
          <Link to="/" className="hover:text-white hover:border-b-2 hover:border-red-500 pb-1 transition-all">Home</Link>
          <div className="relative">
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="hover:text-white hover:border-b-2 hover:border-red-500 pb-1 transition-all"
            >
              Products
            </button>
            <div
              className={`absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-xl shadow-2xl py-3 w-52 border border-gray-200 transition-all duration-300 transform z-40 ${
                productOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  to={cat === "all" ? "/products" : `/products/${cat}`}
                  className="block px-4 py-2.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 capitalize text-sm font-medium transition-all duration-200 hover:translate-x-1"
                  onClick={() => setProductOpen(false)}
                >
                  {cat === "all" ? "All Products" : cat}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/contact" className="hover:text-white hover:border-b-2 hover:border-red-500 pb-1 transition-all">
            Contact
          </Link>
        </div>

        {/* Right section: Icons and Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Search input (desktop) */}
          <div className="relative hidden md:flex">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-sm text-white pl-3 pr-8 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FaSearch className="absolute right-2 top-1.5 text-white pointer-events-none" />
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4 text-white">
            <HoverIcon to="/wishlist" icon={<FaHeart size={20} />} label="Wishlist" />
            <HoverIcon to="/cart" icon={<FaShoppingCart size={20} />} label="Cart" />
            <HoverIcon to="/profile" icon={<FaUser size={20} />} label="Profile" />
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 focus:outline-none"
          >
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                className="transition-all duration-300"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 text-white px-4 pb-4 pt-2 space-y-2">
          <Link to="/" className="block py-2 hover:text-yellow-300">Home</Link>
          <div>
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="block w-full text-left py-2 hover:text-yellow-300"
            >
              Products
            </button>
            {productOpen && (
              <div className="ml-4 space-y-1 text-sm">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    to={cat === "all" ? "/products" : `/products/${cat}`}
                    className="block py-1 capitalize hover:text-purple-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {cat === "all" ? "All Products" : cat}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/contact" className="block py-2 hover:text-yellow-300">Contact</Link>
          <div className="flex space-x-4 pt-2 text-sm">
            <Link to="/wishlist"><FaHeart size={16} /></Link>
            <Link to="/cart"><FaShoppingCart size={16} /></Link>
            <Link to="/profile"><FaUser size={16} /></Link>
          </div>
        </div>
      )}
    </header>
  );
};

const HoverIcon = ({ to, icon, label }) => (
  <Link to={to} className="relative group">
    {icon}
    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 text-xs text-white bg-black px-2 py-1 rounded transition-transform duration-300 whitespace-nowrap">
      {label}
    </span>
  </Link>
);

export default Navbar;
