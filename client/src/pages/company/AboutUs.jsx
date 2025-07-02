import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  Heart,
  Rocket,
  Globe,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const AboutUs = () => {
  // Multiple refs for different sections
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const achievementsRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);

  // InView hooks for each section
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const achievementsInView = useInView(achievementsRef, {
    once: true,
    margin: "-100px",
  });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  // Animation controls for each section
  const heroControls = useAnimation();
  const storyControls = useAnimation();
  const valuesControls = useAnimation();
  const achievementsControls = useAnimation();
  const teamControls = useAnimation();
  const ctaControls = useAnimation();

  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) {
      heroControls.start("visible");
    }
  }, [heroInView, heroControls]);

  useEffect(() => {
    if (storyInView) {
      storyControls.start("visible");
    }
  }, [storyInView, storyControls]);

  useEffect(() => {
    if (valuesInView) {
      valuesControls.start("visible");
    }
  }, [valuesInView, valuesControls]);

  useEffect(() => {
    if (achievementsInView) {
      achievementsControls.start("visible");
    }
  }, [achievementsInView, achievementsControls]);

  useEffect(() => {
    if (teamInView) {
      teamControls.start("visible");
    }
  }, [teamInView, teamControls]);

  useEffect(() => {
    if (ctaInView) {
      ctaControls.start("visible");
    }
  }, [ctaInView, ctaControls]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly push boundaries to create cutting-edge digital networking solutions.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Connection",
      description:
        "Building meaningful relationships through seamless digital interactions.",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: Heart,
      title: "Authenticity",
      description:
        "Helping professionals showcase their true identity in the digital world.",
      color: "from-pink-400 to-red-500",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "Delivering exceptional quality in every aspect of our platform.",
      color: "from-green-400 to-teal-500",
    },
  ];

  const achievements = [
    { number: "50K+", label: "Happy Users", icon: Users },
    { number: "200K+", label: "Cards Created", icon: Sparkles },
    { number: "150+", label: "Countries", icon: Globe },
    { number: "99.9%", label: "Uptime", icon: Award },
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      description: "Visionary leader with 10+ years in digital innovation.",
      gradient: "from-[#f35a57] to-[#ff6b68]",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      description: "Tech expert passionate about scalable solutions.",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      name: "Emily Johnson",
      role: "Head of Design",
      description: "Creative mind behind our beautiful user experiences.",
      gradient: "from-pink-500 to-violet-600",
    },
  ];

  return (
    <div className="relative bg-white dark:bg-[#101828] overflow-hidden transition-colors duration-300">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-20 w-96 h-96 bg-[#f35a57]/10 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [5, -5, 5],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 -right-20 w-80 h-80 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [-5, 5, -5],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-40 w-72 h-72 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 lg:pt-40 lg:pb-24"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={heroControls}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-[#f35a57]/10 border border-[#f35a57]/20 text-[#f35a57] text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Our Story
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <motion.span
              variants={staggerItem}
              className="block text-gray-900 dark:text-white"
            >
              Revolutionizing
            </motion.span>
            <motion.span
              variants={staggerItem}
              className="block bg-gradient-to-r from-[#f35a57] via-[#e14d4a] to-[#d94744] bg-clip-text text-transparent"
            >
              Digital Networking
            </motion.span>
            <motion.span
              variants={staggerItem}
              className="block text-gray-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl mt-2"
            >
              One Connection at a Time
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            We're on a mission to transform how professionals connect and share
            their identity. Born from the frustration of outdated paper business
            cards, we've created a platform that makes networking{" "}
            <span className="text-[#f35a57] font-semibold">
              effortless, sustainable, and memorable
            </span>
            .
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section
        ref={storyRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={storyControls}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              From Paper Cards to
              <span className="text-[#f35a57] relative ml-2">
                Digital Dreams
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 100 10"
                  fill="none"
                >
                  <motion.path
                    d="M0 8C20 4 40 2 60 4C80 6 90 8 100 6"
                    stroke="#f35a57"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={
                      storyInView ? { pathLength: 1 } : { pathLength: 0 }
                    }
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
              </span>
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={storyControls}
              className="space-y-4 text-gray-600 dark:text-gray-300"
            >
              <motion.p
                variants={staggerItem}
                className="text-lg leading-relaxed"
              >
                It all started in 2019 when our founder, Sarah, attended a
                networking event and realized she'd forgotten her business cards
                at home. That moment of frustration sparked an idea that would
                change everything.
              </motion.p>
              <motion.p
                variants={staggerItem}
                className="text-lg leading-relaxed"
              >
                What if networking could be instant, eco-friendly, and always
                accessible? What if your professional identity could evolve as
                you grow? These questions drove us to create the most intuitive
                digital business card platform.
              </motion.p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate={storyControls}
              className="flex items-start space-x-4 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl"
            >
              <div className="w-12 h-12 bg-[#f35a57]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-[#f35a57]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To empower every professional with tools that make networking
                  natural, meaningful, and accessible to everyone, everywhere.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={storyControls}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl">
              {/* Timeline */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={storyControls}
                className="space-y-6"
              >
                {[
                  { year: "2019", desc: "The spark of an idea" },
                  { year: "2020", desc: "First prototype launched" },
                  { year: "2022", desc: "10,000+ happy users" },
                  { year: "2024", desc: "Global expansion" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex items-center space-x-4"
                  >
                    <motion.div
                      className="w-4 h-4 bg-[#f35a57] rounded-full"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {item.year}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {item.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-[#f35a57]/10 rounded-2xl flex items-center justify-center"
            >
              <Lightbulb className="w-8 h-8 text-[#f35a57]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={valuesControls}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The principles that guide everything we do and shape our vision for
            the future
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={valuesControls}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <value.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section
        ref={achievementsRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={achievementsControls}
          className="bg-gradient-to-r from-[#f35a57] to-[#d94744] rounded-3xl p-8 lg:p-12 text-white"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Every milestone represents thousands of meaningful connections
              made possible
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={achievementsControls}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="text-center group"
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <achievement.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  className="text-3xl lg:text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={achievementsInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {achievement.number}
                </motion.div>
                <div className="text-sm opacity-90">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section
        ref={teamRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={teamControls}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet the Visionaries
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The passionate team behind your digital networking revolution
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={teamControls}
          className="grid md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl font-bold text-white">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
                {member.name}
              </h3>
              <div className="text-[#f35a57] font-medium text-center mb-3">
                {member.role}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={ctaControls}
          className="text-center bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 lg:p-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Ready to Join Our Journey?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Be part of the networking revolution. Create your digital business
            card today and experience the future of professional connections.
          </motion.p>

          <motion.button
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(243, 90, 87, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#f35a57] to-[#d94744] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.span
              className="relative z-10 flex items-center"
              whileHover={{ x: 5 }}
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
