import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Leaf, MessageCircle, Star, Sprout, Sun } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-emerald-50 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-lime-100 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-teal-50 rounded-full opacity-30"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl mb-8 shadow-2xl transform rotate-12">
              <Sprout className="w-10 h-10 text-white" />
            </div> */}
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              Let's
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Connect</span>
            </h1>
            {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to embrace a healthier lifestyle with our premium organic products? 
              We're here to help you every step of the way.
            </p> */}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Drop us a line</h2>
                      <p className="text-gray-500">We'll get back to you within 24 hours</p>
                    </div>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-16">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                        <Star className="w-12 h-12 text-white animate-spin" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent! 🌱</h3>
                      <p className="text-lg text-gray-600">Thanks for reaching out! We'll be in touch soon with fresh ideas and solutions.</p>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {/* Form Fields */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField('')}
                            required
                            className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 peer placeholder-transparent"
                            placeholder="Your Name"
                          />
                          <label className={`absolute left-0 -top-3 text-sm font-medium transition-all duration-300 ${focusedField === 'name' || formData.name ? 'text-green-600 -translate-y-1' : 'text-gray-400 translate-y-4'}`}>
                            Full Name *
                          </label>
                        </div>
                        
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField('')}
                            required
                            className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 peer placeholder-transparent"
                            placeholder="your@email.com"
                          />
                          <label className={`absolute left-0 -top-3 text-sm font-medium transition-all duration-300 ${focusedField === 'email' || formData.email ? 'text-green-600 -translate-y-1' : 'text-gray-400 translate-y-4'}`}>
                            Email Address *
                          </label>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField('')}
                            className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 peer placeholder-transparent"
                            placeholder="Phone"
                          />
                          <label className={`absolute left-0 -top-3 text-sm font-medium transition-all duration-300 ${focusedField === 'phone' || formData.phone ? 'text-green-600 -translate-y-1' : 'text-gray-400 translate-y-4'}`}>
                            Phone Number
                          </label>
                        </div>

                        <div className="relative">
                          <select
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('inquiry')}
                            onBlur={() => setFocusedField('')}
                            className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 appearance-none"
                          >
                            <option value="general">General Question</option>
                            <option value="products">Product Info</option>
                            <option value="wholesale">Bulk Orders</option>
                            <option value="support">Need Help</option>
                            <option value="partnership">Partnership</option>
                          </select>
                          <label className="absolute left-0 -top-3 text-sm font-medium text-green-600">
                            What's this about?
                          </label>
                        </div>
                      </div>

                      <div className="relative">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField('')}
                          required
                          className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 peer placeholder-transparent"
                          placeholder="Subject"
                        />
                        <label className={`absolute left-0 -top-3 text-sm font-medium transition-all duration-300 ${focusedField === 'subject' || formData.subject ? 'text-green-600 -translate-y-1' : 'text-gray-400 translate-y-4'}`}>
                          Subject *
                        </label>
                      </div>

                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField('')}
                          required
                          rows="4"
                          className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 resize-none peer placeholder-transparent"
                          placeholder="Your message"
                        />
                        <label className={`absolute left-0 -top-3 text-sm font-medium transition-all duration-300 ${focusedField === 'message' || formData.message ? 'text-green-600 -translate-y-1' : 'text-gray-400 translate-y-4'}`}>
                          Your Message *
                        </label>
                      </div>

                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="group relative w-full md:w-auto px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-2xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-center">
                          <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                          Send Message
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full transform -translate-x-16 translate-y-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Sun className="w-8 h-8 text-yellow-300 mr-3 animate-spin" style={{animationDuration: '8s'}} />
                    <h3 className="text-2xl font-bold">Get In Touch</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-green-200 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-green-100 mb-1">Visit Us</p>
                        <p className="text-sm opacity-90">
                          1234 Organic Valley Rd<br />
                          Green Hills, CA 95432
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-green-200 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-green-100 mb-1">Call Us</p>
                        <p className="text-sm opacity-90">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-green-200 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-green-100 mb-1">Email Us</p>
                        <p className="text-sm opacity-90">hello@organicfarm.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-green-200 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-green-100 mb-1">Hours</p>
                        <p className="text-sm opacity-90">
                          Mon-Fri: 8AM-6PM<br />
                          Weekend: 9AM-4PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-black text-green-600 mb-2">15+</div>
                  <div className="text-sm font-medium text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-black text-emerald-600 mb-2">500+</div>
                  <div className="text-sm font-medium text-gray-600">Happy Customers</div>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-center text-white shadow-2xl">
                <Leaf className="w-12 h-12 mx-auto mb-3 text-yellow-100" />
                <h4 className="font-bold text-lg mb-2">100% Organic</h4>
                <p className="text-sm text-yellow-100">Certified organic since 2008</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20">
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-8 bg-gradient-to-r from-gray-50 to-green-50">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Find Our Farm</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Located in the beautiful organic valley, surrounded by rolling hills and fresh air. 
                    Come visit us for farm tours and fresh produce!
                  </p>
                </div>
              </div>
              
              <div className="h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.0029536488996!2d83.2589843!3d17.744499999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29a6e3081c9c8329%3A0x6fa6bf5ab5a112f3!2sVasmi%20Group%20-%20Best%20Digital%20marketing%20Company%20In%20Vizag%20%7C%20Advertising%20agency%20in%20Vizag%20%7C%20Web%20development%20company%20in%20vizag!5e0!3m2!1sen!2sin!4v1753093094976!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-110 saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;