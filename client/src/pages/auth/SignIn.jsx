import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Check,
  User,
  Sparkles,
  Zap,
  Globe,
  Shield,
  ChevronLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignInData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Welcome back! Sign in successful.");
    }, 2000);
  };

  const handleForgotPasswordSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Password reset link sent to your email!");
      setShowForgotPassword(false);
    }, 2000);
  };

  const features = [
    {
      icon: Sparkles,
      text: "Create stunning digital cards",
      color: "text-purple-500",
    },
    {
      icon: Zap,
      text: "Share instantly with QR codes",
      color: "text-blue-500",
    },
    {
      icon: Globe,
      text: "Global networking made easy",
      color: "text-green-500",
    },
    {
      icon: Shield,
      text: "Enterprise-grade security",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#101828] flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-gradient-to-r from-[#f35a57] to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
            >
              <User className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {showForgotPassword ? "Reset Password" : "Welcome Back"}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {showForgotPassword
                ? "Enter your email to receive a reset link"
                : "Sign in to your digital business card platform"}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {showForgotPassword ? (
              // Forgot Password Form
              <motion.div
                key="forgot-password"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={forgotPasswordEmail}
                      onChange={(e) => setForgotPasswordEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#f35a57] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                      placeholder="Enter your registered email"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleForgotPasswordSubmit}
                  disabled={isLoading}
                  className="w-full bg-[#f35a57] hover:bg-[#d14743] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Reset Link</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Back to Sign In */}
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="w-full text-sm text-[#f35a57] hover:text-[#d14743] transition-colors flex items-center justify-center space-x-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back to Sign In</span>
                </button>
              </motion.div>
            ) : (
              // Regular Sign In Form
              <motion.div
                key="sign-in"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Username Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Username or Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="username"
                      value={signInData.username}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#f35a57] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                      placeholder="Enter your username or email"
                      required
                    />
                  </div>
                </motion.div>

                {/* Password Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      value={signInData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#f35a57] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {isPasswordVisible ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </motion.div>

                {/* Remember Me & Forgot Password */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-between"
                >
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={signInData.remember}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#f35a57] border-gray-300 dark:border-gray-600 rounded focus:ring-[#f35a57] focus:ring-2 bg-white dark:bg-gray-800"
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Remember me
                    </span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-[#f35a57] hover:text-[#d14743] transition-colors"
                  >
                    Forgot password?
                  </button>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-[#f35a57] hover:bg-[#d14743] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sign Up Link */}
          {!showForgotPassword && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-center mt-6 text-gray-600 dark:text-gray-400"
            >
              Don't have an account?{" "}
              <Link
                to="/auth/signup"
                className="text-[#f35a57] hover:text-[#d14743] font-semibold transition-colors"
              >
                Sign up here
              </Link>
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Right Side - Animation */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#f35a57] to-pink-600 dark:from-[#f35a57] dark:to-red-600 items-center justify-center p-12 relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 border border-white rounded-full"></div>
          <div className="absolute bottom-40 right-10 w-16 h-16 border border-white rounded-full"></div>
        </div>

        <div className="text-center text-white z-10">
          {/* Main Animation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/30 shadow-2xl"
          >
            <motion.div
              animate={{
                rotateY: animationStep * 90,
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-32 h-20 bg-white rounded-lg shadow-lg mx-auto mb-4 flex items-center justify-center"
            >
              <div className="text-[#f35a57] font-bold text-lg">
                {animationStep === 0 && "BC"}
                {animationStep === 1 && "QR"}
                {animationStep === 2 && "📱"}
                {animationStep === 3 && "🌐"}
              </div>
            </motion.div>
            <h2 className="text-2xl font-bold mb-2">Digital Business Cards</h2>
            <p className="text-white/80">
              Transform your networking experience
            </p>
          </motion.div>

          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
              >
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">{feature.text}</span>
                <Check className="w-4 h-4 text-green-300 ml-auto" />
              </motion.div>
            ))}
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-6 h-6 bg-white/30 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-32 left-16 w-4 h-4 bg-white/20 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
