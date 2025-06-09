import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { Check, Zap, BarChart3, Palette, Users, Link } from "lucide-react";

const DashbordFeature = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start({ opacity: 1, y: 0 });
    } else {
      mainControls.start({ opacity: 0, y: 50 });
    }
  }, [inView, mainControls]);

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Instantly edit and update your card details anytime, anywhere.",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      text: "Monitor who views and interacts with your card for actionable insights.",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      text: "Personalize your card with templates, colors, and branding.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Organize and export saved contacts from your shared cards.",
    },
    {
      icon: <Link className="w-5 h-5" />,
      text: "Sync your card with CRM tools and social profiles for a cohesive experience.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#101828] transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#f35a57]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#f35a57]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-screen-xl px-4 py-16 mx-auto lg:py-24 lg:px-6">
        <div
          ref={ref}
          className="items-center gap-12 lg:grid lg:grid-cols-2 xl:gap-20"
        >
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-[#f35a57] bg-[#f35a57]/10 rounded-full border border-[#f35a57]/20"
            >
              <Zap className="w-4 h-4 mr-2" />
              Smart Dashboard
            </motion.div>

            {/* Main Heading */}
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Smart Dashboard for Managing Your{" "}
              <span className="text-[#f35a57] relative">
                Digital Identity
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
            </h2>

            {/* Description */}
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Take control of your digital presence with an intuitive dashboard
              designed for simplicity and efficiency. Update your information in
              real time, customize your card to match your style, and track
              engagement effortlessly—all from one central hub.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f35a57]/10 rounded-xl flex items-center justify-center text-[#f35a57] group-hover:bg-[#f35a57] group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-base font-medium text-gray-700 dark:text-gray-200 leading-relaxed group-hover:text-[#f35a57] transition-colors duration-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10"
            >
              <button className="group relative px-8 py-4 bg-[#f35a57] text-white font-semibold rounded-xl hover:bg-[#f35a57]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#f35a57] to-[#ff6b68] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mt-12 lg:mt-0"
          >
            {/* Mock Dashboard Image */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#f35a57] rounded-lg"></div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Dashboard
                  </h3>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-600">
                  <div className="text-2xl font-bold text-[#f35a57]">1,234</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Total Views
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-600">
                  <div className="text-2xl font-bold text-[#f35a57]">89</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Contacts
                  </div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-600 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Engagement
                  </span>
                  <div className="w-2 h-2 bg-[#f35a57] rounded-full"></div>
                </div>
                <div className="flex items-end space-x-2 h-16">
                  {[40, 65, 30, 80, 45, 90, 60].map((height, i) => (
                    <div
                      key={i}
                      className="bg-[#f35a57]/20 rounded-t flex-1"
                      style={{ height: `${height}%` }}
                    >
                      <div className="bg-[#f35a57] rounded-t h-1/2 w-full"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-[#f35a57] text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-[#f35a57]/90 transition-colors">
                  Edit Card
                </button>
                <button className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  Share
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-[#f35a57]/10 rounded-full flex items-center justify-center"
            >
              <BarChart3 className="w-8 h-8 text-[#f35a57]" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#f35a57]/10 rounded-full flex items-center justify-center"
            >
              <Users className="w-6 h-6 text-[#f35a57]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashbordFeature;
