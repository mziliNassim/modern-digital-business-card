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
import NotFound from "./pages/notFound/NotFound.jsx";

const App = () => {
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    // get stored theme from localstorage
    dispatch(getStoredTheme());
  }, []);

  

  return (
    <>
      <div className={theme}>
        <div className="min-h-screen overflow-x-hidden w-full flex flex-col justify-between bg-white text-black dark:text-white dark:bg-gray-900">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
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
