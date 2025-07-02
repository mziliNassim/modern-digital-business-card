import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Github,
  Heart,
  Sparkles,
} from "lucide-react";

const appLogo = "/logo/dbc white.png";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start({ opacity: 1, y: 0 });
    } else {
      mainControls.start({ opacity: 0, y: 50 });
    }
  }, [inView, mainControls]);

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Pricing", href: "/services/pricing" },
        {
          name: "Digital Business Cards",
          href: "/services/digital-business-cards",
        },
        {
          name: "Digital Business Cards for Teams",
          href: "/services/businesses-teams",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", href: "/company/about-us" },
        { name: "Careers", href: "/company/careers" },
        { name: "Blog", href: "/company/blog" },
        { name: "Events", href: "/company/events" },
      ],
    },
    {
      title: "Additional",
      links: [
        { name: "FAQ", href: "/additional/faq" },
        { name: "Partners", href: "/additional/partners" },
        { name: "Contact", href: "/additional/contact" },
        { name: "News", href: "/additional/news" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <div className="relative overflow-hidden transition-all duration-500 bg-white dark:bg-[#101828]">
      <motion.footer
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={mainControls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden bg-white dark:bg-[#101828] border-t border-gray-200 dark:border-white/10"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#f35a57]/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-tr from-[#f35a57]/15 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-5"
            >
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f35a57] to-[#f35a57]/80 rounded-2xl flex items-center justify-center">
                    {/* <Sparkles className="w-6 h-6 text-white" /> */}
                    <motion.img
                      src={appLogo}
                      alt="Logo"
                      className="w-10 h-10 rounded-xl shadow-lg"
                      whileHover={{ rotate: 5 }}
                    />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-1 bg-gradient-to-r from-[#f35a57] to-transparent opacity-20 rounded-2xl blur"
                  />
                </div>
                <span className="text-3xl font-black text-gray-900 dark:text-white">
                  DBC
                </span>
              </motion.div>

              {/* Description */}
              <p className="text-lg leading-relaxed mb-8 text-gray-600 dark:text-gray-300">
                ReadymadeUI is a library of pre-designed UI components built for
                Tailwind CSS. It offers a collection of versatile, ready-to-use
                components that streamline the development process.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "hello@dbc.com" },
                  { icon: Phone, text: "+1 (555) 123-4567" },
                  { icon: MapPin, text: "San Francisco, CA" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg transition-colors bg-gray-100 group-hover:bg-[#f35a57]/10 dark:bg-white/5 dark:group-hover:bg-[#f35a57]/20">
                      <item.icon className="w-4 h-4 transition-colors text-gray-600 group-hover:text-[#f35a57] dark:text-gray-400 dark:group-hover:text-[#f35a57]" />
                    </div>
                    <span className="transition-colors text-gray-600 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <div className="lg:col-span-7 grid md:grid-cols-3 gap-8">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.3 + sectionIndex * 0.1,
                    duration: 0.6,
                  }}
                >
                  <h4 className="text-[#f35a57] font-bold text-lg mb-6 relative">
                    {section.title}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{
                        delay: 0.5 + sectionIndex * 0.1,
                        duration: 0.8,
                      }}
                      className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#f35a57] origin-left"
                    />
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: 0.4 + sectionIndex * 0.1 + linkIndex * 0.05,
                          duration: 0.4,
                        }}
                      >
                        <motion.button
                          whileHover={{ x: 5 }}
                          onClick={() => window.open(link.href, "_blank")}
                          className="group flex items-center gap-2 transition-colors text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                        </motion.button>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8 dark:via-white/20"
          />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6">
              {[
                { name: "Terms of Service", href: "/ours/terms" },
                { name: "Privacy Policy", href: "/ours/privacy-policy" },
                { name: "Security", href: "/ours/security" },
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open(item.href, "_blank")}
                  className="text-sm transition-colors text-gray-600 hover:text-[#f35a57] dark:text-gray-400 dark:hover:text-[#f35a57]"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open(social.href, "_blank")}
                  className="p-3 rounded-full transition-all duration-300 bg-gray-100 hover:bg-[#f35a57]/10 text-gray-600 hover:text-[#f35a57] border border-gray-200 dark:bg-white/5 dark:hover:bg-[#f35a57]/20 dark:text-gray-400 dark:hover:text-[#f35a57] dark:border-white/10"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 pt-8 border-t border-opacity-20 text-center"
          >
            <div className="text-sm flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <span>© 2025 Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-[#f35a57] fill-current" />
              </motion.span>
              <span>by</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() =>
                  window.open("https://nassim.online/links", "_blank")
                }
                className="text-[#f35a57] hover:underline font-medium"
              >
                Nassim MZILI
              </motion.button>
              <span>. All rights reserved.</span>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
