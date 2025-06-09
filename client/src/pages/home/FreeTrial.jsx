import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "motion/react";
import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react";

const FreeTrial = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start({ opacity: 1, y: 0 });
    } else {
      mainControls.start({ opacity: 0, y: 50 });
    }
  }, [inView, mainControls]);

  return (
    <div className="bg-white dark:bg-[#101828] transition-all duration-500">
      <section
        ref={ref}
        className="relative overflow-hidden py-24 px-4 bg-white dark:bg-[#101828] transition-all duration-500"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#f35a57]/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#f35a57]/15 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={mainControls}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-[#f35a57]/10 to-[#f35a57]/5 border border-[#f35a57]/20 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-[#f35a57]" />
              <span className="text-sm font-medium text-gray-700 dark:text-white">
                Limited Time Offer
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight text-gray-900 dark:text-white"
            >
              Start your{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#f35a57] to-[#f35a57]/80 bg-clip-text text-transparent">
                  free trial
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#f35a57] to-[#f35a57]/60 origin-left"
                />
              </span>{" "}
              today
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300"
            >
              Experience the full power of Landwind Platform for{" "}
              <span className="font-semibold text-[#f35a57]">30 days</span>. No
              credit card required, no hidden fees.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
            >
              {[
                { icon: Clock, text: "30-day free access" },
                { icon: Shield, text: "No credit card needed" },
                { icon: Sparkles, text: "Full feature access" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 bg-gray-50/80 dark:bg-white/5 border-gray-200/50 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10"
                >
                  <feature.icon className="w-8 h-8 text-[#f35a57] mx-auto mb-3" />
                  <p className="font-medium text-gray-700 dark:text-white">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="relative"
            >
              <Link to="/signup">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(243, 90, 87, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-12 py-5 bg-gradient-to-r from-[#f35a57] to-[#f35a57]/90 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Free trial for 30 days
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </Link>

              {/* Floating elements around button */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#f35a57]/20 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#f35a57]/30 rounded-full blur-sm"
              />
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-12 text-sm text-gray-500 dark:text-gray-400"
            >
              <p>Join 50,000+ users who trust Landwind Platform</p>
              <div className="flex justify-center items-center gap-2 mt-2">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                    className="text-[#f35a57] text-lg"
                  >
                    ⭐
                  </motion.span>
                ))}
                <span className="ml-2 font-medium">4.9/5 rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FreeTrial;
