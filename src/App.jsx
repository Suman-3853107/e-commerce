import React , {useEffect}from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";import AOS from "aos";
import "aos/dist/aos.css";



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import CheckoutPage from "./pages/CheckoutPage";
import { useAuth } from "./context/AuthContext"; // Import useAuth
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";



function App() {
  useEffect(() => {
  AOS.init({ once: true });
}, []);
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-primary">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       <Route path="/products" element={<ProductPage />} />
       <Route path="/contact" element={<ContactPage/>}/>
       <Route path="/products/:category" element={<ProductPage />} />

        <Route path="/productDetails/:id" element={<ProductDetails />} />

        <Route
          path="/profile"
          element={isLoggedIn() ? <ProfilePage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/cart"
          element={isLoggedIn() ? <CartPage /> : <Navigate to="/login" replace />}
        />
         <Route
          path="/wishlist"
          element={isLoggedIn() ? <WishlistPage/> : <Navigate to="/login" replace />}
        />
        <Route
         path="/checkout"
         element={isLoggedIn() ? <CheckoutPage /> : <Navigate to="/login" replace />}
        />
        <Route
         path="/checkout/:id"
         element={isLoggedIn() ? <CheckoutPage /> : <Navigate to="/login" replace />}
        />
        
        <Route path="*" element={<NotFoundPage/>} />


      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;
