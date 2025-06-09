import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

import {
  Home,
  Search,
  ArrowLeft,
  Sparkles,
  Moon,
  Sun,
  Ghost,
  Coffee,
  RefreshCw,
  Zap,
  Star,
  Heart,
  Rocket,
  Cloud,
  Music,
  Gamepad2,
  Palette,
  Wand2,
} from "lucide-react";

import { toggleTheme } from "../../features/themeSlice";

const appLogo = "/vite.svg";

const NotFound = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [particles, setParticles] = useState([]);
  const [selectedPortal, setSelectedPortal] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [magicWords] = useState([
    "Abracadabra",
    "Alakazam",
    "Shazam",
    "Hocus Pocus",
    "Voilà",
    "Eureka!",
  ]);
  const [currentMagicWord, setCurrentMagicWord] = useState(0);
  const [ghostPosition, setGhostPosition] = useState({
    left: "10%",
    bottom: "10%",
  });

  // Set random position on component mount
  useEffect(() => {
    setGhostPosition({
      left: `${Math.random() * 80 + 10}%`, // Between 10% and 90%
      bottom: `${Math.random() * 80 + 10}%`, // Between 10% and 90%
    });
  }, []);

  // Enhanced particle system with different types
  useEffect(() => {
    const particleTypes = ["star", "heart", "sparkle", "dot", "triangle"];
    const colors = ["red", "blue", "purple", "pink", "yellow", "green"];

    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 4,
      type: particleTypes[Math.floor(Math.random() * particleTypes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 0.5 + Math.random() * 1.5,
    }));
    setParticles(newParticles);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Magic word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMagicWord((prev) => (prev + 1) % magicWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [magicWords.length]);

  // Glitch effect trigger
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 200);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      }, 1000);
    }
  };

  const portalDestinations = [
    {
      id: 1,
      name: "Home Universe",
      icon: Home,
      color: "from-blue-400 to-purple-600",
      path: "/",
    },
    {
      id: 2,
      name: "Search Galaxy",
      icon: Search,
      color: "from-green-400 to-blue-500",
      path: "/search",
    },
    {
      id: 3,
      name: "Game Dimension",
      icon: Gamepad2,
      color: "from-pink-400 to-red-500",
      path: "/games",
    },
    {
      id: 4,
      name: "Music Realm",
      icon: Music,
      color: "from-yellow-400 to-orange-500",
      path: "/music",
    },
    {
      id: 5,
      name: "Art Studio",
      icon: Palette,
      color: "from-purple-400 to-pink-500",
      path: "/art",
    },
    {
      id: 6,
      name: "Magic Land",
      icon: Wand2,
      color: "from-indigo-400 to-purple-600",
      path: "/magic",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  const glitchVariants = {
    normal: { x: 0, y: 0, rotate: 0, scale: 1 },
    glitch: {
      x: [-2, 2, -1, 1, 0],
      y: [-1, 1, -2, 2, 0],
      rotate: [-1, 1, -0.5, 0.5, 0],
      scale: [1, 1.02, 0.98, 1.01, 1],
      transition: { duration: 0.2 },
    },
  };

  const renderParticle = (particle) => {
    const particleColors = {
      red: "bg-red-400",
      blue: "bg-blue-400",
      purple: "bg-purple-400",
      pink: "bg-pink-400",
      yellow: "bg-yellow-400",
      green: "bg-green-400",
    };

    const baseClasses = "absolute pointer-events-none";

    switch (particle.type) {
      case "star":
        return (
          <motion.div
            key={particle.id}
            className={`${baseClasses} text-${particle.color}-400`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size}rem`,
            }}
            animate={{
              y: [-30, 30],
              rotate: [0, 360],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          >
            <Star className="w-4 h-4 fill-current" />
          </motion.div>
        );
      case "heart":
        return (
          <motion.div
            key={particle.id}
            className={`${baseClasses} text-${particle.color}-400`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size}rem`,
            }}
            animate={{
              y: [-25, 25],
              x: [-10, 10],
              opacity: [0.4, 0.9, 0.4],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-3 h-3 fill-current" />
          </motion.div>
        );
      case "sparkle":
        return (
          <motion.div
            key={particle.id}
            className={`${baseClasses} text-${particle.color}-400`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size}rem`,
            }}
            animate={{
              rotate: [0, 180, 360],
              opacity: [0.2, 1, 0.2],
              scale: [0.3, 1, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-3 h-3" />
          </motion.div>
        );
      case "triangle":
        return (
          <motion.div
            key={particle.id}
            className={`${baseClasses} ${
              particleColors[particle.color]
            } opacity-60`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 8}px`,
              height: `${particle.size * 8}px`,
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
            animate={{
              y: [-20, 20],
              rotate: [0, 120, 240, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        );
      default:
        return (
          <motion.div
            key={particle.id}
            className={`${baseClasses} ${
              particleColors[particle.color]
            } rounded-full opacity-60`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 6}px`,
              height: `${particle.size * 6}px`,
            }}
            animate={{
              y: [-15, 15],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50/30 to-purple-50/20 dark:from-gray-900 dark:via-red-950/20 dark:to-purple-950/10 transition-all duration-500 relative overflow-hidden">
      {/* Enhanced Particle System */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map(renderParticle)}
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center px-6 py-8 text-center relative z-10 min-h-[calc(100vh-120px)]"
      >
        {/* Glitched 404 with Holographic Effect */}
        <motion.div variants={itemVariants} className="mb-8 relative">
          <motion.div
            variants={glitchVariants}
            animate={glitchEffect ? "glitch" : "normal"}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{
                duration: 1.2,
                type: "spring",
                bounce: 0.6,
              }}
              className="relative"
            >
              <div className="text-[12rem] sm:text-[16rem] font-black bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent relative filter drop-shadow-2xl">
                404
                {/* Holographic layers */}
                <motion.div
                  className="absolute inset-0 text-[12rem] sm:text-[16rem] font-black text-red-500/20 blur-sm"
                  animate={{ x: [0, 2, 0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  404
                </motion.div>
                <motion.div
                  className="absolute inset-0 text-[12rem] sm:text-[16rem] font-black text-blue-500/20 blur-sm"
                  animate={{ x: [0, -2, 0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  404
                </motion.div>
              </div>

              {/* Floating Icons around 404 */}
              {[Zap, Star, Heart, Rocket, Cloud].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute text-red-500 dark:text-red-400"
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${10 + (index % 2) * 80}%`,
                  }}
                  animate={{
                    y: [-20, 20],
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5, rotateX: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center space-x-3">
              <ArrowLeft className="w-6 h-6" />
              <span>Reverse Portal</span>
            </div>
          </motion.button>

          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05, y: -5, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center space-x-3">
                <Rocket className="w-6 h-6" />
                <span>Launch Home</span>
              </div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Mystical Footer Message */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center space-y-4 text-gray-500 dark:text-gray-400"
        >
          <motion.div
            className="flex items-center space-x-3 text-lg"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.98, 1.02, 0.98],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Coffee className="w-6 h-6" />
            <span className="font-medium">
              Perhaps some cosmic coffee while reality recalibrates?
            </span>
          </motion.div>

          <motion.div
            className="text-sm opacity-75 max-w-md"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            "In the vast digital cosmos, every lost page is just waiting to be
            discovered in another dimension."
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Constellation */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 right-10 w-32 h-32 pointer-events-none"
      >
        <div className="relative w-full h-full">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.cos((i * Math.PI) / 4) * 40 + 50}%`,
                top: `${Math.sin((i * Math.PI) / 4) * 40 + 50}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute w-1 h-1 bg-white/30"
              style={{
                left: "50%",
                top: "50%",
                width: "40%",
                height: "1px",
                transformOrigin: "left center",
                transform: `rotate(${i * 45}deg) translateX(10%)`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Ghost Easter Egg */}
      <motion.div
        className="absolute cursor-pointer"
        whileHover={{ scale: 1.2, y: -10 }}
        whileTap={{ scale: 0.9 }}
        style={{
          left: ghostPosition.left,
          bottom: ghostPosition.bottom,
          zIndex: 10,
        }}
        onClick={() =>
          toast.success("Boo! You found the ghost! 👻", {
            action: { label: "x" },
          })
        }
      >
        <Ghost className="w-8 h-8 text-gray-400 dark:text-gray-600" />
      </motion.div>
    </div>
  );
};

export default NotFound;
