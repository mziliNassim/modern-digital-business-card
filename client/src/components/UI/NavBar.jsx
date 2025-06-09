import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { storeTheme, toggleTheme } from "../../features/themeSlice";
import {
  Sun,
  Moon,
  Search,
  User,
  ChevronDown,
  Menu,
  X,
  Settings,
  LogOut,
} from "lucide-react";

// Mock logo for demo
const appLogo = "/vite.svg";

const NavBar = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  // const user = { username: "John Doe", email: "john@example.com", avatar: null};

  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const profileRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Digital Business Cards", path: "/digital-cards" },
    { name: "For Businesses & Teams", path: "/business-teams" },
    { name: "Pricing", path: "/pricing" },
  ];

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleNavClick = (linkName) => {
    setActiveLink(linkName);
    setIsMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg ${
        isScrolled
          ? "bg-white/95 dark:bg-[#101828]/95 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30"
          : "bg-white dark:bg-[#101828] shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/" className="flex cursor-pointer items-center space-x-3">
              <div className="relative">
                <motion.img
                  src={appLogo}
                  alt="Logo"
                  className="w-10 h-10 rounded-xl shadow-lg"
                  whileHover={{ rotate: 5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#f35a57]/20 to-[#f35a57]/40 rounded-xl"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#f35a57] to-[#d94744] bg-clip-text text-transparent">
                DBC
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link.name)}
                  className={`relative cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    activeLink === link.name
                      ? "text-[#f35a57] bg-[#f35a57]/10"
                      : "text-gray-700 dark:text-gray-300 hover:text-[#f35a57] hover:bg-gray-100 dark:hover:bg-gray-800/50"
                  }`}
                >
                  {link.name}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#f35a57] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: activeLink === link.name ? "80%" : 0 }}
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={handleThemeToggle}
              className="p-2.5 rounded-xl cursor-pointer bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-md"
              whileHover={{ scale: 1.05, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            {/* User Actions */}
            {user ? (
              <>
                {/* Search Button */}
                <motion.button
                  className="hidden md:flex p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="w-5 h-5" />
                </motion.button>

                {/* User Profile */}
                <div className="relative" ref={profileRef}>
                  <motion.button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative">
                      <img
                        src={
                          user.avatar ||
                          `https://ui-avatars.com/api/?name=${user.username}`
                        }
                        alt="Profile"
                        className="w-8 h-8 rounded-full border-2 border-[#f35a57] shadow-sm"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-[#101828]"></div>
                    </div>
                    <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#f35a57] transition-colors">
                      {user.username}
                    </span>
                    <motion.div
                      animate={{ rotate: isProfileOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-[#f35a57] transition-colors" />
                    </motion.div>
                  </motion.button>

                  {/* Profile Dropdown */}
                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 overflow-hidden"
                      >
                        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {user.username}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {user.email}
                          </p>
                        </div>
                        <Link
                          to="/profile"
                          className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#f35a57] transition-all duration-200"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <User className="w-4 h-4 mr-3" />
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#f35a57] transition-all duration-200"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </Link>
                        <hr className="my-2 border-gray-200 dark:border-gray-700" />
                        <button
                          className="flex items-center w-full px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
                          onClick={() => {
                            setIsProfileOpen(false);
                            // Handle logout
                          }}
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Sign out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <motion.div
                className="hidden md:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="relative cursor-pointer px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#f35a57] to-[#d94744] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden group">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d94744] to-[#c23e3b] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </button>
              </motion.div>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white/98 dark:bg-[#101828]/98 backdrop-blur-md"
            >
              <div className="py-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.name)}
                      className={`block px-4 py-3 text-base font-medium rounded-xl mx-2 transition-all duration-200 ${
                        activeLink === link.name
                          ? "text-[#f35a57] bg-[#f35a57]/10 border-l-4 border-[#f35a57]"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-[#f35a57] hover:translate-x-1"
                      }`}
                    >
                      {link.name}
                    </button>
                  </motion.div>
                ))}

                {/* Mobile Actions */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4 mx-2 space-y-2">
                  {user ? (
                    <>
                      <button className="flex items-center w-full px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-200">
                        <Search className="w-5 h-5 mr-3" />
                        Search
                      </button>
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <User className="w-5 h-5 mr-3" />
                        Profile
                      </Link>
                    </>
                  ) : (
                    <Link
                      to="/get-started"
                      className="block px-4 py-3 mt-2 text-center text-base font-semibold text-white bg-gradient-to-r from-[#f35a57] to-[#d94744] rounded-xl shadow-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;
