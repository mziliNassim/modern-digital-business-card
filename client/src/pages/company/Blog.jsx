import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  Tag,
  TrendingUp,
  BookOpen,
  Share2,
  Heart,
  MessageCircle,
  Eye,
  Sparkles,
  Filter,
  Search,
  ChevronRight,
} from "lucide-react";

const Blog = () => {
  // Multiple refs for different sections
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const postsRef = useRef(null);
  const categoriesRef = useRef(null);
  const newsletterRef = useRef(null);

  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuredInView = useInView(featuredRef, {
    once: true,
    margin: "-100px",
  });
  const postsInView = useInView(postsRef, { once: true, margin: "-100px" });
  const categoriesInView = useInView(categoriesRef, {
    once: true,
    margin: "-100px",
  });
  const newsletterInView = useInView(newsletterRef, {
    once: true,
    margin: "-100px",
  });

  // Animation controls
  const heroControls = useAnimation();
  const featuredControls = useAnimation();
  const postsControls = useAnimation();
  const categoriesControls = useAnimation();
  const newsletterControls = useAnimation();

  // Trigger animations
  useEffect(() => {
    if (heroInView) heroControls.start("visible");
  }, [heroInView, heroControls]);

  useEffect(() => {
    if (featuredInView) featuredControls.start("visible");
  }, [featuredInView, featuredControls]);

  useEffect(() => {
    if (postsInView) postsControls.start("visible");
  }, [postsInView, postsControls]);

  useEffect(() => {
    if (categoriesInView) categoriesControls.start("visible");
  }, [categoriesInView, categoriesControls]);

  useEffect(() => {
    if (newsletterInView) newsletterControls.start("visible");
  }, [newsletterInView, newsletterControls]);

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
  const featuredPost = {
    id: 1,
    title: "The Future of Digital Networking: 5 Trends to Watch in 2025",
    excerpt:
      "Discover how AI, blockchain, and immersive technologies are reshaping professional networking in the digital age.",
    image: "/api/placeholder/800/400",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    tags: ["AI", "Blockchain", "Networking"],
    views: "2.1k",
    likes: "127",
    comments: "23",
  };

  const blogPosts = [
    {
      id: 2,
      title: "10 Creative Ways to Use Digital Business Cards",
      excerpt:
        "Beyond basic contact sharing - innovative strategies to maximize your digital card's impact.",
      image: "/api/placeholder/400/250",
      author: "Michael Rodriguez",
      date: "Dec 12, 2024",
      readTime: "5 min read",
      category: "Tips & Tricks",
      tags: ["Creative", "Strategy"],
      views: "1.8k",
      likes: "94",
      comments: "18",
    },
    {
      id: 3,
      title: "Sustainable Networking: Why Digital Cards Matter",
      excerpt:
        "The environmental impact of traditional business cards and how going digital makes a difference.",
      image: "/api/placeholder/400/250",
      author: "Emily Johnson",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Sustainability",
      tags: ["Environment", "Eco-friendly"],
      views: "1.5k",
      likes: "86",
      comments: "15",
    },
    {
      id: 4,
      title: "Building Your Personal Brand with Digital Cards",
      excerpt:
        "How to create a memorable digital presence that stands out in a crowded marketplace.",
      image: "/api/placeholder/400/250",
      author: "David Park",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      category: "Branding",
      tags: ["Personal Brand", "Design"],
      views: "2.3k",
      likes: "142",
      comments: "31",
    },
    {
      id: 5,
      title: "Analytics Deep Dive: Understanding Your Card Performance",
      excerpt:
        "Make data-driven decisions with comprehensive insights into your digital business card metrics.",
      image: "/api/placeholder/400/250",
      author: "Lisa Wong",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      category: "Analytics",
      tags: ["Data", "Performance"],
      views: "1.2k",
      likes: "67",
      comments: "12",
    },
    {
      id: 6,
      title: "Team Collaboration: Digital Cards for Organizations",
      excerpt:
        "Streamline your team's networking efforts with coordinated digital business card strategies.",
      image: "/api/placeholder/400/250",
      author: "James Thompson",
      date: "Dec 3, 2024",
      readTime: "6 min read",
      category: "Team Management",
      tags: ["Collaboration", "Teams"],
      views: "1.7k",
      likes: "103",
      comments: "25",
    },
    {
      id: 7,
      title: "Integration Guide: Connecting Your Digital Card to CRM",
      excerpt:
        "Step-by-step instructions for seamlessly connecting your digital cards with popular CRM systems.",
      image: "/api/placeholder/400/250",
      author: "Rachel Adams",
      date: "Nov 30, 2024",
      readTime: "10 min read",
      category: "Integration",
      tags: ["CRM", "Automation"],
      views: "998",
      likes: "54",
      comments: "8",
    },
  ];

  const categories = [
    {
      name: "Technology",
      count: 15,
      icon: TrendingUp,
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "Tips & Tricks",
      count: 23,
      icon: BookOpen,
      color: "from-green-500 to-teal-600",
    },
    {
      name: "Sustainability",
      count: 8,
      icon: Heart,
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Branding",
      count: 12,
      icon: Sparkles,
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "Analytics",
      count: 9,
      icon: TrendingUp,
      color: "from-indigo-500 to-blue-600",
    },
    {
      name: "Team Management",
      count: 6,
      icon: User,
      color: "from-purple-500 to-pink-600",
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
            <BookOpen className="w-4 h-4 mr-2" />
            Insights & Resources
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="block text-gray-900 dark:text-white">
              Digital Networking
            </span>
            <span className="block bg-gradient-to-r from-[#f35a57] via-[#e14d4a] to-[#d94744] bg-clip-text text-transparent">
              Insights & Tips
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8"
          >
            Stay ahead of the curve with expert insights, practical tips, and
            the latest trends in digital networking and professional
            connections.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            variants={staggerItem}
            className="max-w-2xl mx-auto relative"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, tips, and insights..."
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

      {/* Categories Section */}
      <section
        ref={categoriesRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={categoriesControls}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}
                >
                  <category.icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">
                  {category.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ({category.count})
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Featured Post */}
      <section
        ref={featuredRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={featuredControls}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Article
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our latest insights on digital networking trends
          </p>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={featuredControls}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="h-64 lg:h-full bg-gradient-to-br from-[#f35a57] to-[#d94744] relative"
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/30" />
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-[#f35a57]/10 text-[#f35a57] px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {featuredPost.readTime}
                </div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {featuredPost.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#f35a57] to-[#d94744] rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {featuredPost.author}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Author
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{featuredPost.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{featuredPost.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{featuredPost.comments}</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-6 py-3 bg-[#f35a57] text-white font-semibold rounded-xl hover:bg-[#f35a57]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section
        ref={postsRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={postsControls}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Fresh insights and expert tips for digital networking success
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </motion.button>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={postsControls}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={staggerItem}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="h-48 bg-gradient-to-br from-[#f35a57] to-[#d94744] relative"
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white/30" />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#f35a57] transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#f35a57] to-[#d94744] rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {post.author}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-xs">{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{post.likes}</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="group inline-flex items-center mt-4 text-[#f35a57] font-medium hover:text-[#f35a57]/80 transition-colors"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={postsControls}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-[#f35a57] font-semibold rounded-xl border-2 border-[#f35a57] hover:bg-[#f35a57]/5 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Load More Articles</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section
        ref={newsletterRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={newsletterControls}
          className="bg-gradient-to-r from-[#f35a57] to-[#d94744] rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Share2 className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay in the Loop
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest digital networking tips, trends, and insights
              delivered straight to your inbox. Join 10,000+ professionals who
              stay ahead of the curve.
            </p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 text-gray-900 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                Subscribe
              </motion.button>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-sm opacity-75 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
