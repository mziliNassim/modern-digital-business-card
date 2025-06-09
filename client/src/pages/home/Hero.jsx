import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Users, Zap, ArrowRight, Sparkles, CreditCard } from "lucide-react";

// Import image
import heroImage from "/home/Credit card-pana.svg"; // Adjust path as needed

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start({ opacity: 1, x: 0 });
      imageControls.start({ opacity: 1, x: 0, scale: 1 });
    } else {
      mainControls.start({ opacity: 0, x: -50 });
      imageControls.start({ opacity: 0, x: 50, scale: 0.8 });
    }
  }, [inView, mainControls, imageControls]);

  const floatingElements = [
    { icon: CreditCard, delay: 0.2, x: 20, y: -30 },
    { icon: Users, delay: 0.4, x: -20, y: 20 },
    { icon: Sparkles, delay: 0.6, x: 30, y: 40 },
    { icon: Zap, delay: 0.8, x: -30, y: -20 },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#101828] dark:via-gray-900 dark:to-[#101828] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#f35a57]/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Main Content */}
      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={mainControls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#f35a57]/10 border border-[#f35a57]/20 text-[#f35a57] text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              The Future of Networking
            </motion.div>

            {/* Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="block text-gray-900 dark:text-white">
                  Effortless
                </span>
                <span className="block bg-gradient-to-r from-[#f35a57] via-[#e14d4a] to-[#d94744] bg-clip-text text-transparent">
                  Networking
                </span>
                <span className="block text-gray-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl mt-2">
                  with Digital Business Cards
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              Share your professional identity instantly and seamlessly with a
              digital business card. Connect with anyone, anywhere, and make
              every interaction{" "}
              <span className="text-[#f35a57] font-semibold">memorable</span>.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(243, 90, 87, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#f35a57] to-[#d94744] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Free trial for 30 days
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#d94744] to-[#c23e3b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#f35a57] bg-white dark:bg-gray-800 border-2 border-[#f35a57] rounded-2xl shadow-lg hover:shadow-xl hover:bg-[#f35a57]/5 dark:hover:bg-[#f35a57]/10 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Digital Cards for Teams
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex items-center space-x-8 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  10K+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Active Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  50K+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Cards Created
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  99%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Image + Card Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={imageControls}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image Container */}
              <img
                src={heroImage}
                alt="Digital Business Card Hero"
                className="w-full h-auto object-contain"
              />

              {/* Mock Digital Card Preview */}
              <div className="relative z-10 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-[#f35a57] to-[#d94744] rounded-2xl p-6 text-white shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-white/30 rounded w-3/4"></div>
                      <div className="h-3 bg-white/20 rounded w-1/2"></div>
                      <div className="h-3 bg-white/20 rounded w-2/3"></div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Icons */}
              {floatingElements.map((element, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: element.delay, duration: 0.5 }}
                  className="absolute z-20"
                  style={{
                    top: `${50 + element.y}%`,
                    left: `${50 + element.x}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700"
                  >
                    <element.icon className="w-6 h-6 text-[#f35a57]" />
                  </motion.div>
                </motion.div>
              ))}

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f35a57]/10 to-purple-500/10 rounded-3xl blur-3xl transform scale-110"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 text-gray-100 dark:text-gray-800 fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
