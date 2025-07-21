import React, { useState, useMemo } from 'react';
import { ChevronDown, Leaf, Sparkles, Heart, Shield, Search } from 'lucide-react';

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [search, setSearch] = useState('');

  const faqs = [
    {
      category: "Product Benefits",
      icon: <Sparkles className="w-5 h-5" />,
      questions: [
        {
          q: "What makes organic hair care products better than conventional ones?",
          a: "Organic hair care products are formulated without harsh chemicals like sulfates, parabens, and synthetic fragrances. They use natural ingredients that nourish your hair and scalp without stripping away essential oils, leading to healthier, stronger hair over time."
        },
        {
          q: "How long does it take to see results with organic hair products?",
          a: "Most people notice improved hair texture and reduced irritation within 2-3 weeks. Significant improvements in hair strength, shine, and overall health typically become visible after 6-8 weeks of consistent use as your hair adjusts to the gentle, natural formulations."
        },
        {
          q: "Are organic products suitable for all hair types?",
          a: "Yes! Our organic formulations are designed to work with your hair's natural properties. We offer specific products for oily, dry, curly, straight, color-treated, and damaged hair, all using organic ingredients tailored to each hair type's unique needs."
        }
      ]
    },
    {
      category: "Ingredients & Safety",
      icon: <Leaf className="w-5 h-5" />,
      questions: [
        {
          q: "What certifications do your organic products have?",
          a: "All our products are certified organic by USDA Organic and COSMOS Organic standards. We also maintain cruelty-free certifications from Leaping Bunny and are registered with the Vegan Society for our plant-based formulations."
        },
        {
          q: "Do you use any preservatives in organic products?",
          a: "We use only natural, organic-approved preservatives like rosemary extract, vitamin E, and organic acids to ensure product safety and shelf life. These natural preservatives are gentle on your hair while maintaining product integrity."
        },
        {
          q: "Are your products safe for pregnant and nursing mothers?",
          a: "Our organic formulations are made with pregnancy-safe ingredients and contain no harmful chemicals. However, we always recommend consulting with your healthcare provider before trying new products during pregnancy or while nursing."
        }
      ]
    },
    {
      category: "Usage & Application",
      icon: <Heart className="w-5 h-5" />,
      questions: [
        {
          q: "How often should I wash my hair with organic shampoo?",
          a: "Most people find 2-3 times per week optimal with organic shampoos. Since they're gentler than conventional shampoos, you may need to adjust your washing frequency. Oily hair types might need daily washing initially, while dry hair can often go longer between washes."
        },
        {
          q: "Why doesn't organic shampoo lather as much as regular shampoo?",
          a: "Organic shampoos don't contain sulfates (SLS/SLES), which create artificial lather. The gentle cleansing comes from natural surfactants that clean effectively without excessive foam. Less lather actually means gentler cleansing for your hair and scalp."
        },
        {
          q: "Can I mix organic products with conventional hair treatments?",
          a: "While organic products work best as a complete system, they can be integrated gradually. We recommend transitioning slowly to allow your hair to adjust. Avoid using conventional products with harsh chemicals immediately after organic treatments for best results."
        }
      ]
    },
    {
      category: "Purchasing & Guarantee",
      icon: <Shield className="w-5 h-5" />,
      questions: [
        {
          q: "Do you offer a money-back guarantee?",
          a: "Yes! We offer a 60-day money-back guarantee on all products. If you're not completely satisfied with your organic hair care results, return the products (even if used) for a full refund within 60 days of purchase."
        },
        {
          q: "How should I store organic hair care products?",
          a: "Store products in a cool, dry place away from direct sunlight. Organic products have a shelf life of 12-24 months unopened, and 6-12 months once opened. Always check the expiration date and look for any changes in smell, color, or texture."
        },
        {
          q: "Do you offer subscription services or bulk discounts?",
          a: "We offer convenient subscription services with 15% savings and free shipping. Bulk orders of 3+ products receive a 10% discount. Subscribers get early access to new products and exclusive seasonal promotions."
        }
      ]
    }
  ];

  // Filtered questions based on search
  const filteredFaqs = useMemo(() => {
    if (!search.trim()) return faqs;
    return faqs.map(cat => ({
      ...cat,
      questions: cat.questions.filter(faq =>
        faq.q.toLowerCase().includes(search.toLowerCase()) ||
        faq.a.toLowerCase().includes(search.toLowerCase())
      )
    })).filter(cat => cat.questions.length > 0);
  }, [search, faqs]);

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-x-hidden">
      {/* SVG Pattern Background */}
      <svg className="absolute top-0 left-0 w-full h-64 opacity-10 z-0" viewBox="0 0 1440 320"><path fill="#34d399" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white z-10">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
                <Leaf className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-100">
              FAQ
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our organic hair care products
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-300 to-teal-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-20 z-10 relative">
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <div className="relative w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full py-3 pl-12 pr-4 rounded-full border border-green-200 shadow focus:outline-none focus:ring-2 focus:ring-green-300 text-gray-700 bg-white"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 w-5 h-5" />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {faqs.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => { setActiveCategory(idx); setOpenIndex(null); }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold shadow transition-all duration-200 border-2 ${activeCategory === idx ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-500 scale-105' : 'bg-white text-green-700 border-green-200 hover:bg-green-50'}`}
            >
              <span>{cat.icon}</span>
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="space-y-10">
          {(search.trim() ? filteredFaqs : [faqs[activeCategory]]).map((category, categoryIndex) => (
            <div key={category.category}>
              {/* Category Header (only show if searching or multiple categories) */}
              {(search.trim() || filteredFaqs.length > 1) && (
                <div className="flex items-center mb-6 pb-2 border-b border-green-100">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white mr-3 shadow-lg">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{category.category}</h2>
                </div>
              )}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const isOpen = openIndex === `${category.category}-${questionIndex}`;
                  return (
                    <div
                      key={questionIndex}
                      className="group rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-green-100"
                    >
                      <button
                        className="w-full text-left p-6 focus:outline-none focus:ring-4 focus:ring-green-200 transition-all duration-300 flex items-center justify-between"
                        onClick={() => toggleFAQ(category.category, questionIndex)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${category.category}-${questionIndex}`}
                      >
                        <span className="text-lg font-semibold text-gray-800 pr-4 group-hover:text-green-600 transition-colors duration-300">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 text-green-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''} group-hover:text-green-600`}
                        />
                      </button>
                      <div
                        id={`faq-panel-${category.category}-${questionIndex}`}
                        className={`grid transition-all duration-500 ease-in-out bg-green-50 border-t border-green-50 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                        style={{
                          overflow: 'hidden',
                        }}
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed pt-4" style={{ minHeight: isOpen ? 'auto' : 0 }}>
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
                {category.questions.length === 0 && (
                  <div className="text-gray-400 italic text-center py-8">No questions found.</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Contact Buttons (Mobile) */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 sm:hidden">
          <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Contact Support
          </button>
          <button className="px-6 py-3 border-2 border-green-600 text-green-700 bg-white rounded-full font-semibold shadow-lg hover:bg-green-50 hover:text-green-800 transition-all duration-300">
            Live Chat
          </button>
        </div>

        {/* Contact Section (Desktop) */}
        <div className="mt-20 text-center hidden sm:block">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Our organic hair care experts are here to help you find the perfect products for your hair journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Contact Support
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="fixed top-1/4 -left-20 w-40 h-40 bg-green-200 rounded-full opacity-20 blur-3xl pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-1/4 -right-20 w-32 h-32 bg-emerald-300 rounded-full opacity-20 blur-3xl pointer-events-none animate-pulse"></div>
    </div>
  );
};

export default FAQS;

