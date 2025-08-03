import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-background px-4 py-10">
      
      <img
        src="/images/notFound.jpg" 
        alt="Page Not Found"
        className="max-w-md w-full mb-8"
        data-aos="zoom-in"
      />

     
      <h1 className="text-4xl font-bold text-primary mb-4">Oops! Page Not Found</h1>
      <p className="text-muted text-lg mb-6 max-w-xl">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>

      
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition"
      >
        <FaArrowLeft />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
