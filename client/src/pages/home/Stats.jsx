import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import {
  Server,
  Users,
  Globe,
  Building2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const mainControls = useAnimation();
  const subControls = useAnimation();
  const [counters, setCounters] = useState({
    uptime: 0,
    users: 0,
    teams: 0,
    countries: 0,
  });

  useEffect(() => {
    if (inView) {
      mainControls.start({ opacity: 1, y: 0 });
      subControls.start({ opacity: 1, y: 0, x: 0 });

      // Animate counters
      const animateCounter = (key, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, 16);
      };

      setTimeout(() => {
        animateCounter("uptime", 99.99, 1500);
        animateCounter("users", 600, 2000);
        animateCounter("teams", 10000, 2500);
        animateCounter("countries", 190, 1800);
      }, 300);
    } else {
      mainControls.start({ opacity: 0, y: 50 });
      subControls.start({ opacity: 0, y: 50, x: 50 });
      setCounters({ uptime: 0, users: 0, teams: 0, countries: 0 });
    }
  }, [inView, mainControls, subControls]);

  const statsData = [
    {
      icon: <Server className="w-8 h-8" />,
      value: `${counters.uptime}%`,
      label: "Uptime",
      description:
        "With zero maintenance downtime, ensuring your cards are always accessible",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: `${counters.users}M+`,
      label: "Users",
      description:
        "Trusted by millions of professionals worldwide for their networking needs",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      value: `${counters.teams.toLocaleString()}+`,
      label: "Teams",
      description:
        "Organizations use our platform to unify branding and streamline introductions",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: `${counters.countries}+`,
      label: "Countries",
      description:
        "Share your digital business card effortlessly across the globe",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#101828] transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(243, 90, 87, 0.1) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f35a57]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#f35a57]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#f35a57]/3 rounded-full blur-3xl"></div>
      </div>

      <div
        ref={ref}
        className="relative max-w-screen-xl px-4 py-16 mx-auto lg:grid lg:grid-cols-5 lg:gap-12 lg:py-24 lg:px-6"
      >
        {/* Left Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-2 mb-12 lg:mb-0"
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-[#f35a57] bg-[#f35a57]/10 rounded-full border border-[#f35a57]/20"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Trusted Worldwide
          </motion.div>

          {/* Main Heading */}
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-5xl">
            Trusted by over{" "}
            <span className="relative text-[#f35a57]">
              600 million users
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
            </span>{" "}
            and 10,000 teams
          </h2>

          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Join thousands of professionals and businesses globally who trust
            our digital business cards to simplify networking. With a focus on
            privacy and data security, we ensure your information is shared
            securely and effortlessly.
          </p>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700"
          >
            <a
              href="/test"
              className="group inline-flex items-center text-base font-semibold text-[#f35a57] hover:text-[#f35a57]/80 transition-all duration-300"
            >
              <span className="mr-2">Explore Legality Guide</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Additional Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 flex items-center space-x-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                99.99% Uptime
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#f35a57] rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Enterprise Ready
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, x: 50 }}
              animate={subControls}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-[#f35a57]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#f35a57]/10 backdrop-blur-sm"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f35a57]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon Container */}
              <div
                className={`relative inline-flex items-center justify-center w-14 h-14 ${stat.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-[#f35a57]">{stat.icon}</div>
              </div>

              {/* Stats Content */}
              <div className="relative">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#f35a57] transition-colors duration-300">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-[#f35a57] mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#f35a57] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f35a57]/20 to-transparent"></div>
    </section>
  );
};

export default Stats;
