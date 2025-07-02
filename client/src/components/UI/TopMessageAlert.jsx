import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertTriangle, X, Code, Wrench } from "lucide-react";

const TopMessageAlert = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isAnimating ? -100 : 0,
          opacity: isAnimating ? 0 : 1,
        }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-gradient-to-r from-amber-500 via-orange-500 to-[#f35a57] shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Alert Content */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-x-3 flex-1 gap-3">
              {/* Icon with animation */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex-shrink-0 flex gap-3 items-center"
              >
                <div className="relative">
                  <Wrench className="w-5 h-5 text-white" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 bg-white/20 rounded-full blur-sm"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-white">
                    Development Mode
                  </span>
                </div>
              </motion.div>

              {/* Message */}
              <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <span className="text-center text-xs sm:text-sm text-white/90 font-medium">
                  🚧 This website is currently under active development. Some
                  features may be limited or unavailable.
                </span>
              </div>

              {/* Close Button */}
              {/* <motion.button
                onClick={handleClose}
                className="flex-shrink-0 ml-4 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              </motion.button> */}
            </div>
          </div>
        </div>

        {/* Subtle pulse effect */}
        <motion.div
          animate={{ opacity: [0.3, 0.1, 0.3] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default TopMessageAlert;
