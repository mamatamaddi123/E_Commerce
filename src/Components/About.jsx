import React, { useState, useEffect } from 'react';
import { Leaf, Heart, Users, Award, ChevronRight, Star, Sun, Droplets } from 'lucide-react';

const About= () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '10K+', label: 'Happy Customers', icon: Heart },
    { number: '500+', label: 'Organic Products', icon: Leaf },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Farm Partners', icon: Users },
  ];

  const values = [
    {
      icon: Sun,
      title: 'Sustainability First',
      description: 'We believe in nurturing the earth for future generations through sustainable farming practices and eco-friendly packaging.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Pure & Natural',
      description: 'Every product is carefully selected and tested to ensure it meets our strict organic standards without harmful chemicals.',
      color: 'from-pink-400 to-red-500'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Supporting local farmers and communities while building lasting relationships with our customers and partners.',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Droplets,
      title: 'Quality Assured',
      description: 'From seed to shelf, we maintain the highest quality standards through rigorous testing and careful handling.',
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  const team = [
    {
      name: 'Sarah Green',
      role: 'Founder & CEO',
      bio: 'Passionate organic advocate with 20+ years in sustainable agriculture',
      image: '🌱'
    },
    {
      name: 'Michael Earth',
      role: 'Head of Operations',
      bio: 'Expert in organic supply chain management and quality control',
      image: '🌿'
    },
    {
      name: 'Emma Pure',
      role: 'Product Development',
      bio: 'Dedicated to discovering and curating the finest organic products',
      image: '🌾'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-500/10 to-green-600/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 animate-bounce">
              <Leaf className="w-4 h-4 mr-2" />
              100% Certified Organic
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Growing a
              <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Healthier Future
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From our organic farms to your family table, we're committed to delivering pure, 
              natural products that nourish your body and protect our planet.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Our Products
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-emerald-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-on-scroll"
                id={`stat-${index}`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 mb-4 group-hover:scale-110 transition-transform duration-300 ${isVisible[`stat-${index}`] ? 'animate-bounce' : ''}`}>
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission/Vision Tabs */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Purpose & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what drives us to create a more sustainable and healthy world
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            {activeTab === 'mission' && (
              <div className="text-center animate-fade-in">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl mx-auto">
                  To make organic, sustainable products accessible to everyone while supporting 
                  regenerative farming practices that heal our planet. We believe that what's good 
                  for the earth is good for our bodies, and we're committed to proving it one 
                  product at a time.
                </p>
                <div className="flex justify-center">
                  <Leaf className="w-12 h-12 text-green-500" />
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center animate-fade-in">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl mx-auto">
                  A world where organic living is the norm, not the exception. We envision 
                  thriving communities built around sustainable agriculture, where farmers 
                  prosper, families flourish, and the environment regenerates for future generations.
                </p>
                <div className="flex justify-center">
                  <Sun className="w-12 h-12 text-yellow-500" />
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Values</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="group">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${value.color} mb-4`}>
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate individuals dedicated to bringing you the finest organic products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center animate-on-scroll"
                id={`team-${index}`}
              >
                <div className={`bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 ${isVisible[`team-${index}`] ? 'animate-fade-in' : ''}`}>
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            Join the Organic Revolution
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Go Organic?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Start your journey toward healthier living with our premium organic products. 
            Your body and the planet will thank you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center">
              Shop Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default About;