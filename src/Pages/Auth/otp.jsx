import React, { useState, useRef, useEffect } from "react";
import { CheckCircle, X, RefreshCw, Mail, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";


const OTP = ({ onClose, email = "user@example.com" }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const inputRefs = useRef([]);
    const navigate = useNavigate();
  

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Resend cooldown
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;
    
    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);
    setError("");
  };

  const validateOtp = () => {
    const otpValue = otp.join("");
    if (!otpValue) return "Please enter the OTP";
    if (otpValue.length !== 6) return "Please enter all 6 digits";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateOtp();

    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success/failure
      const otpValue = otp.join("");
      if (otpValue === "123456") {
        setIsVerified(true);
        setTimeout(() => {
          onClose?.();
          navigate("/reset-password");
        }, 1500);
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error("OTP verification error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    
    setResendCooldown(60);
    setTimeLeft(300);
    setOtp(["", "", "", "", "", ""]);
    setError("");
    
    // Simulate API call
    setTimeout(() => {
      // Show success message
    }, 1000);
  };

  const handleClose = () => {
    onClose?.();
  };

  if (isVerified) {
    return (
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Verified Successfully!</h2>
          <p className="text-gray-600">Redirecting you now...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="otp-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white relative">
          <button
            onClick={handleClose}
            aria-label="Close OTP modal"
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
          </div>
          
          <h2 id="otp-title" className="text-2xl font-bold text-center mb-2">
            Verify Your Identity
          </h2>
          <p className="text-center text-green-100 text-sm">
            We've sent a verification code to your email
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Email display */}
          <div className="flex items-center justify-center mb-6 p-3 bg-gray-50 rounded-lg">
            <Mail className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">{email}</span>
          </div>

          {/* Timer */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-600">
              <span>Code expires in:</span>
              <span className={`font-mono font-bold ${timeLeft < 60 ? 'text-red-500' : 'text-green-600'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {/* OTP Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                Enter the 6-digit verification code
              </label>
              <div className="flex justify-center space-x-2 mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className={`w-12 h-12 text-center text-lg font-bold border-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      error
                        ? "border-red-500 bg-red-50"
                        : digit
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    aria-label={`OTP digit ${index + 1}`}
                  />
                ))}
              </div>
              {error && (
                <p className="text-red-600 text-sm text-center" role="alert">
                  {error}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading || otp.join("").length !== 6}
              className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <span>Verify Code</span>
              )}
            </button>
          </div>

          {/* Resend Code */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Didn't receive the code?</p>
            <button
              onClick={handleResendOtp}
              disabled={resendCooldown > 0}
              className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-200 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend Code"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;