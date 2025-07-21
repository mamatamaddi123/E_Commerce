import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResetPassword = ({ onClose }) => {
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

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
        toast.success("Password reset successful!");
        setNewPassword("");
        setConfirmPassword("");
        setError("");
        if (onClose) {
          onClose();
          navigate("/login");
        } else {
          navigate("/login");
        }
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-password-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center"
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative">
        <button
          onClick={handleClose}
          aria-label="Close reset password modal"
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
        >
          ×
        </button>

        <h2
          id="reset-password-title"
          className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-6"
        >
          Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              New Password
            </label>
            <input
              id="new-password"
              type="password"
              autoComplete="new-password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setError("");
              }}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 transition-colors duration-200 ${
                error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-green-300"
              }`}
              placeholder="Enter new password"
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "reset-password-error" : undefined}
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
              }}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 transition-colors duration-200 ${
                error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-green-300"
              }`}
              placeholder="Confirm new password"
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "reset-password-error" : undefined}
            />
            {error && (
              <p
                id="reset-password-error"
                className="text-red-600 text-xs mt-1"
                role="alert"
              >
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 text-white font-medium rounded-md transition-colors duration-200"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
