import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = ({ onClose, onSwitchToLogin }) => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const validateEmail = () => {
    if (!email) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(email)) return "Enter a valid email";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateEmail();

    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    try {
      // const res = await fetch("http://localhost:5000/api/forgot-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });

      const data = await res.json();

      if (res.ok) {
        toast.success("OTP sent to your email!");
        setEmail("");
        setError("");
        if (onClose) {
          onClose();
          navigate("/login");
        } else {
          navigate("/login");
        }
      } else {
        toast.error(data.message || "Failed to send reset OTP");
      }
    } catch (err) {
      console.error("Forgot password error:", err);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    navigate("/");
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="forgot-password-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300 ease-out"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden transform transition-all duration-300 ease-out scale-100">
        {/* Enhanced Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close forgot password modal"
          className="absolute top-4 right-4 z-20 group"
        >
          <div className="relative">
            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-gray-200 group-hover:bg-white group-hover:shadow-xl transition-all duration-200 group-hover:scale-110">
              <svg 
                className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="absolute inset-0 w-10 h-10 bg-red-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
          </div>
        </button>

        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 p-6 text-white relative">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h2
              id="forgot-password-title"
              className="text-2xl font-bold mb-2"
            >
              Forgot Password?
            </h2>
            <p className="text-green-100 text-sm">
              No worries! Enter your email and we'll send you reset instructions.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="forgot-email"
                className="block text-sm font-semibold text-gray-700 mb-2 flex items-center"
              >
                <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                Email Address
              </label>
              <div className="relative">
                <input
                  id="forgot-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className={`w-full px-4 py-3 pl-12 border-2 rounded-lg focus:ring-4 transition-all duration-200 ${
                    error
                      ? "border-red-300 focus:ring-red-100 focus:border-red-500"
                      : "border-gray-200 focus:ring-green-100 focus:border-green-500"
                  }`}
                  placeholder="Enter your email address"
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={error ? "forgot-email-error" : undefined}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>
              {error && (
                <p
                  id="forgot-email-error"
                  className="text-red-600 text-sm mt-2 flex items-center"
                  role="alert"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              onClick={()=> navigate("/reset-otp")}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-200 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Reset OTP
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-center text-sm text-gray-600">
              Remembered your password?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-green-600 font-semibold hover:text-green-700 hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 rounded transition-colors duration-200"
              >
                Login here
              </button>
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ForgotPassword;
