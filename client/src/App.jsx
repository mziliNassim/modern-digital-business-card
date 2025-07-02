import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Toaster } from "sonner";

import { setUser } from "./features/userSlice.js";
import { getStoredTheme } from "./features/themeSlice.js";

import NavBar from "./components/UI/NavBar.jsx";
import Footer from "./components/UI/Footer.jsx";
import ScrollToTop from "./components/UI/ScrollToTop.jsx";

import Home from "./pages/home/Home.jsx";

import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";

import Terms from "./pages/ours/Terms.jsx";
import PrivacyPolicy from "./pages/ours/PrivacyPolicy.jsx";
import Security from "./pages/ours/Security.jsx";

import Pricing from "./pages/services/Pricing.jsx";

import AboutUs from "./pages/company/AboutUs.jsx";
import Blog from "./pages/company/Blog.jsx";

import Support from "./pages/company/Support.jsx";

import NotFound from "./pages/notFound/NotFound.jsx";

const App = () => {
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    // get stored theme from localstorage
    dispatch(getStoredTheme());

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading)
    return (
      <div className={theme}>
        <div className="min-h-screen bg-white dark:bg-[#101828] flex items-center justify-center">
          <div className="relative">
            {/* Outer spinning ring */}
            <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 rounded-full animate-spin">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-[#f35a57] rounded-full animate-spin"></div>
            </div>

            {/* Inner pulsing dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#f35a57] rounded-full animate-pulse"></div>
            </div>

            {/* Floating particles */}
            <div
              className="absolute -top-8 -left-8 w-2 h-2 bg-[#f35a57] rounded-full animate-bounce opacity-60"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute -top-6 left-12 w-1.5 h-1.5 bg-[#f35a57] rounded-full animate-bounce opacity-40"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-12 -right-6 w-2 h-2 bg-[#f35a57] rounded-full animate-bounce opacity-50"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-1 h-1 bg-[#f35a57] rounded-full animate-bounce opacity-30"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          {/* Loading text with typewriter effect */}
          <div className="absolute mt-24">
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                <div
                  className="w-1 h-1 bg-[#f35a57] rounded-full animate-bounce"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="w-1 h-1 bg-[#f35a57] rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1 h-1 bg-[#f35a57] rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#f35a57]/5 dark:to-[#f35a57]/10 pointer-events-none"></div>
        </div>
      </div>
    );

  return (
    <>
      <div className={theme}>
        <div className="min-h-screen overflow-x-hidden w-full flex flex-col justify-between bg-white text-black dark:text-white dark:bg-gray-900">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/auth">
              <Route path="" element={<SignIn />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/ours">
              <Route path="" element={<Terms />} />
              <Route path="terms" element={<Terms />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="security" element={<Security />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/company">
              <Route path="about-us" element={<AboutUs />} />
              <Route path="blog" element={<Blog />} />
              <Route path="support" element={<Support />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/services">
              <Route path="" element={<Pricing />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTop />
          <Footer />
          <Toaster theme={theme} />
        </div>
      </div>
    </>
  );
};

export default App;
