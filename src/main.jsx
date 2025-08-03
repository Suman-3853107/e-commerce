import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import './toast.css'
import App from './App.jsx';
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
            <App />
            <ToastContainer position="top-right" autoClose={2000} />
         </WishlistProvider>   
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
