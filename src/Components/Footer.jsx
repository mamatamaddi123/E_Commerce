import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faLeaf, faSpa, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-700 text-white py-12">
      {/* Subtle Background Pattern */}
      <div className=" inset-0 opacity-5">
        <div className="text-green-300 text-8xl absolute top-4 right-10"></div>
        <div className="text-green-200 text-6xl absolute bottom-8 left-20">✨</div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-300 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faLeaf} className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-bold text-green-100">Company Name</h3>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
            From our organic farms to your family table, we're committed to delivering pure, natural products that nourish your body and protect our planet..
            </p>
            <div className="flex items-center gap-2 text-green-300 text-sm">
              <FontAwesomeIcon icon={faSpa} />
              <span>Certified Organic</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-100 mb-4">Products</h4>
            <nav className="space-y-2">
              {['Face Care', 'Hair Care', 'Body Care',  'New Arrivals'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="block text-green-200 hover:text-green-100 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-100 mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-green-200">
                <FontAwesomeIcon icon={faPhone} className="text-green-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-green-200">
                <FontAwesomeIcon icon={faEnvelope} className="text-green-400" />
                <span>hello@organicglow.com</span>
              </div>
              <div className="flex items-center gap-2 text-green-200">
                <FontAwesomeIcon icon={faLocationDot} className="text-green-400" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-100 mb-4">Beauty Tips</h4>
            <p className="text-green-200 text-sm">
              Get organic beauty tips & exclusive offers
            </p>
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-3 py-2 bg-green-800/40 border border-green-600/50 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="w-full bg-gradient-to-r from-green-500 to-green-400 text-white py-2 px-4 rounded-lg font-medium hover:from-green-400 hover:to-green-300 transition-all duration-300 text-sm"
              >
                Subscribe
              </button>
            </div>
            {isSubscribed && (
              <div className="text-green-300 text-xs bg-green-800/40 p-2 rounded">
                Welcome to our beauty family! 🌿
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Social Media */}
            <div className="flex items-center gap-4">
              {[
                { icon: faFacebookF, label: 'Facebook' },
                { icon: faInstagram, label: 'Instagram' },
                { icon: faTwitter, label: 'Twitter' },
                { icon: faYoutube, label: 'YouTube' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-green-800/40 rounded-full flex items-center justify-center text-green-200 hover:bg-green-600 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-green-300 text-sm">
                &copy; {new Date().getFullYear()} VasmiGroup. All rights reserved.
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 text-green-300 text-sm">
              <a href="#" className="hover:text-green-100 transition-colors">Privacy</a>
              <span>•</span>
              <a href="#" className="hover:text-green-100 transition-colors">Terms</a>
              <span>•</span>
              <a href="#" className="hover:text-green-100 transition-colors">Returns</a>
            </div>
          </div>

          {/* Brand Message */}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;