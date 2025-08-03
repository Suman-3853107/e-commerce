import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = register(formData);
    if (result.success) {
      navigate("/login");
    } else {
      alert(result.message || "User already exists.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:grid md:grid-cols-2 bg-gray-50">
      
      
      <div className="h-64 md:h-full w-full overflow-hidden md:rounded-tr-[60px] md:rounded-br-[60px] shadow-xl">
        <img
          src="/images/register.jpg"
          alt="Register Illustration"
          className="w-full h-full object-cover mt-2"
          loading="lazy"
        />
      </div>

     
      <div className="flex items-center justify-center px-6 sm:px-10 py-10 md:py-16 bg-white md:bg-transparent">
        <div className="w-full max-w-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-center md:text-left">
            Create Account
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center md:text-left">
            Join us and explore the best shopping experience with top deals.
          </p>

          
          <button
            onClick={() => alert("Google login coming soon")}
            className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition mb-6"
          >
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

       
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-sm text-gray-500">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

         
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-primary"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-primary"
              required
            />

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
