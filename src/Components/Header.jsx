import React, { useState, useEffect, useRef } from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaHeart,
  FaEllipsisV,
} from "react-icons/fa";
import logo from "../assets/Logo/logo.png";
import LoginModal from "../Pages/LoginPage/LoginModal";
import RegisterModal from "../Pages/RegisterPage/RegisterModel";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // ✅ Toastify import



const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [dotsDropdownOpen, setDotsDropdownOpen] = useState(false);
  const dotsDropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

//   useEffect(() => {
//   fetch('http://localhost:5000/api/check-session', {
//     credentials: 'include', // ✅ Important: sends cookies with request
//   })
//     .then(res => res.json())
//     .then(data => {
//       if (data.loggedIn) {
//         // ✅ store in state or context
//         setUser(data.user);
//       } else {
//         setUser(null);
//       }
//     })
//     .catch(err => {
//       console.error('Session check failed:', err);
//     });
// }, []);

  // Close 3-dots dropdown if clicked outside
  useEffect(() => {
    const handleClickOutsideDots = (e) => {
      if (dotsDropdownRef.current && !dotsDropdownRef.current.contains(e.target)) {
        setDotsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideDots);
    return () => document.removeEventListener("mousedown", handleClickOutsideDots);
  }, []);


  return (
    <div className="w-full">
      {/* Top Strip */}
      <div className="bg-white text-gray-700 text-sm flex justify-between items-center px-4 py-2">
        <div className="flex space-x-4">
          <span>Language ▾</span>
          <span>Currency ▾</span>
        </div>
        <div className="flex space-x-4 text-xl text-gray-700">
          <FaTwitter />
          <FaYoutube />
          <FaFacebookF />
          <FaInstagram />
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-green-400 text-black px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-[40px] w-[40px] md:h-[70px] md:w-[70px]"
          />
        </Link>

        {/* Search */}
        <div className="hidden md:flex w-1/2 bg-white rounded-full overflow-hidden shadow-md">
          <select className="px-4 py-2 text-gray-600 bg-gray-100 border-none rounded-l-full focus:outline-none">
            <option>Select a category</option>
            <option>Organic Products</option>
            <option>Organic Food</option>
            <option>Millets</option>
          </select>
          <input
            type="text"
            placeholder="Search Item..."
            className="flex-1 px-4 py-2 focus:outline-none"
          />
          <button className="bg-green-600 p-3 text-white rounded-r-full">
            <FaSearch />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4 text-white">
          {/* Mobile Search */}
          <button
            className="md:hidden text-xl"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <FaSearch />
          </button>

          {/* 3-dots Dropdown */}
          <div className="relative" ref={dotsDropdownRef}>
            <button
              className="h-10 w-10 md:h-[50px] md:w-[50px] flex items-center justify-center text-xl md:text-2xl hover:bg-white/20 rounded-full focus:outline-none"
              onClick={() => setDotsDropdownOpen((prev) => !prev)}
              aria-label="More options"
            >
              <FaEllipsisV />
            </button>
            {dotsDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-md text-sm text-gray-700 z-50 animate-fade-in">
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDotsDropdownOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDotsDropdownOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  to="/faqs"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDotsDropdownOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  to="/terms-and-privacy"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDotsDropdownOpen(false)}
                >
                  Terms & Privacy
                </Link>
              </div>
            )}
          </div>

          {/* Profile / Login */}
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="h-10 w-10 md:h-[50px] md:w-[50px] bg-white text-green-600 font-bold flex items-center justify-center rounded-full uppercase shadow"
              >
                {user.email?.charAt(0).toUpperCase()}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-md text-sm text-gray-700 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={async () => {
                      try {
                        // const res = await fetch("http://localhost:5000/api/logout", {
                        //   method: "POST",
                        //   credentials: "include",
                        // });
                        if (res.ok) {
                          toast.success("Logged out successfully");
                          setUser(null);
                          setDropdownOpen(false);
                          navigate("/");
                        } else {
                          toast.error("Logout failed");
                        }
                      } catch (err) {
                        console.error("Logout error:", err);
                        toast.error("Something went wrong during logout");
                      }
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="text-sm md:text-base"
              onClick={() => {
                setShowLogin(true);
                setShowRegister(false);
              }}
            >
              Login
            </button>
          )}

          {/* Cart */}
          <button
          
            className="flex items-center justify-center h-10 w-10 md:h-[50px] md:w-[50px] text-xl md:text-2xl"
          >
             <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </button>

          <button
         
           
          className="flex items-center justify-center h-10 w-10 md:h-[50px] md:w-[50px] text-xl md:text-2xl text-red-600">
           
             <Link to="/wishlist">
             <FaHeart />
            </Link>
           
       
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      {showMobileSearch && (
        <div className="md:hidden px-4 py-2 bg-white shadow-md">
          <div className="flex bg-white rounded-full overflow-hidden border border-gray-300">
            <select className="px-4 py-2 text-gray-600 bg-gray-100 border-none focus:outline-none">
              <option>Select a category</option>
              <option>Fruits</option>
              <option>Vegetables</option>
              <option>Grains</option>
            </select>
            <input
              type="text"
              placeholder="Search Item..."
              className="flex-1 px-4 py-2 focus:outline-none"
            />
            <button className="bg-green-600 p-3 text-white">
              <FaSearch />
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitch={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
          setUser={setUser}
        />
      )}
      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          onSwitch={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </div>
  );
};

export default Header;
