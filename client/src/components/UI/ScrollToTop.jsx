import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 cursor-pointer z-50 p-3 rounded-full backdrop-blur-sm border bg-[#f35a57]/10 border-[#f35a57]/20 text-[#f35a57] hover:bg-[#f35a57]/20 dark:bg-[#f35a57]/20 dark:border-[#f35a57]/30 dark:hover:bg-[#f35a57]/30 transition-all duration-300"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>
    </>
  );
};

export default ScrollToTop;
