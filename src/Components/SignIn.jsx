import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from '../../UserContext';

const Signin = () => {
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValid = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Email is invalid");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    }

    return valid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://seekconnect-backend-1.onrender.com/login",
        {
          Email: email,
          Password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { role, name } = response.data;

      if (role === "user") {
        setUser({ name, email, role });
        navigate("/dash", { state: { name, email, role } });
      } else if (role === "admin") {
        setUser({ name, email, role });
        navigate("/dashboardadmin", { state: { name, email, role } });
      } else {
        console.log("You're not registered. Please sign up first.");
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        setLoginError("Invalid email or password");
      } else {
        setLoginError("An error occurred. Please try again later.");
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/public/im3.jpg')" }}>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Log in to your account</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className={`w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${emailError ? "border-red-500" : ""}`}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${passwordError ? "border-red-500" : ""}`}
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>

          {loginError && <p className="text-red-500 text-center text-sm mt-1">{loginError}</p>}

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-orange-500 rounded-md hover:bg-orange-200 focus:outline-none"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account? <Link to="/signup" className="text-orange-500 text-bold hover:text-orange-300">Sign up</Link>
        </p>
        <p className="text-center text-sm mt-2">
          <Link to="/resetpassword" className="text-orange-500 hover:text-orange-300">Forgot your password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
