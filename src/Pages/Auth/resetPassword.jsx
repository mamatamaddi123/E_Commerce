import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResetPassword = ({ onClose }) => {
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const navigate = useNavigate();

  const passwordsMatch = newPassword && confirmPassword && newPassword === confirmPassword;
  const passwordsDontMatch = confirmPassword && newPassword !== confirmPassword;

  const validatePasswords = () => {
    if (!newPassword) return "New password is required";
    if (newPassword.length < 6) return "Password must be at least 6 characters";
    if (newPassword !== confirmPassword) return "Passwords do not match";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validatePasswords();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      // const res = await fetch("http://localhost:5000/api/reset-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ password: newPassword }),
      // });

      const data = await res.json();

      if (res.ok) {
        setShowSuccessModal(true);
        setNewPassword("");
        setConfirmPassword("");
        setError("");
      } else {
        toast.error(data.message || "Failed to reset password");
      }
    } catch (err) {
      console.error("Reset password error:", err);
      toast.error("Something went wrong");
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    navigate("/");
  };

  const handleGoToLogin = () => {
    setShowSuccessModal(false);
    if (onClose) onClose();
    // Removed navigation to login
  };

  return (
    <>
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-green-100/80 via-white/80 to-green-200/80 backdrop-blur-md flex items-center justify-center">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-10 flex flex-col items-center border border-green-100">
            <svg className="w-20 h-20 text-green-500 mb-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4"/></svg>
            <h3 className="text-3xl font-extrabold text-green-700 mb-2 text-center">Password reset!</h3>
            <p className="text-gray-600 text-center mb-4">Your password has been successfully updated.</p>
            <button onClick={handleGoToLogin} className="mt-2 px-8 py-2 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white rounded-lg font-semibold shadow focus:outline-none focus:ring-2 focus:ring-green-400">Go to Login</button>
          </div>
        </div>
      )}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reset-password-title"
        className="fixed inset-0 z-40 bg-gradient-to-br from-green-100/80 via-white/80 to-green-200/80 backdrop-blur-md flex items-center justify-center"
      >
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-12 relative border border-green-100 flex flex-col items-center">
          <button
            onClick={handleClose}
            aria-label="Close reset password modal"
            className="absolute top-6 right-6 text-gray-400 hover:text-red-500 text-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
          >
            ×
          </button>

          <div className="flex flex-col items-center mb-6">
            <svg className="w-16 h-16 text-green-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0v4m0 4h.01"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
            <h2
              id="reset-password-title"
              className="text-3xl sm:text-4xl font-extrabold text-green-700 text-center"
            >
              Reset Password
            </h2>
            <p className="text-gray-500 text-center mt-1">Create a new password for your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7 w-full">
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  id="new-password"
                  type="password"
                  autoComplete="new-password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setError("");
                  }}
                  className={`w-full px-5 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 transition-colors duration-200 shadow-sm text-lg placeholder-gray-400 focus:bg-white focus:ring-green-300 ${
                    passwordsMatch ? "ring-2 ring-green-400" : passwordsDontMatch ? "ring-2 ring-red-400" : error ? "ring-2 ring-red-400" : ""
                  }`}
                  placeholder="Enter new password"
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={error ? "reset-password-error" : undefined}
                />
                {passwordsMatch && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 text-xl">✓</span>
                )}
                {passwordsDontMatch && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-xl">✗</span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError("");
                  }}
                  className={`w-full px-5 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 transition-colors duration-200 shadow-sm text-lg placeholder-gray-400 focus:bg-white focus:ring-green-300 ${
                    passwordsMatch ? "ring-2 ring-green-400" : passwordsDontMatch ? "ring-2 ring-red-400" : error ? "ring-2 ring-red-400" : ""
                  }`}
                  placeholder="Confirm new password"
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={error ? "reset-password-error" : undefined}
                />
                {passwordsMatch && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 text-xl">✓</span>
                )}
                {passwordsDontMatch && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-xl">✗</span>
                )}
              </div>
              {passwordsDontMatch && (
                <p className="text-red-600 text-xs mt-2" role="alert">
                  Passwords do not match
                </p>
              )}
              {error && !passwordsDontMatch && (
                <p
                  id="reset-password-error"
                  className="text-red-600 text-xs mt-2"
                  role="alert"
                >
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 text-white text-lg font-bold rounded-lg shadow transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={!newPassword || !confirmPassword || passwordsDontMatch}
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
