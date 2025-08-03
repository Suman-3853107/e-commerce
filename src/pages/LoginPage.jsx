import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(formData);
    if (result.success) {
      navigate("/");
    } else {
      alert(result.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:grid md:grid-cols-2 bg-gradient-to-br from-[#f9f9ff] to-[#e0e7ff]">
      
  
      <div className="w-full h-64 md:h-full ">
        <img
          src="/images/login1.jpg"
          alt="Login"
          className="w-full h-full object-cover md:rounded-tr-[60px] md:rounded-br-[60px] shadow-lg mt-2"
        />
      </div>

   
      <div className="flex items-center justify-center px-6 sm:px-10 py-10 md:py-16 bg-white md:bg-transparent">
        <div className="w-full max-w-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-center md:text-left">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center md:text-left">
            Sign in to continue shopping your favorites.
          </p>

         
          <button className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition mb-6">
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

       
          <div className="flex items-center mb-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-3 text-gray-400 text-sm">or sign in with email</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-500" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition"
            >
              Sign In
            </button>
          </form>

          
          <p className="mt-6 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary font-medium hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
