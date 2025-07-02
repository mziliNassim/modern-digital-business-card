import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  Search,
  Book,
  Video,
  Users,
  Clock,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  Zap,
  Shield,
  Globe,
  Headphones,
  Star,
  ThumbsUp,
  FileText,
  Download,
  Play,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const Support = () => {
  // Multiple refs for different sections
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);
  const resourcesRef = useRef(null);
  const ticketRef = useRef(null);
  const communityRef = useRef(null);

  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const resourcesInView = useInView(resourcesRef, {
    once: true,
    margin: "-100px",
  });
  const ticketInView = useInView(ticketRef, { once: true, margin: "-100px" });
  const communityInView = useInView(communityRef, {
    once: true,
    margin: "-100px",
  });

  // Animation controls
  const heroControls = useAnimation();
  const contactControls = useAnimation();
  const faqControls = useAnimation();
  const resourcesControls = useAnimation();
  const ticketControls = useAnimation();
  const communityControls = useAnimation();

  // FAQ state
  const [openFAQ, setOpenFAQ] = useState(null);

  // Trigger animations
  useEffect(() => {
    if (heroInView) heroControls.start("visible");
  }, [heroInView, heroControls]);

  useEffect(() => {
    if (contactInView) contactControls.start("visible");
  }, [contactInView, contactControls]);

  useEffect(() => {
    if (faqInView) faqControls.start("visible");
  }, [faqInView, faqControls]);

  useEffect(() => {
    if (resourcesInView) resourcesControls.start("visible");
  }, [resourcesInView, resourcesControls]);

  useEffect(() => {
    if (ticketInView) ticketControls.start("visible");
  }, [ticketInView, ticketControls]);

  useEffect(() => {
    if (communityInView) communityControls.start("visible");
  }, [communityInView, communityControls]);

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
        delayChildren: 0.1,
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

  // Mock data
  const contactOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      color: "from-blue-500 to-blue-600",
      available: "Available 24/7",
      responseTime: "< 2 minutes",
      action: "Start Chat",
    },
    {
      title: "Email Support",
      description: "Send us detailed questions or feedback",
      icon: Mail,
      color: "from-green-500 to-green-600",
      available: "Response within 4 hours",
      responseTime: "< 4 hours",
      action: "Send Email",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      color: "from-purple-500 to-purple-600",
      available: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate",
      action: "Call Now",
    },
    {
      title: "Priority Support",
      description: "Premium support for Pro users",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      available: "Dedicated support team",
      responseTime: "< 1 hour",
      action: "Get Priority",
    },
  ];

  const faqs = [
    {
      question: "How do I create my first digital business card?",
      answer:
        "Creating your first digital business card is simple! Sign up for an account, choose a template, add your information, customize the design, and you're ready to share. The entire process takes less than 5 minutes.",
    },
    {
      question: "Can I customize the design of my digital card?",
      answer:
        "Absolutely! Our platform offers extensive customization options including colors, fonts, layouts, logos, and background images. You can also add interactive elements like social media links, videos, and contact forms.",
    },
    {
      question: "How do I share my digital business card?",
      answer:
        "You can share your digital card through QR codes, direct links, email, text messages, or social media. Recipients don't need to download any app - they can view your card instantly in their browser.",
    },
    {
      question: "Is there a limit to how many cards I can create?",
      answer:
        "Free users can create up to 3 digital cards. Pro users have unlimited card creation, along with advanced features like analytics, custom branding, and priority support.",
    },
    {
      question: "Can I track who views my digital business card?",
      answer:
        "Yes! Our analytics dashboard shows you who viewed your card, when they viewed it, which sections they engaged with most, and provides insights to help you optimize your networking efforts.",
    },
    {
      question: "What happens to my cards if I cancel my subscription?",
      answer:
        "Your cards will remain active, but you'll lose access to premium features. You can always reactivate your subscription to regain full functionality. We also offer data export options.",
    },
    {
      question: "Can I use my digital card offline?",
      answer:
        "While viewing requires an internet connection, you can save your card as a PDF or image for offline sharing. QR codes work offline once generated and can be printed for physical distribution.",
    },
    {
      question: "How secure is my information?",
      answer:
        "We use enterprise-grade security with SSL encryption, secure servers, and comply with GDPR and other privacy regulations. You control what information is shared and can update or delete it anytime.",
    },
  ];

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Complete walkthrough for new users",
      icon: Book,
      type: "Guide",
      readTime: "10 min read",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video instructions",
      icon: Video,
      type: "Videos",
      readTime: "15 tutorials",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Design Best Practices",
      description: "Tips for creating stunning cards",
      icon: Sparkles,
      type: "Guide",
      readTime: "8 min read",
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "API Documentation",
      description: "For developers and integrations",
      icon: FileText,
      type: "Documentation",
      readTime: "Technical",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Networking Tips",
      description: "Maximize your professional connections",
      icon: Users,
      type: "Guide",
      readTime: "12 min read",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      icon: HelpCircle,
      type: "FAQ",
      readTime: "Quick fixes",
      color: "from-red-500 to-red-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      content:
        "The support team is incredibly responsive and helpful. They solved my integration issue within minutes!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Sales Manager",
      company: "InnovateCo",
      content:
        "Best customer support I've experienced. The live chat feature is a game-changer for quick questions.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "StartupXYZ",
      content:
        "Their comprehensive documentation and tutorials made onboarding our entire team seamless.",
      rating: 5,
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
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16"
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
            <Headphones className="w-4 h-4 mr-2" />
            24/7 Support
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="block text-gray-900 dark:text-white">
              We're Here to
            </span>
            <span className="block bg-gradient-to-r from-[#f35a57] via-[#e14d4a] to-[#d94744] bg-clip-text text-transparent">
              Help You Succeed
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8"
          >
            Get instant support, comprehensive resources, and expert guidance to
            make the most of your digital networking experience. Our dedicated
            team is ready to help you succeed.
          </motion.p>

          {/* Quick Search */}
          <motion.div
            variants={staggerItem}
            className="max-w-2xl mx-auto relative"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search help articles, guides, and FAQs..."
                className="w-full pl-12 pr-4 py-4 text-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f35a57] focus:border-transparent shadow-lg"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#f35a57] text-white px-6 py-2 rounded-xl hover:bg-[#f35a57]/90 transition-colors"
              >
                Search
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Options */}
      <section
        ref={contactRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={contactControls}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Support Channel
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Multiple ways to get the help you need, when you need it
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={contactControls}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactOptions.map((option, index) => (
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
                className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <option.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {option.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4 mr-2" />
                  {option.available}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Zap className="w-4 h-4 mr-2" />
                  Response: {option.responseTime}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group-hover:bg-[#f35a57] group-hover:text-white"
              >
                {option.action}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section
        ref={faqRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={faqControls}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Quick answers to common questions about our platform
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={faqControls}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </motion.div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === index ? "auto" : 0,
                  opacity: openFAQ === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Resources Section */}
      <section
        ref={resourcesRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={resourcesControls}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Help Resources
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive guides, tutorials, and documentation to help you
            succeed
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={resourcesControls}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <motion.div
                className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <resource.icon className="w-6 h-6 text-white" />
              </motion.div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#f35a57] bg-[#f35a57]/10 px-2 py-1 rounded-full">
                  {resource.type}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {resource.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#f35a57] transition-colors">
                {resource.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {resource.description}
              </p>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-[#f35a57] font-medium group-hover:text-[#f35a57]/80 transition-colors"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Support Ticket Section */}
      <section
        ref={ticketRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={ticketControls}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Submit a Support Ticket
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Need personalized help? Send us a detailed message and we'll get
              back to you quickly.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f35a57] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f35a57] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f35a57] focus:border-transparent"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Priority Level
                </label>
                <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f35a57] focus:border-transparent">
                  <option>Low - General question</option>
                  <option>Medium - Need help with feature</option>
                  <option>High - Account or billing issue</option>
                  <option>Critical - Service not working</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f35a57] focus:border-transparent resize-none"
                  placeholder="Please describe your issue or question in detail..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#f35a57] to-[#d94744] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Submit Ticket
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={ticketControls}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What to Expect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#f35a57]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-[#f35a57]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Quick Response
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We typically respond within 4 hours during business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#f35a57]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-[#f35a57]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Expert Support
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our team has deep knowledge of the platform and networking
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#f35a57]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-[#f35a57]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Global Support
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We provide support in multiple languages across all
                      timezones
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#f35a57]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-[#f35a57]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Satisfaction Guaranteed
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We'll work with you until your issue is completely
                      resolved
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Before You Submit
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      1
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Check our FAQs
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Your question might already be answered in our knowledge
                      base
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      2
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Include details
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Screenshots, error messages, and steps to reproduce help
                      us help you faster
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      3
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Check your email
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We'll send all correspondence to the email address you
                      provide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section
        ref={communityRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={communityControls}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with other users, share tips, and get help from the
            community
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={communityControls}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">
              Community Forum
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Ask questions, share ideas, and learn from thousands of active
              users
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Visit Forum
            </motion.button>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">
              Weekly Webinars
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Join live training sessions and Q&A with our product experts
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              View Schedule
            </motion.button>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <ThumbsUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">
              User Groups
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Connect with users in your industry or region for specialized
              networking
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Find Groups
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={communityControls}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied users
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={communityControls}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#f35a57] to-[#d94744] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={communityControls}
          className="bg-gradient-to-r from-[#f35a57] to-[#d94744] rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Our customer success team is standing by to assist you with any
            questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#f35a57] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Support Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-300"
            >
              Explore Documentation
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Support;
