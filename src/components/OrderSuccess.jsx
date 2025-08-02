import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in">
      <FaCheckCircle className="text-green-500 text-6xl mb-4 animate-ping-once" />
      <h2 className="text-3xl font-bold text-primary mb-2">Order Placed Successfully!</h2>
      <p className="text-muted text-sm">You’ll be redirected to the homepage shortly...</p>
    </div>
  );
};

export default OrderSuccess;
