import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";
import HairCare from "./Components/HairCare";
import HairCareDetail from "./Components/HairCareDetail";
import Cart from "./Components/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from "./Pages/Profile/UserProfile";
import ForgotPassword from "./Pages/Auth/forgetPassword";
import Otp from "./Pages/Auth/otp";

import ResetPassword from "./Pages/Auth/resetPassword";
import Wishlist from "./Components/Wishlist";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FAQS from "./Components/Faqs";
import TermsAndPrivacy from "./Components/TermsAndPrivacy";


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/organic-products" element={<HairCare />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="/discription" element={<Discription />} /> */}
        <Route path="/haircare" element={<HairCare />} />
        <Route path="/haircare/:id" element={<HairCareDetail />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-otp" element={<Otp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
      </Routes>
      <Footer />
      
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;




