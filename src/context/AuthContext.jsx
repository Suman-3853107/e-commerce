import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ⏳ Loading flag

  // ✅ Load login user from localStorage on mount
  useEffect(() => {
    const loginData = localStorage.getItem("loginData");
    if (loginData) {
      try {
        setUser(JSON.parse(loginData));
      } catch {
        localStorage.removeItem("loginData");
      }
    }
    setLoading(false); // Done loading
  }, []);

  // ✅ Register
  const register = ({ fullName, email, password }) => {
    const users = JSON.parse(localStorage.getItem("registerData")) || [];

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      return { success: false, message: "User already exists." };
    }

    const newUser = { fullName, email, password };
    localStorage.setItem("registerData", JSON.stringify([...users, newUser]));
    localStorage.setItem("loginData", JSON.stringify(newUser));
    setUser(newUser);

    return { success: true };
  };

  // ✅ Login
  const login = ({ email, password }) => {
    const stored = localStorage.getItem("registerData");
    if (!stored) return { success: false, message: "No registered users found." };

    const users = JSON.parse(stored);
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("loginData", JSON.stringify(matchedUser));
      setUser(matchedUser);
      return { success: true };
    }

    return { success: false, message: "Invalid credentials." };
  };

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem("loginData");
    setUser(null);
  };

  // ✅ Check logged in
  const isLoggedIn = () => !!user;

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, isLoggedIn, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook
export const useAuth = () => useContext(AuthContext);
