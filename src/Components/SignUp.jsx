import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setServerError("");

    try {
      const response = await axios.post(
        "https://seekconnect-backend-1.onrender.com/signUp",
        {
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          Password: password,
          ConfirmPassword: confirmPassword,
        }
      );
      console.log("response.data", response.data);
      navigate("/otp-verify");
    } catch (error) {
      console.error(error);
      setServerError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen mt-8  flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/public/im3.jpg')`, // Keep the current background
      }}
    >
      <div className="max-w-md w-full bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl text-gray-700 font-medium text-center mt-2 mb-6">
          Create Your Account
        </h2>
        <form onSubmit={handleSignUp}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Email address"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          {serverError && <p className="text-red-500 text-center">{serverError}</p>}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded font-medium hover:bg-orange-600 transition"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>
            Already have an account?{" "}
            <Link to="/signin" className="text-orange-500 font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
