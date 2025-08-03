import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ className = "", inputSize = "sm" }) => {
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  const inputPadding = inputSize === "sm" ? "pl-3 pr-8 py-1.5" : "pl-4 pr-10 py-2";

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
      return;
    }

    const matches = allProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(matches);
  }, [query, allProducts]);

  const handleSearch = (id) => {
    setQuery("");
    setFiltered([]);
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={query}
        placeholder="Search products..."
        onChange={(e) => setQuery(e.target.value)}
        className={`bg-gray-800 text-white text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 w-full ${inputPadding}`}
      />
      <FaSearch
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none text-sm"
      />

      
      {(filtered.length > 0 || (query && filtered.length === 0)) && (
        <ul className="absolute z-50 left-0 right-0 mt-1 bg-white rounded-md shadow-lg overflow-hidden max-h-64 overflow-y-auto">
          {filtered.map((product) => (
            <li
              key={product.id}
              onClick={() => handleSearch(product.id)}
              className="px-4 py-2 hover:bg-accent-100 cursor-pointer text-sm text-black"
            >
              {product.title}
            </li>
          ))}

         
          {filtered.length === 0 && query && (
            <li className="px-4 py-2 text-sm text-muted cursor-default">
              No matches found
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
