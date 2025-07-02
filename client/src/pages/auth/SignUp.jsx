import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  UserPlus,
  Phone,
  Building,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    newsletter: false,
  });

  const [animationStep, setAnimationStep] = useState(0);
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Calculate password strength
    const password = signUpData.password;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  }, [signUpData.password]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignUpData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (signUpData.password !== signUpData.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    if (!signUpData.acceptTerms) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully! Welcome aboard!");
    }, 2500);
  };

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 1) return "bg-red-500";
    if (passwordStrength <= 2) return "bg-yellow-500";
    if (passwordStrength <= 3) return "bg-blue-500";
    return "bg-green-500";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 1) return "Weak";
    if (passwordStrength <= 2) return "Fair";
    if (passwordStrength <= 3) return "Good";
    return "Strong";
  };

  const features = [
    {
      icon: Sparkles,
      text: "Create unlimited digital cards",
      color: "text-purple-500",
    },
    {
      icon: Zap,
      text: "Instant sharing with smart links",
      color: "text-blue-500",
    },
    {
      icon: Globe,
      text: "Connect globally, grow locally",
      color: "text-green-500",
    },
    {
      icon: Shield,
      text: "Bank-level security & privacy",
      color: "text-orange-500",
    },
    {
      icon: UserPlus,
      text: "Team collaboration tools",
      color: "text-pink-500",
    },
  ];

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Account Security", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#101828] flex">
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
                rotateY: animationStep * 72,
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-32 h-20 bg-white rounded-lg shadow-lg mx-auto mb-4 flex items-center justify-center"
            >
              <div className="text-[#f35a57] font-bold text-lg">
                {animationStep === 0 && "👤"}
                {animationStep === 1 && "✨"}
                {animationStep === 2 && "🚀"}
                {animationStep === 3 && "🌟"}
                {animationStep === 4 && "💼"}
              </div>
            </motion.div>
            <h2 className="text-2xl font-bold mb-2">
              Join 50,000+ Professionals
            </h2>
            <p className="text-white/80">
              Start building your digital brand today
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
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-8 h-8 bg-white/30 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-32 left-16 w-6 h-6 bg-white/20 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/2 left-10 w-4 h-4 bg-white/25 rounded-full"
          />
        </div>
      </div>

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
              <UserPlus className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Create Account
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Join thousands of professionals building their digital presence
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    currentStep >= step.number
                      ? "bg-[#f35a57] border-[#f35a57] text-white"
                      : "border-gray-300 dark:border-gray-600 text-gray-400"
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </motion.div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                      currentStep > step.number
                        ? "bg-[#f35a57]"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={signUpData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#f35a57] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={signUpData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#f35a57] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={signUpData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#f35a57] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={signUpData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#f35a57] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company <span className="text-gray-400">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={signUpData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#f35a57] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        value={signUpData.password}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#f35a57] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                        placeholder="Create a strong password"
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

                    {/* Password Strength Indicator */}
                    {signUpData.password && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            Password Strength:
                          </span>
                          <span
                            className={`font-medium ${
                              passwordStrength <= 1
                                ? "text-red-500"
                                : passwordStrength <= 2
                                ? "text-yellow-500"
                                : passwordStrength <= 3
                                ? "text-blue-500"
                                : "text-green-500"
                            }`}
                          >
                            {getPasswordStrengthText()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                          <div
                            className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                            style={{
                              width: `${(passwordStrength / 4) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        name="confirmPassword"
                        value={signUpData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#f35a57] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      >
                        {isConfirmPasswordVisible ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    {/* Password Match Indicator */}
                    {signUpData.confirmPassword && (
                      <div className="mt-2 flex items-center space-x-2">
                        {signUpData.password === signUpData.confirmPassword ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-green-500">
                              Passwords match
                            </span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-red-500" />
                            <span className="text-sm text-red-500">
                              Passwords don't match
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Terms and Newsletter */}
                  <div className="space-y-3">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={signUpData.acceptTerms}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#f35a57] border-gray-300 dark:border-gray-600 rounded focus:ring-[#f35a57] focus:ring-2 bg-white dark:bg-gray-800 mt-1"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        I agree to the{" "}
                        <a
                          href="#"
                          className="text-[#f35a57] hover:text-[#d14743] transition-colors"
                        >
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="text-[#f35a57] hover:text-[#d14743] transition-colors"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>

                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={signUpData.newsletter}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#f35a57] border-gray-300 dark:border-gray-600 rounded focus:ring-[#f35a57] focus:ring-2 bg-white dark:bg-gray-800 mt-1"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Send me updates about new features and tips
                      </span>
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex space-x-4">
              {currentStep > 1 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={prevStep}
                  className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-4 rounded-xl transition-all duration-200"
                >
                  Back
                </motion.button>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={currentStep === 2 ? handleSubmit : nextStep}
                disabled={isLoading}
                className="flex-1 bg-[#f35a57] hover:bg-[#d14743] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>
                      {currentStep === 2 ? "Create Account" : "Continue"}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>
          </div>

          {/* Sign In Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-6 text-gray-600 dark:text-gray-400"
          >
            Already have an account?{" "}
            <Link
              to="/auth/signin"
              className="text-[#f35a57] hover:text-[#d14743] font-semibold transition-colors"
            >
              Sign in here
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
