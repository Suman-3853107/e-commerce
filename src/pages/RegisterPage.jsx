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
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">
      {/* Left: Form Section */}
      <div
        className="flex flex-col justify-center items-center px-8 py-12"
        data-aos="fade-right"
      >
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-primary mb-4">Create Account</h2>
          <p className="text-muted mb-6 text-sm">
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

          {/* OR Divider */}
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-sm text-gray-500">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Form */}
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

      {/* Right: Illustration */}
      <div className="hidden md:block h-full w-full" data-aos="fade-left">
        <img
          src="/images/register.jpg"
          alt="Register Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
