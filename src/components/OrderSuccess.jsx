import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-gradientStart to-gradientEnd px-4">
      <div className="bg-card shadow-xl rounded-2xl p-8 md:p-12 text-center animate-fadeIn">
        <div className="flex justify-center mb-4 animate-slideIn">
          <FaCheckCircle className="text-success text-6xl shadow-lg" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 animate-fadeIn">
          Order Placed Successfully!
        </h2>
        <p className="text-muted text-base md:text-lg animate-slideIn">
          You’ll be redirected to the homepage shortly...
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
