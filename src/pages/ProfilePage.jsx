import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FiEdit, FiLogOut, FiUpload } from "react-icons/fi";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const ProfilePage = () => {
  const { logout } = useAuth();
  const loginData = JSON.parse(localStorage.getItem("loginData"));

  const [profileData, setProfileData] = useState({
    fullName: "",
    phone: "",
    address: "",
    profileImage: "/images/avatar.png", // default
  });

  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState("/images/avatar.png");

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("profileData"));
    if (storedProfile) {
      setProfileData(storedProfile);
      setPreviewImage(storedProfile.profileImage);
    }
  }, []);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileData({ ...profileData, profileImage: reader.result });
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem("profileData", JSON.stringify(profileData));
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-gray-50 shadow-lg rounded-lg mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-primary">My Profile</h2>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-red-500 hover:text-red-700 transition duration-200"
        >
          <FiLogOut />
          Logout
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Profile Image */}
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            <img
              src={previewImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-primary shadow-md"
            />
            {isEditing && (
              <>
                <label
                  htmlFor="upload-image"
                  className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full cursor-pointer shadow-lg hover:bg-primary/80 transition duration-200"
                  title="Change Profile Image"
                >
                  <FiUpload />
                </label>
                <input
                  id="upload-image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </>
            )}
          </div>
        </div>

        {/* Right: User Info */}
        <div className="flex-1 space-y-5">
          <div>
            <label className="text-sm text-muted">Full Name</label>
            {isEditing ? (
              <input
                name="fullName"
                value={profileData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            ) : (
              <p className="text-lg font-medium">{profileData.fullName || "Not provided"}</p>
            )}
          </div>

          <div>
            <label className="text-sm text-muted">Email</label>
            <p className="text-lg font-medium">{loginData?.email || "Not available"}</p>
          </div>

          <div>
            <label className="text-sm text-muted">Phone</label>
            {isEditing ? (
              <input
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            ) : (
              <p className="text-lg font-medium">{profileData.phone || "Not provided"}</p>
            )}
          </div>

          <div>
            <label className="text-sm text-muted">Address</label>
            {isEditing ? (
              <textarea
                name="address"
                value={profileData.address}
                onChange={handleChange}
                rows="3"
                className="w-full border border-gray-300 px-3 py-2 rounded mt-1 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              />
            ) : (
              <p className="text-lg font-medium whitespace-pre-wrap">
                {profileData.address || "Not provided"}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition duration-200"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 text-primary hover:underline transition duration-200"
              >
                <FiEdit />
                Edit Profile
              </button>
            )}

            <div className="flex gap-4">
              <Link
                to="/cart"
                className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded hover:bg-accent/90 transition duration-200"
              >
                <FaShoppingCart />
                View Cart
              </Link>
              <Link
                to="/wishlist"
                className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 transition duration-200"
              >
                <FaHeart />
                Wishlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
