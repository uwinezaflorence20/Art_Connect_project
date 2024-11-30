import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OTPVerification = () => {
  const [otp, setOTP] = useState(["", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      // Allow only digits
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      // Move to the next input field if not the last
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOTPVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    const otpValue = otp.join("");
    try {
      const response = await axios.post(
        "https://seekconnect-backend-1.onrender.com/otp-verify",
        { otp: otpValue }
      );
      console.log("response.data", response.data);
      toast.success("Logged in successfully");
      setLoading(false);
      navigate("/signin");
    } catch (error) {
      console.log(error);
      setError("Invalid OTP. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/public/im3.jpg')`, // Replace with the path to your background image
      }}
    >
      <div className="max-w-md w-full bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-4">
          ArtConnect
        </h1>
        <h2 className="text-xl text-gray-700 font-medium text-center mb-6">
          OTP Verification
        </h2>
        <form onSubmit={handleOTPVerification}>
          <div className="mb-6 flex justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded font-medium hover:bg-orange-600 transition"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
        <ToastContainer position="bottom-left" />
      </div>
    </div>
  );
};

export default OTPVerification;
