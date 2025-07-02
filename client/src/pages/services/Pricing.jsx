import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Zap,
  Gem,
  Briefcase,
  Star,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const PricingCard = ({ id, title, price, features, isPopular, period }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const popularFeatures = {
    Basic: <Briefcase className="w-6 h-6 text-blue-500" />,
    Professional: <Zap className="w-6 h-6 text-[#f35a57]" />,
    Enterprise: <Gem className="w-6 h-6 text-purple-500" />,
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * id }}
      whileHover={{ y: -12, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative h-full flex flex-col rounded-3xl overflow-hidden transition-all duration-500 backdrop-blur-sm ${
        isPopular
          ? "bg-gradient-to-br from-[#f35a57]/10 via-white to-[#f35a57]/5 dark:from-[#f35a57]/20 dark:via-[#101828] dark:to-[#f35a57]/10 border-2 border-[#f35a57] shadow-2xl shadow-[#f35a57]/20"
          : "bg-white/80 dark:bg-[#101828]/90 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl"
      }`}
    >
      {isPopular && (
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="absolute -top-1 -right-1 bg-gradient-to-r from-[#f35a57] to-[#e04a47] text-white px-6 py-2 text-xs font-bold rounded-bl-2xl rounded-tr-3xl flex items-center gap-1"
        >
          <Sparkles className="w-3 h-3" />
          MOST POPULAR
        </motion.div>
      )}

      <div className="flex flex-col flex-1 p-8">
        <div className="flex items-center gap-4 mb-8">
          <div
            className={`p-3 rounded-2xl ${
              isPopular
                ? "bg-[#f35a57]/10 dark:bg-[#f35a57]/20"
                : "bg-gray-50 dark:bg-gray-800/50"
            }`}
          >
            {popularFeatures[title]}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <div className="mb-8">
          <div className="flex items-end mb-2">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + 0.1 * id, type: "spring" }}
              className="text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            >
              ${price}
            </motion.span>
            <span className="ml-3 text-xl text-gray-500 dark:text-gray-400 mb-2">
              /{period}
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Billed annually or ${Math.round(price * 1.2)} monthly
          </p>
        </div>

        <ul className="flex-1 space-y-4 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-start group"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f35a57]/10 dark:bg-[#f35a57]/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-[#f35a57]/20 dark:group-hover:bg-[#f35a57]/30 transition-colors">
                <Check className="w-4 h-4 text-[#f35a57]" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 group ${
            isPopular
              ? "bg-gradient-to-r from-[#f35a57] to-[#e04a47] text-white hover:from-[#e04a47] hover:to-[#d63b38] shadow-lg shadow-[#f35a57]/30"
              : "bg-white dark:bg-gray-800 text-[#f35a57] hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-[#f35a57]/20 hover:border-[#f35a57] shadow-md"
          }`}
        >
          Get Started
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`absolute inset-0 -z-10 rounded-3xl blur-2xl ${
              isPopular
                ? "bg-gradient-to-br from-[#f35a57]/30 to-[#e04a47]/20"
                : "bg-gradient-to-br from-gray-200/50 to-gray-300/30 dark:from-gray-700/30 dark:to-gray-600/20"
            }`}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Pricing = () => {
  const [period, setPeriod] = useState("year");
  const [isAnnual, setIsAnnual] = useState(true);
  const containerRef = useRef(null);

  const plans = [
    {
      id: 1,
      title: "Basic",
      price: period === "year" ? "9" : "11",
      features: [
        "1 Digital Business Card",
        "Basic Templates",
        "Contact Information",
        "Social Media Links",
        "QR Code Sharing",
      ],
    },
    {
      id: 2,
      title: "Professional",
      price: period === "year" ? "29" : "35",
      features: [
        "5 Digital Business Cards",
        "Premium Templates",
        "Custom Branding",
        "Analytics Dashboard",
        "Lead Generation Tools",
        "Priority Support",
      ],
      isPopular: true,
    },
    {
      id: 3,
      title: "Enterprise",
      price: period === "year" ? "99" : "119",
      features: [
        "Unlimited Cards",
        "Custom Design Service",
        "Team Management",
        "API Access",
        "White-label Solution",
        "24/7 Support",
      ],
    },
  ];

  const togglePeriod = () => {
    setIsAnnual(!isAnnual);
    setPeriod(isAnnual ? "month" : "year");
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#101828] dark:via-[#0f1419] dark:to-[#101828] relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#f35a57]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-6"
          >
            Flexible Pricing Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Choose the perfect plan that fits your business needs and unlock
            your potential
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 w-fit mx-auto border border-gray-200/50 dark:border-gray-700/50"
          >
            <span
              className={`px-4 py-2 font-semibold transition-colors duration-300 ${
                !isAnnual
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Monthly
            </span>

            <motion.button
              onClick={togglePeriod}
              whileTap={{ scale: 0.95 }}
              className={`relative w-16 h-8 mx-4 rounded-full p-1 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-[#f35a57]/20 ${
                isAnnual
                  ? "bg-gradient-to-r from-[#f35a57] to-[#e04a47]"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <motion.span
                layout
                className="inline-block w-6 h-6 rounded-full bg-white shadow-lg"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{
                  x: isAnnual ? 32 : 0,
                }}
              />
            </motion.button>

            <span
              className={`px-4 py-2 font-semibold transition-colors duration-300 ${
                isAnnual
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Annual
              <span className="ml-2 text-[#f35a57] font-bold text-sm bg-[#f35a57]/10 px-2 py-1 rounded-full">
                20% off
              </span>
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20"
        >
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              {...plan}
              period={period}
              price={
                period === "year" ? plan.price : Math.round(plan.price * 1.2)
              }
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need a custom solution?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our sales team to discuss enterprise solutions,
            volume discounts, and custom integrations tailored to your
            organization.
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-2xl text-white bg-gradient-to-r from-[#f35a57] to-[#e04a47] hover:from-[#e04a47] hover:to-[#d63b38] shadow-xl shadow-[#f35a57]/30 transition-all duration-300 group"
          >
            Contact Sales
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
