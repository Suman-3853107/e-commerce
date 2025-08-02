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
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-[#f9f9ff] to-[#e0e7ff]">
      {/* Left: Image/Brand Section */}
      <div className="hidden md:block h-full w-full overflow-hidden rounded-tr-[60px] rounded-br-[60px] shadow-xl" data-aos="zoom-in">
        <img
          src="/images/login.jpg"
          alt="Login illustration"
          className="w-full h-full object-cover"
          data-aos="zoom-in"
        />
      </div>

      {/* Right: Login Form */}
      <div className="flex flex-col justify-center px-10 py-16">
        <div className="max-w-md w-full mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-primary mb-3">Welcome Back 👋</h2>
          <p className="text-muted text-sm mb-6">
            Sign in to continue shopping your favorites.
          </p>

          {/* Google Sign-In (dummy) */}
          <button className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition mb-6">
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-3 text-gray-400 text-sm">or sign in with email</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-500" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
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
