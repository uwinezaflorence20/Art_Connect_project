import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxDoubleArrowLeft } from "react-icons/rx";

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [modalMessage, setModalMessage] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (!formData.email) errors.email = "Email is required";
    if (!formData.newPassword) errors.newPassword = "New password is required";
    if (!formData.confirmPassword) errors.confirmPassword = "Confirm password is required";
    if (formData.newPassword !== formData.confirmPassword) errors.confirmPassword = "Passwords do not match";

    if (Object.keys(errors).length === 0) {
      setLoading(true); // Start loading
      try {
        const response = await fetch("https://seekconnect-backend-1.onrender.com/resetPassword", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Email: formData.email,
            Password: formData.newPassword,
            ConfirmPassword: formData.confirmPassword,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          setModalMessage(data.message);
          setModalSuccess(true);
          setFormData({ email: "", newPassword: "", confirmPassword: "" });
        } else {
          setErrors(data.errors);
        }
      } catch (error) {
        setErrors({ general: "An error occurred. Please try again later." });
      } finally {
        setLoading(false); // Stop loading
      }
    } else {
      setErrors(errors);
    }
  };

  useEffect(() => {
    if (modalMessage) {
      const timer = setTimeout(() => {
        setModalMessage("");
      }, 3000); // Auto-dismiss after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [modalMessage]);

  return (
    <div className="min-h-screen flex items-center mt-4 justify-center bg-cover bg-center" style={{ backgroundImage: "url('/public/im3.jpg')" }}>
      {modalMessage && (
        <div className="fixed z-10 inset-0 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl sm:max-w-lg w-full px-6 py-4">
            <h3 className="text-lg font-medium text-gray-900 text-center">Notification</h3>
            <p className="text-gray-500 mt-2 text-center">{modalMessage}</p>
          </div>
        </div>
      )}

      <div className="max-w-md w-full mt-10 p-8 rounded-lg bg-white shadow-lg bg-opacity-80">
        <h2 className="text-xl font-bold text-center mb-6 text-orange-500">Reset Password</h2>
        {loading && <div className="text-center mb-4 text-orange-500">Loading...</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-[#FF7F50] focus:border-[#FF7F50]`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-gray-700 font-semibold">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 border ${errors.newPassword ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-[#FF7F50] focus:border-[#FF7F50]`}
            />
            {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-[#FF7F50] focus:border-[#FF7F50]`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          <div className="flex items-center mt-4">
            <RxDoubleArrowLeft className="text-orange-500 pt-1" />
            <Link to={"/signin"} className="text-orange-500 ml-2 hover:underline">Back to Sign In</Link>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-[#E76838] transition"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
