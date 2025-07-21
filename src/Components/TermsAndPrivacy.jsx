import { useState } from 'react';

export default function LegalDocuments() {
  const [activeTab, setActiveTab] = useState('terms');

  const showPanel = (panelName) => {
    setActiveTab(panelName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-lime-900 to-green-800 font-sans text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-lime-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-lime-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-lime-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 max-w-6xl mx-auto p-8">
       

        {/* Navigation Tabs */}
        <div className="flex mb-8 p-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
          <button
            className={`flex-1 p-6 text-center text-lg font-semibold transition-all duration-500 rounded-xl relative group ${
              activeTab === 'terms'
                ? 'bg-gradient-to-r from-emerald-500 to-lime-600 text-white shadow-lg shadow-emerald-500/25 transform scale-105'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
            onClick={() => showPanel('terms')}
          >
            <span className="relative z-10">Terms & Conditions</span>
            {activeTab === 'terms' && (
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-lime-600 rounded-xl blur opacity-50"></div>
            )}
            {activeTab !== 'terms' && (
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-lime-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </button>
          <button
            className={`flex-1 p-6 text-center text-lg font-semibold transition-all duration-500 rounded-xl relative group ${
              activeTab === 'privacy'
                ? 'bg-gradient-to-r from-emerald-700 to-lime-500 text-white shadow-lg shadow-emerald-700/25 transform scale-105'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
            onClick={() => showPanel('privacy')}
          >
            <span className="relative z-10">Privacy Policy</span>
            {activeTab === 'privacy' && (
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-lime-500 rounded-xl blur opacity-50"></div>
            )}
            {activeTab !== 'privacy' && (
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/20 to-lime-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </button>
        </div>

        {/* Content Panels */}
        <div className="bg-white/10 backdrop-blur-2xl p-12 rounded-3xl border border-white/20 shadow-2xl">
          {/* Terms & Conditions Panel */}
          {activeTab === 'terms' && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent mb-6">
                  Terms & Conditions
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-lime-600 rounded-full mx-auto"></div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-500/20 to-lime-600/20 p-6 border border-emerald-400/30 mb-8 rounded-2xl backdrop-blur-sm">
                <p className="font-semibold text-emerald-100 text-center">Please read these Terms and Conditions carefully before using our organic products and services.</p>
              </div>

              <div className="space-y-8">
                <section className="group">
                  <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-gradient-to-r from-emerald-400 to-transparent flex items-center">
                    <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">1. Acceptance of Terms</span>
                    <div className="ml-4 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                  </h2>
                  <p className="text-slate-300 leading-relaxed">By purchasing, using, or accessing our organic products and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our products or services.</p>
                </section>

                <section className="group">
                  <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-gradient-to-r from-emerald-400 to-transparent flex items-center">
                    <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">2. Product Information</span>
                    <div className="ml-4 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h3 className="text-xl font-semibold text-emerald-300 mb-3">2.1 Organic Certification</h3>
                      <p className="text-slate-300 leading-relaxed">All products labeled as "organic" meet or exceed the organic standards established by relevant certification bodies. We maintain current organic certifications and comply with applicable organic regulations.</p>
                    </div>
                    
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h3 className="text-xl font-semibold text-emerald-300 mb-3">2.2 Product Descriptions</h3>
                      <p className="text-slate-300 leading-relaxed">We strive to provide accurate product descriptions, ingredients, and nutritional information. However, we cannot guarantee that all information is completely error-free. Please check product labels and consult healthcare professionals for specific dietary needs.</p>
                    </div>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-gradient-to-r from-emerald-400 to-transparent flex items-center">
                    <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">3. Ordering and Payment</span>
                    <div className="ml-4 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105">
                      <h3 className="text-xl font-semibold text-emerald-300 mb-3">3.1 Order Acceptance</h3>
                      <p className="text-slate-300 leading-relaxed">All orders are subject to acceptance and availability. We reserve the right to refuse or cancel orders at our discretion.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105">
                      <h3 className="text-xl font-semibold text-emerald-300 mb-3">3.2 Pricing</h3>
                      <p className="text-slate-300 leading-relaxed">Prices are subject to change without notice. The price charged will be the price in effect at the time of order confirmation.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105">
                      <h3 className="text-xl font-semibold text-emerald-300 mb-3">3.3 Payment Terms</h3>
                      <p className="text-slate-300 leading-relaxed">Payment is due at the time of order. We accept various payment methods as indicated at checkout.</p>
                    </div>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-gradient-to-r from-emerald-400 to-transparent flex items-center">
                    <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">4. Shipping and Delivery</span>
                    <div className="ml-4 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                  </h2>
                  <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/30">
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full mr-4"></div>
                        We will make reasonable efforts to deliver products within estimated timeframes
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full mr-4"></div>
                        Shipping costs and delivery times vary based on location and shipping method
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full mr-4"></div>
                        Risk of loss transfers to you upon delivery
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full mr-4"></div>
                        Fresh and perishable organic products require special handling and prompt delivery acceptance
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-gradient-to-r from-emerald-400 to-transparent flex items-center">
                    <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">5. Health and Safety</span>
                    <div className="ml-4 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                  </h2>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 p-6 border border-yellow-400/30 mb-6 rounded-2xl backdrop-blur-sm">
                    <p className="font-semibold text-yellow-100 text-center">⚠ Important: Our organic products are not intended to diagnose, treat, cure, or prevent any disease. Consult healthcare professionals for medical advice.</p>
                  </div>
                </section>

                {/* Contact Information Card */}
                <div className="bg-gradient-to-br from-emerald-500/10 to-lime-600/10 p-8 rounded-2xl border border-emerald-400/30 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-emerald-300 mb-6 text-center">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-slate-300">
                    <div>
                      <p className="mb-2"><span className="font-semibold text-emerald-300">Company:</span> [Your Organic Company Name]</p>
                      <p className="mb-2"><span className="font-semibold text-emerald-300">Address:</span> [Your Business Address]</p>
                    </div>
                    <div>
                      <p className="mb-2"><span className="font-semibold text-emerald-300">Email:</span> [Your Email Address]</p>
                      <p className="mb-2"><span className="font-semibold text-emerald-300">Phone:</span> [Your Phone Number]</p>
                    </div>
                  </div>
                </div>

                <div className="text-center text-slate-400 italic mt-12 pt-6 border-t border-slate-600/30">
                  Last Updated: [Date]
                </div>
              </div>
            </div>
          )}

          {/* Privacy Policy Panel */}
          {activeTab === 'privacy' && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent mb-6">
                  Privacy Policy
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-lime-600 rounded-full mx-auto"></div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-500/20 to-lime-600/20 p-6 border border-emerald-400/30 mb-8 rounded-2xl backdrop-blur-sm">
                <p className="font-semibold text-emerald-100 text-center">Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.</p>
              </div>

              <div className="space-y-8">
                <section className="group">
                  <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-gradient-to-r from-emerald-400 to-transparent flex items-center">
                    <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">1. Information We Collect</span>
                    <div className="ml-4 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-emerald-300 mb-4">1.1 Personal Information</h3>
                      <p className="text-slate-300 mb-4">We collect information you provide directly:</p>
                      <div className="space-y-2 text-slate-400">
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
                          Name, email, phone number
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
                          Billing and shipping addresses
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
                          Payment information
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
                          Purchase history
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-emerald-300 mb-4">1.2 Automatically Collected</h3>
                      <p className="text-slate-300 mb-4">We automatically collect:</p>
                      <div className="space-y-2 text-slate-400">
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
                          IP address and device info
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
                          Browser type and version
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
                          Usage data
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
                          Cookies and tracking
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-gradient-to-r from-emerald-400 to-transparent flex items-center">
                    <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">2. How We Use Your Information</span>
                    <div className="ml-4 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                  </h2>
                  <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/30">
                    <div className="grid md:grid-cols-2 gap-4 text-slate-300">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full mr-4"></div>
                        Processing and fulfilling orders
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full mr-4"></div>
                        Customer service and support
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full mr-4"></div>
                        Marketing communications
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full mr-4"></div>
                        Improving our services
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full mr-4"></div>
                        Fraud prevention
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full mr-4"></div>
                        Legal compliance
                      </div>
                    </div>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-gradient-to-r from-emerald-400 to-transparent flex items-center">
                    <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">3. Your Rights</span>
                    <div className="ml-4 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: "Access", desc: "Request information about your personal data" },
                      { title: "Correction", desc: "Update or correct inaccurate information" },
                      { title: "Deletion", desc: "Request deletion of your personal data" },
                      { title: "Portability", desc: "Receive your data in portable format" },
                      { title: "Opt-out", desc: "Unsubscribe from marketing" },
                      { title: "Restriction", desc: "Limit how we process your data" }
                    ].map((right, index) => (
                      <div key={index} className="bg-gradient-to-br from-emerald-500/10 to-lime-600/10 p-6 rounded-xl border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105">
                        <h4 className="font-bold text-emerald-300 mb-2">{right.title}</h4>
                        <p className="text-slate-400 text-sm">{right.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-emerald-500/10 to-lime-600/10 p-8 rounded-2xl border border-emerald-400/30 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-emerald-300 mb-6 text-center">Privacy Contact</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-slate-300">
                    <div>
                      <p className="mb-2"><span className="font-semibold text-emerald-300">Privacy Officer:</span></p>
                      <p className="mb-2"><span className="font-semibold text-emerald-300">Company:</span> [Your Organic Company Name]</p>
                      <p className="mb-2"><span className="font-semibold text-emerald-300">Email:</span> privacy@[yourdomain].com</p>
                    </div>
                    <div>
                      <p className="mb-2"><span className="font-semibold text-emerald-300">Address:</span> [Your Business Address]</p>
                      <p className="mb-2"><span className="font-semibold text-emerald-300">Phone:</span> [Your Phone Number]</p>
                    </div>
                  </div>
                </div>

                <div className="text-center text-slate-400 italic mt-12 pt-6 border-t border-slate-600/30">
                  Last Updated: [Date]
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  );
}