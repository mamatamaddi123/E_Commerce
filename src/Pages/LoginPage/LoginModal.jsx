import React from "react";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";



const LoginModal = ({ onClose, onSwitch, setUser }) => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Minimum 6 characters";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // const res = await fetch("http://localhost:5000/api/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password }),
      //   credentials: "include",
      // });

      const data = await res.json();

      if (res.ok) {
        toast.success("Login successful!");

        // Store ID in localStorage
        localStorage.setItem("userId", data.id);

        const user = {
          email,
          full_name: email.split("@")[0],
        };

        setUser(user);
        onClose();
        setEmail("");
        setPassword("");
        setErrors({});
      } else {
        toast.error(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="backdrop-blur-sm bg-white/80 rounded-xl shadow-2xl w-full max-w-md p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-green-300"
              }`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 ${
                errors.password ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-green-300"
              }`}
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="text-right">
            <button
              type="button"
                 onClick={() => navigate("/forgot-password")}
              // onClick={() => toast.info("Redirect to forgot password page")}
              className="text-green-600 text-sm"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-700 mt-4">
          Don’t have an account?{" "}
          <button onClick={onSwitch} className="text-green-600 font-medium">
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
