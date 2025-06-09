import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, MessageCircle, Search } from "lucide-react";

const Frequently = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [openItems, setOpenItems] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Sample FAQ data (replace with your actual data)
  const faqs = [
    {
      id: 1,
      question: "How secure are digital business cards?",
      answer:
        "Our digital business cards use enterprise-grade encryption and secure cloud infrastructure. All data is protected with SSL encryption, and we follow strict privacy protocols to ensure your information remains safe and confidential.",
    },
    {
      id: 2,
      question: "Can I customize my digital business card design?",
      answer:
        "Absolutely! You can choose from multiple professional templates, customize colors, fonts, layouts, and add your company branding. Our design editor makes it easy to create a card that perfectly represents your professional identity.",
    },
    {
      id: 3,
      question: "How do I share my digital business card?",
      answer:
        "You can share your card through QR codes, NFC tapping, direct links, email, social media, or even embed it on your website. Recipients don't need to download any app to view your card.",
    },
    {
      id: 4,
      question: "What analytics can I track?",
      answer:
        "Track views, clicks, contact saves, and engagement metrics. See when and where your card is viewed, which contact methods are used most, and get insights to optimize your networking efforts.",
    },
    {
      id: 5,
      question: "Is there a limit to how many cards I can create?",
      answer:
        "Our plans offer different card limits. Free users get 1 card, Pro users get unlimited personal cards, and Enterprise plans include team management with unlimited cards for all team members.",
    },
    {
      id: 6,
      question: "Can I integrate with CRM systems?",
      answer:
        "Yes! We integrate with popular CRM platforms like Salesforce, HubSpot, and others. Automatically sync new contacts and leads directly into your existing workflow and sales pipeline.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (inView) {
      mainControls.start({ opacity: 1, y: 0 });
    } else {
      mainControls.start({ opacity: 0, y: 50 });
    }
  }, [inView, mainControls]);

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#101828] transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#f35a57]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#f35a57]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#f35a57]/3 rounded-full blur-3xl"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(243, 90, 87, 0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div
        ref={ref}
        className="relative max-w-4xl px-4 py-16 mx-auto lg:py-24 lg:px-6"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-[#f35a57] bg-[#f35a57]/10 rounded-full border border-[#f35a57]/20"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-5xl"
          >
            Frequently Asked{" "}
            <span className="relative text-[#f35a57]">
              Questions
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 100 10"
                fill="none"
              >
                <path
                  d="M0 8C20 4 40 2 60 4C80 6 90 8 100 6"
                  stroke="#f35a57"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Find answers to common questions about our digital business cards
            and platform features.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative max-w-md mx-auto mt-8"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#f35a57]/20 focus:border-[#f35a57] transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </motion.div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#f35a57]/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f35a57]/10 rounded-xl flex items-center justify-center mt-1">
                    <MessageCircle className="w-5 h-5 text-[#f35a57]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-[#f35a57] transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openItems[faq.id] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openItems[faq.id] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 ml-14">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFaqs.length === 0 && searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No results found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try searching with different keywords or browse all questions
              above.
            </p>
          </motion.div>
        )}

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center p-8 bg-gradient-to-br from-[#f35a57]/5 to-transparent rounded-2xl border border-[#f35a57]/10"
        >
          <div className="w-16 h-16 bg-[#f35a57]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-[#f35a57]" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Can't find the answer you're looking for? Our support team is here
            to help.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-[#f35a57] text-white font-semibold rounded-xl hover:bg-[#f35a57]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Contact Support
            <MessageCircle className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Frequently;
